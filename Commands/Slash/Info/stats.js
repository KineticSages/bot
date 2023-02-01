const { EmbedBuilder, ApplicationCommandType } = require('discord.js');
const axios = require('axios')
const osu = require('node-os-utils')

module.exports = {
	name: 'stats',
	description: "Shows current statistics about the bot",
  usage: "",
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
        interaction.deferReply()
        let djsVer = require('discord.js/package.json').version
        let nodeJSVer = process.version
        let serverCount = client.guilds.cache.size
        let channelCount = client.voice.adapters.size
        let totalMem = (osu.mem.totalMem() / Math.pow(1024, 2)).toFixed(2)
        let usedMem = await osu.mem.used().then(mem => {
            return mem.usedMemMb
        })
        let cpuPercent = await osu.cpu.usage()
        let embed = new EmbedBuilder()
            .setColor('#000000')
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL(), })
            .addFields(
                { name: '⌛ Memory Usage', value: `\`${usedMem}\`/\`${totalMem} MB\``, inline: true },
                { name: '🖥️ Servers', value: `\`${serverCount}\``, inline: true },
                { name: 'Discord.js', value: `\`${djsVer}\``, inline: true },
                { name: 'NodeJS', value: `\`${nodeJSVer}\``, inline: true },
                { name: '💽 CPU Usage', value: `\`${cpuPercent}%\``, inline: true },
            )
        await interaction.followUp({ embeds: [embed] })
    },
};