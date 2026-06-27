import { Bot, webhookCallback, InlineKeyboard } from 'grammy';
import connectToDatabase, { User } from '../lib/database';
import { t, LANGUAGES } from '../lib/i18n';

const token = process.env.BOT_TOKEN;
if (!token) throw new Error('BOT_TOKEN is unset');

export const bot = new Bot(token);
const CHANNEL_ID = process.env.CHANNEL_ID || '@nigina_influence'; 
const CHANNEL_LINK = process.env.CHANNEL_LINK || 'https://t.me/+isBY4MeyoylkZDMy';

// Connect to DB
connectToDatabase();

// --- Helpers ---

async function getUserLanguage(userId: number): Promise<string> {
    const user = await User.findOne({ chatId: userId });
    return user?.language || 'ru'; // Default to RU
}

async function checkSubscription(userId: number): Promise<boolean> {
    try {
        const member = await bot.api.getChatMember(CHANNEL_ID, userId);
        return ['creator', 'administrator', 'member'].includes(member.status);
    } catch (error) {
        console.error('Subscription check failed:', error);
        return false;
    }
}

// --- Handlers ---

bot.command('start', async (ctx) => {
    try {
        await connectToDatabase();
        const { id, username, first_name } = ctx.from!;

        // Find or create user
        // We don't set language here if it's new, we let them choose.
        // But if we want a default, we can set it to null or something, but schema has default 'ru'.
        // Let's check if the user *explicitly* selected a language before? 
        // For simplicity: If user exists, check if they saw the language picker. 
        // We'll trust the User object. If it's a fresh upsert, it gets default 'ru', 
        // but we want to force selection.
        
        let user = await User.findOne({ chatId: id });
        
        if (!user) {
             user = await User.create({
                chatId: id,
                username: username,
                firstName: first_name,
                language: null // We want to force selection
            });
        } else {
             // Update basic info
             user.username = username;
             user.firstName = first_name;
             user.lastActivity = new Date();
             await user.save();
        }

        // Language Selection Flow
        // If user has no language set (or we treat default strictly), show picker.
        // Since we added the field recently, existing users might have 'ru' by default if we migrated,
        // or undefined. The schema default is 'ru'. 
        // To be safe and user-friendly for "start", let's always offer language selection 
        // OR offer it if it's their first time. 
        // The prompt says "at start... choice of language".
        // Let's show language picker if it's a new interaction or explicit reset.
        
        // For a robust flow: Show language picker FIRST.
        const keyboard = new InlineKeyboard();
        LANGUAGES.forEach(lang => {
            keyboard.text(lang.label, `set_lang_${lang.code}`).row();
        });

        await ctx.reply(t('intro_select_language', 'ru'), { reply_markup: keyboard });

    } catch (error) {
        console.error('Error in /start:', error);
    }
});

// Language Selection Callback
bot.callbackQuery(/^set_lang_(.+)$/, async (ctx) => {
    const code = ctx.match[1];
    const { id } = ctx.from;

    // Update User Language
    await User.findOneAndUpdate(
        { chatId: id },
        { language: code }
    );

    // Confirm selection
    await ctx.answerCallbackQuery();
    await ctx.reply(t('language_selected', code));
    
    // Proceed to Subscription Check
    await handleSubscriptionCheck(ctx, id, code);
    
    // Cleanup the language picker message
    try {
        await ctx.deleteMessage();
    } catch(e) {}
});

// Subscription Check Logic
async function handleSubscriptionCheck(ctx: any, userId: number, lang: string) {
    const isSubscribed = await checkSubscription(userId);

    if (isSubscribed) {
        // Mark subscribed
        await User.findOneAndUpdate({ chatId: userId }, { isSubscribed: true });
        // Send Welcome
        await sendWelcome(ctx, lang);
    } else {
        // Ask to Subscribe
        const keyboard = new InlineKeyboard()
            .url(t('btn_subscribe', lang), CHANNEL_LINK)
            .row()
            .text(t('btn_check_sub', lang), 'check_subscription');

        await ctx.reply(t('subscribe_request', lang), { reply_markup: keyboard });
    }
}

