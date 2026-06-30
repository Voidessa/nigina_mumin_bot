import 'dotenv/config';
import mongoose from 'mongoose';
import { bot } from './api/bot';
import connectToDatabase from './lib/database';

async function run() {
    try {
        console.log('Connecting to DB...');
        await connectToDatabase();
        console.log('DB Connected.');

        // Notify admin if running in Mock DB mode
        if (!mongoose.connection.readyState && process.env.ADMIN_ID) {
            try {
                await bot.api.sendMessage(process.env.ADMIN_ID, '⚠️ ВНИМАНИЕ: Бот не смог подключиться к MongoDB и работает в режиме ВРЕМЕННОЙ памяти (Mock DB). Вся статистика будет обнуляться при перезагрузке сервера! Проверьте логи Northflank и настройки MONGODB_URI.');
            } catch (e) {
                console.error('Could not send admin warning:', e);
            }
        }

        console.log('Starting bot in polling mode...');
        await bot.api.deleteWebhook();
        await bot.start({
            onStart: (botInfo) => {
                console.log(`Bot @${botInfo.username} is up and running!`);
            },
        });
    } catch (error) {
        console.error('Error starting bot:', error);
    }
}

run();
