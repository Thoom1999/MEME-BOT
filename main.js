// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config()
var path = require("node:path")
const fs = require("node:fs");
const { channel } = require('node:diagnostics_channel');
const token= process.env.DISCORD_TOKEN

// Create a new client instance
const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, 
        GatewayIntentBits.MessageContent, 
        GatewayIntentBits.GuildMessages] 
    });

// Loop through the events folder to get each event
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));
    
for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

// Log in to Discord with your client's token
client.login(token);