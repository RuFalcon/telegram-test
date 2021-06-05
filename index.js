const TelegramApi = require('node-telegram-bot-api');

const token = '1834950148:AAF_OYAQjCm0v6QzXkti7uW9G5yEwJvoPyY';

const bot = new TelegramApi(token , {polling: true});


bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});