const { Events } = require("discord.js");
const { findNumber } = require("../helper/findNumber");

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (!message.author.bot) {
            const content = message.content
            if (parseInt(findNumber(content)) > 100) {
                const client = message.client
                const channel = client.channels.cache.get(message.channelId)
                channel.send("https://tenor.com/view/la-cite-de-peur-combien-gif-18570725")
            }
        }
    }
}