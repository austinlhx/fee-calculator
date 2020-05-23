const Discord = require("discord.js");
const bot = new Discord.Client();
const express = require('express');
const app = express();
const prefix = "!";

const token = 'Insert Bot Token'; 


app.set('port', (process.env.PORT));

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
    if (msg.channel.id === "Insert Channel ID here") { 
        if (msg.author.bot) return;
        var command = message.content
            .toLowerCase()
            .substr(1);
        let messageArray = message.content.split(" ");
        let args = messageArray.slice(1);

        if (command === "test"){
            msg.channel.send("The Fee Calculator bot is up and running!");
        }

        if (command === "fee"){
            if (!args[0]){
                message.channel.send("Please insert the price " + message.author);
            }

            var pricing = args[0];
            
            let payPal = (pricing * (1 - 0.029)) + 0.3;
            let ebay = (pricing * (1 - 0.1 - 0.029))
            let goat = (pricing * (1 - 0.095) + 5);
            let grailed = (pricing * (1 - 0.06 - 0.029));
            let stockx_one = (pricing * (1 - 0.095));
            let stockx_two = (pricing * (1 - 0.09));
            let stockx_three = (pricing * (1 - 0.085));
            let stockx_four = (pricing * (1 - 0.08));

            const embed = {
                title: "Fee Calculator",
                color: 8519796,
                timestamp: currentTime,
                footer: {
                    icon_url:
                        "https://cdn.discordapp.com/avatars/530778425540083723/7a05e4dd16825d47b6cdfb02b92d26a5.png",
                },
                thumbnail: {
                    url:
                        "https://i.ibb.co/f9CvMvX/Untitled-1-8.png"
                },
                author: {
                    name: "Account Generator",
                    url: "https://discordapp.com",
                    icon_url: bot.displayAvatarURL
                },
                fields: [
                    {
                        name: 'PayPal (2.9% + $0.30)',
                        value: payPal + ' | ' + (pricing - paypal),
                    },
                    {
                        name: 'eBay (10% + 2.9%)',
                        value: ebay + ' | ' + (pricing - ebay),
                    },
                    {
                        name: 'Goat (9.5% + $5)',
                        value: goat + ' | ' + (pricing - goat),
                    },
                    {
                        name: 'Grailed (6% + 2.9%)',
                        value: grailed + ' | ' + (pricing - grailed),
                    },
                    {
                        name: 'StockX Level1 (9.5%)',
                        value: stockx_one + ' | ' + (pricing - stockx_one),
                    },
                    {
                        name: 'StockX Level2 (9.0%)',
                        value: stockx_two + ' | ' + (pricing - stockx_two),
                    },
                    {
                        name: 'StockX Level3 (8.5%)',
                        value: stockx_three + ' | ' + (pricing - stockx_three),
                    },
                    {
                        name: 'StockX Level4 (8.0%)',
                        value: stockx_four + ' | ' + (pricing - stockx_four),
                    }
                ],
                footer: {
                    text: 'created by austin_hx#2583'
                },
                timestamp: new Date(),
            };
            message.channel.send({ embed });
        }
        
    }
});

bot.login(token);
