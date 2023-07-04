import { Bot, Context } from 'grammy';
import dotenv from 'dotenv';

dotenv.config();

const bot = new Bot(process.env.BOT_TOKEN!);

bot.command('start', async (ctx: Context) => {
  try {
    await ctx.reply('Привет, я твой бот!');
  } catch (err) {
    console.error(err);
  }
});

bot.on('message', async (ctx: Context) => {
  try {
    await ctx.reply('Я всегда тут, если тебе нужно со мной поговорить.');
  } catch (err) {
    console.error(err);
  }
});

bot.start();