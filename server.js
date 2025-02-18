import { Telegraf, Markup } from 'telegraf';
import userModel from './models/user.js';
import dotenv from 'dotenv';
import dbConnect from './config/dbConnect.js';
import gemini from './utils/gemini.js';
import taskModel from './models/tasks.js';
import { INFO_TEXT } from './utils/constants.js';
import express from 'express';

dotenv.config();

const app = express();
const bot = new Telegraf(process.env.TELEGRAM_BOT_API);

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
dbConnect(process.env.MONGO_URL);

// // Middleware to parse JSON requests
// app.use(express.json());

// // Webhook setup
// const PORT = process.env.PORT || 843;
// const WEBHOOK_PATH = `/webhook/${bot.secretPathComponent()}`;
// const WEBHOOK_URL = `${process.env.PUBLIC_URL}${WEBHOOK_PATH}`;  // Ensure PUBLIC_URL is set to your domain

// // Register Webhook
// bot.telegram.setWebhook(WEBHOOK_URL);

// // Express route to receive webhook updates
// app.post(WEBHOOK_PATH, (req, res) => {
//     bot.handleUpdate(req.body);
//     res.status(200).send('OK');
// });

// // Express route to provide bot link on home page
// app.get('/', (req, res) => {
//     res.send('<h1><a href="https://t.me/nerdyabhi_bot">Telegram Bot Link</a></h1>');
// });

// Bot Commands and Handlers



// // Graceful shutdown
// process.once('SIGINT', () => bot.stop('SIGINT'));
// process.once('SIGTERM', () => bot.stop('SIGTERM'));

// Start Express server
app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});
