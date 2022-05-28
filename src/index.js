const { Client } = require("discord.js");
const data = require('../data/config')
const loginNotification = data.owenerID
const client = new Client({
  intents: ["GUILDS", "DIRECT_MESSAGES", "GUILD_MESSAGES"],
});
 
// BOT IS NOW ONLINE
client.on('ready', async(members) => {
    console.log(`Your application bot is ready`); // ready message

    // BOT ACTIVITY
    client.user.setPresence({
        activities: [{ 
          name: "Your applications", // type anything
          type: "WATCHING" // you can also change this example - PLAYING, STREAMING, LISTENING
        }],
        status: "online" // you can also change this example - online, idle, dnd
    })
    // BOT ACTIVITY END

    // SLASH COMMAND
    let guild = client.guilds.cache.get(data.guildId)
    if(guild) {
        await guild.commands.set([
            {
                name: "ping",
                description: 'sends bot ping'
            },
            {
                name: "help",
                description: 'send help message'
            },
            {
                name: "setup",
                description: 'setup application your channel'
            }
        ])
    }
    require('../data/forms/form') (client, data)

})

client.login(data.token)