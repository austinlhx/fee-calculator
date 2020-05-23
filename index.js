const Discord = require("discord.js");
const bot = new Discord.Client();
const express = require('express');
const app = express();
const prefix = "!";

const token = 'NzEzNjY2NDU3OTMzODQwNDk1.Xsjbuw.NU-ZhfAfd84iNMTHcLDQ9iPjjKs'; 


app.set('port', (process.env.PORT || 5000));

app.get(prefix, function (request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function () {
    console.log('App is running, server is listening on port ', app.get('port'));
});

bot.on("ready", () => {
    console.log(`${bot.user.tag} has connected to the server!`);
});


bot.on("message", msg => {
    if (msg.channel.id === "713618595472474174") { 
        if (msg.author.bot) return;
        var command = msg.content
            .toLowerCase()
            .slice(prefix.length)
            .split(" ")[0];
        

        if (command === "test"){
            msg.channel.send("The Fee Calculator bot is up and running!");
        }

        if (command === "fee"){
            let messageArray = msg.content.split(" ");
            let args = messageArray.slice(1);
            if (!args[0])
                return msg.reply("Please insert a price ");
            

            var pricing = args[0];

            let payPal = ((pricing * 0.971) - 0.3);
            let ebay = (pricing * 0.871);
            let goat = ((pricing * 0.905) - 5);
            let grailed = (pricing * 0.911);
            let stockx_one = (pricing * - 0.905);
            let stockx_two = (pricing * 0.91);
            let stockx_three = (pricing * 0.915);
            let stockx_four = (pricing * 0.92);

            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2
              })

            const embed = {
                title: "Fee Calculator",
                color: 8519796,
                footer: {
                    icon_url:
                        "https://cdn.discordapp.com/avatars/530778425540083723/7a05e4dd16825d47b6cdfb02b92d26a5.png",
                },
                thumbnail: {
                    url:
                        "Insert Custom Branding"
                },
                author: {
                    name: "Account Generator",
                    url: "https://discordapp.com",
                    icon_url: bot.displayAvatarURL
                },
                fields: [
                    {
                        name: 'PayPal (2.9% + $0.30)',
                        value: (formatter.format(payPal)) + ' | ' + (formatter.format(pricing - payPal)),
                    },
                    {
                        name: 'eBay (10% + 2.9%)',
                        value: (formatter.format(ebay)) + ' | ' + (formatter.format(pricing - ebay)),
                    },
                    {
                        name: 'Goat (9.5% + $5)',
                        value: (formatter.format(goat)) + ' | ' + (formatter.format(pricing - goat)),
                    },
                    {
                        name: 'Grailed (6% + 2.9%)',
                        value: (formatter.format(grailed)) + ' | ' + (formatter.format(pricing - grailed)),
                    },
                    {
                        name: 'StockX Level1 (9.5%)',
                        value: (formatter.format(stockx_one)) + ' | ' + (formatter.format(pricing - stockx_one)),
                    },
                    {
                        name: 'StockX Level2 (9.0%)',
                        value: (formatter.format(stockx_two)) + ' | ' + (formatter.format(pricing - stockx_two)),
                    },
                    {
                        name: 'StockX Level3 (8.5%)',
                        value: (formatter.format(stockx_three)) + ' | ' + (formatter.format(pricing - stockx_three)),
                    },
                    {
                        name: 'StockX Level4 (8.0%)',
                        value: (formatter.format(stockx_four)) + ' | ' + (formatter.format(pricing - stockx_four)),
                    }
                ],
                footer: {
                    text: 'created by austin_hx#2583'
                },
                timestamp: new Date(),
            };
            msg.channel.send({ embed });
        }
        
    }
});

bot.login(token);
