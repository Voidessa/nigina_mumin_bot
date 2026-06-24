import 'dotenv/config';
import { bot } from './api/bot';
import connectToDatabase from './lib/database';

async function run() {
    try {
        console.log('Connecting to DB...');
        await connectToDatabase();
        console.log('DB Connected.');

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
