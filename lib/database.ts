import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.warn('⚠️ WARNING: MONGODB_URI is not set. The bot will run in Mock Database mode.');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000, // Timeout after 5s
    };

    console.log('Connecting to MongoDB...');
    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
      console.log('MongoDB Connected successfully.');
      return mongoose;
    }).catch(err => {
      console.error('MongoDB connection failed, continuing in mock mode:', err.message);
      return null;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error('Failed to resolve DB promise:', e);
  }

  return cached.conn;
}

// Define User Schema
const userSchema = new mongoose.Schema({
  chatId: { type: Number, required: true, unique: true },
  username: { type: String },
  firstName: { type: String },
  joinedAt: { type: Date, default: Date.now },
  isSubscribed: { type: Boolean, default: false },
  sequenceStep: { type: Number, default: 0 },
  lastActivity: { type: Date, default: Date.now },
  language: { type: String, enum: ['ru', 'uz', 'en'], default: 'ru' }
});

// Mock model if not connected
const RealUser = mongoose.models.User || mongoose.model('User', userSchema);

const mockUsers = new Map<number, any>();

const makeMockDoc = (raw: any, chatId: number) => {
    if (!raw) return null;
    return {
        ...raw,
        save: function() {
            const cleanDoc = { ...this };
            delete cleanDoc.save;
            mockUsers.set(chatId, cleanDoc);
            console.log(`[Mock DB] Saved user ${chatId}:`, JSON.stringify(cleanDoc));
            return Promise.resolve(this);
        }
    };
};

export const User = new Proxy(RealUser, {
    get(target: any, prop: string | symbol) {
        const original = target[prop];
        if (!mongoose.connection.readyState && typeof original === 'function') {
            return (...args: any[]) => {
                console.log(`[Mock DB] Called ${String(prop)} with`, JSON.stringify(args));
                
                if (prop === 'findOne') {
                    const query = args[0] || {};
                    if (query.chatId) {
                        return Promise.resolve(makeMockDoc(mockUsers.get(query.chatId), query.chatId));
                    }
                    return Promise.resolve(null);
                }
                
                if (prop === 'create') {
                    const doc = args[0] || {};
                    if (doc.chatId) {
                        const newDoc = { ...doc, joinedAt: new Date(), isSubscribed: false, sequenceStep: 0 };
                        mockUsers.set(doc.chatId, newDoc);
                        return Promise.resolve(makeMockDoc(newDoc, doc.chatId));
                    }
                    return Promise.resolve(doc);
                }
                
                if (prop === 'findOneAndUpdate') {
                    const query = args[0] || {};
                    const update = args[1] || {};
                    if (query.chatId) {
                        const existing = mockUsers.get(query.chatId) || { chatId: query.chatId };
                        const updatedFields = update.$set || update;
                        const newDoc = { ...existing, ...updatedFields };
                        mockUsers.set(query.chatId, newDoc);
                        return Promise.resolve(makeMockDoc(newDoc, query.chatId));
                    }
                    return Promise.resolve(null);
                }
                
                if (prop === 'find') {
                    return Promise.resolve(Array.from(mockUsers.values()).map(u => makeMockDoc(u, u.chatId)));
                }
                
                return Promise.resolve(null);
            };
        }
        return original;
    }
}) as any;

export default connectToDatabase;
