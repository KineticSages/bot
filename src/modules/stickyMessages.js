const {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder   
} = require("discord.js")
require("colors");
module.exports = {
  async execute(client) {
    client.on('messageCreate', async message => {
      try {
        if (message.author.bot) return;
        client.schema("StickyMessages").findOne(
          { Guild: message.guild.id, Channel: message.channel.id },
          async (err, data) => {
            if (!data) return;
            const lastStickyMessage = await message.channel.messages
              .fetch(data.LastMessage)
              .catch(() => { });
            if (!lastStickyMessage) return;
            await lastStickyMessage.delete({ timeout: 1000 });
            const newMessage = await message.channel.send({
              content: data.Content
            })
            data.LastMessage = newMessage.id;
            data.save();
          }
        );
      } catch (error) {
        console.log(error.stack ? String(error.stack).red : String(error).red)
      }
    })
  }
}