// Callback: Check Subscription
bot.callbackQuery('check_subscription', async (ctx) => {
    const userId = ctx.from.id;
    const lang = await getUserLanguage(userId);
    const isSubscribed = await checkSubscription(userId);
    
    if (isSubscribed) {
        await ctx.answerCallbackQuery({ text: t('sub_confirmed', lang) });
        await User.findOneAndUpdate({ chatId: userId }, { isSubscribed: true });
        
        try { await ctx.deleteMessage(); } catch (e) {}
        
        await sendWelcome(ctx, lang);
    } else {
        await ctx.answerCallbackQuery({ text: t('not_subscribed', lang), show_alert: true });
    }
});

// Send Welcome Message
async function sendWelcome(ctx: any, lang: string) {
    const keyboard = new InlineKeyboard()
        .text(t('btn_watch_vsl', lang), 'watch_vsl');

    // Send the video note first with the buttons
    const videoNoteId = 'DQACAgIAAxkBAAM6aj_Tf6Ai2gpAdF9qbvgS0VKpyZYAAp2aAAI-fflJVYJ5xV83vuA8BA';
    await ctx.replyWithVideoNote(videoNoteId, { reply_markup: keyboard });

    // Then send the text message with the duplicated buttons
    await ctx.reply(t('welcome_message', lang), { parse_mode: 'Markdown', reply_markup: keyboard });
}

// Callback: Watch VSL
bot.callbackQuery('watch_vsl', async (ctx) => {
    const userId = ctx.from.id;
    const lang = await getUserLanguage(userId);
    
    // VSL URL could also be localized if needed, but assuming single URL for now or simple page
    const vslUrl = 'https://youtu.be/GZcVaV5Kd1E'; 
    
    const vslKeyboard = new InlineKeyboard()
        .url(t('btn_go_to_vsl', lang), vslUrl);

    await ctx.reply(t('vsl_link_text', lang), { parse_mode: 'Markdown', reply_markup: vslKeyboard });
    await ctx.answerCallbackQuery();
});

// --- Admin Broadcast (Preserved but simplified) ---
// Note: Broadcasts are usually one language. 
// For a multi-lang bot, admins usually send 3 messages or one universally understandable one.
// We will leave it as is for now.
const handleBroadcast = async (ctx: any) => {
    const adminId = Number(process.env.ADMIN_ID);
    if (ctx.from?.id !== adminId) return;

    const replyMessage = ctx.message?.reply_to_message;
    const rawText = ctx.message?.text || ctx.message?.caption || '';
    const messageContent = rawText.replace(/^\/broadcast(@\w+)?\s*/, '').trim();
    const photo = ctx.message?.photo;

    // ... (rest of logic same as before)
    // To save lines, I'll just put a placeholder comment or simplified version
    // but cleaner to keep it working.
    
    if (!messageContent && !photo && !replyMessage) return ctx.reply('⚠️ Empty broadcast');

    await ctx.reply('⏳ Broadcasting...');
    try {
        const users = await User.find({}, 'chatId');
        for (const user of users) {
            try {
                 if (replyMessage) {
                    await ctx.api.copyMessage(user.chatId, ctx.chat.id, replyMessage.message_id, {
                        caption: messageContent || replyMessage.caption,
                        parse_mode: 'Markdown'
                    });
                } else if (photo) {
                    const fileId = photo[photo.length - 1].file_id;
                    await ctx.api.sendPhoto(user.chatId, fileId, { caption: messageContent });
                } else {
                    await ctx.api.sendMessage(user.chatId, messageContent);
                }
            } catch (e) {}
        }
        await ctx.reply('✅ Done.');
    } catch (e) {
        console.error(e);
    }
};

bot.command('stats', async (ctx) => {
    try {
        const users = await User.find({});
        await ctx.reply(`📊 Количество пользователей в базе: ${users.length}`);
    } catch (e) {
        await ctx.reply(`Ошибка: ${e}`);
    }
});

bot.command('broadcast', handleBroadcast);

// export default webhookCallback(bot, 'http');
export const handleUpdate = (req: any, res: any) => webhookCallback(bot, 'http')(req, res);
