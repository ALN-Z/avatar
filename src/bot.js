const parse = require('./index')
const { Telegraf } = require('telegraf')
const Telegram = require('telegraf/telegram')
const token = "5812583804:AAEP9_sFrg_OQMwaa9KgraGS01yEWqTyAd0"

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const telegram = new Telegram(token)
let user_id = -1001895823305
const bot = new Telegraf(token)
bot.start(async (ctx) => {
    ctx.reply('Welcome')
    console.log(ctx.update.message.chat)
})
setInterval(
    ()=> {
        parse().then((data) =>
            {
                console.log(data)
                if(data){
                    telegram.sendPhoto(user_id, data.poster, {caption: `🎬🎬🎬 \n\n"${data.title}" - ФИЛЬМ ДОСТУПЕН! РЕБЯТА, ПОРА ПОКУПАТЬ БИЛЕТЫ! https://cinema.magiccity.uz/release/${data.id}\n\n 🎞🎞🎞`})
                }
            }
        )
    }, generateRandomIntegerInRange(5000,10000)
)

bot.launch()