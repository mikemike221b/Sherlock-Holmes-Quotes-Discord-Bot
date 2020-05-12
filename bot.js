// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
var activateKeyword = '?quote';
let quotes = ['The Name Is Sherlock Holmes And The Address Is 221B Baker Street', '"Excellent!" I Cried. "Elementary" Said He.', 'The Game Is On!', 'You See But You Do Not Observe', "My Name Is Sherlock Holmes, It's My Buisness To Know What Other People Don't Know", "The Game Is Afoot!", "To A Great Mind Nothing Is Little", "When You Have Eliminated The Impossible Whatever Remains However Improbable Must Be The Truth", "No man burdens his mind with small matters unless he has some very good reason for doing so."];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    // client.user.setPresence({game: { name: 'Reading Sherlock... Again...', type: "LISTENING"}});
    client.user.setActivity("Reading Sherlock Holmes... Again... ( Author: MikeMike221b )");
});


client.on('message', msg => {
  if (msg.content === activateKeyword) {
      var output = quotes[getRndInt(quotes.length)];
    msg.reply(output);
  }
});

function getRndInt(Max) {
    var result = Math.floor(Math.random() * (Max - 0));
    return result;
}

client.login(process.env.DISCORD_TOKEN);