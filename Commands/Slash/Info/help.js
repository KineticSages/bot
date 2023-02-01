const { EmbedBuilder, ApplicationCommandType } = require('discord.js')

module.exports = {
	name: 'help',
	description: "Shows you Help commands!",
  usage: "/help",
  category: "info",
	userPerms: [''],
	botPerms: [''],
	cooldown: 30,
  guildOnly: false,
  ownerOnly: false,
  toggleOff: false,
  nsfwOnly: false,
  maintenance: false,
	type: ApplicationCommandType.ChatInput,
  	run: async (client, interaction) => {
      
       const embed = new EmbedBuilder()
            .setTitle('Upt1me Commands')
            .setColor(0x000000)

.setURL(`https://spicydevs.me`)
         .setDescription(`**NOTE:** \nThis Bot is totally in Slash Commands`)
            .addFields([
                {
                    name: `</help:0>`,
                    value: `Why...`,
                    inline: true
                },
                {
                    name: `</uptime add:0>`,
                    value: `Adds uptime/moniter to your Link.`,
                    inline: true
                },
                {
                    name: `</uptime remove:0>`,
                    value: `Removes uptime/moniter to your Link.`,
                    inline: true
                },
                {
                    name: `</uptime projects:0>`,
                    value: `Gives you a List of URLs added by You.`,
                    inline: true
                },
                  {
                    name: `</uptime total:0>`,
                    value: `Shows Total URLs/Projects on the Database.`,
                    inline: true
                },
                  {
                    name: `</domains:0>`,
                    value: `Shows you a List of Free Domains Provided by Us.`,
                    inline: true
                },
                {
                    name: `</ping:0>`,
                    value: `Shows the ping/latency of the Bot.`,
                    inline: true
                },
                {
                    name: `Credits`,
                    value: `Made by \nAayu5h#1737 (<@526015297887404042>)`,
                    inline: true
                }
                 ])
      
      .setFooter({
            iconURL: client.user.displayAvatarURL(),
            text: client.user.tag
        });
            await interaction.reply({
                embeds: [embed]
            });
    }
};