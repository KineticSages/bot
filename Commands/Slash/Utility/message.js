const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle,ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'first-message',
    description: "Get the First Message in a Channel",
  usage: "",
  category: "utility",
    userPerms: [''],
    botPerms: [''],
    cooldown: 3,
  guildOnly: false,
  ownerOnly: false,
  toggleOff: false,
  nsfwOnly: false,
  maintenance: false,
    type: ApplicationCommandType.ChatInput,
  options: [
        {
            name: 'channel',
            description: "Which channel's first message you want to check?",
            type: ApplicationCommandOptionType.Channel,
       required: false      
        }
    ],

    run: async (client, interaction) => {
 
    try{ 
       
let channel = interaction.options.getChannel("channel") || interaction.channel;

       const fetchmessages = await channel.messages.fetch({ limit: 1, after: 1 })
    const msg = fetchmessages.first()

    const embed = new EmbedBuilder()
      .setTitle(`First Message`)
.setDescription(`**Message Content:** ${msg.content}\n**Sent By:** ${msg.author}\n**Date sent:** <t:${parseInt(msg.createdTimestamp / 1000)}:R>\n**URL:** [Click Here](${msg.url})\n**Channel:** <#${channel.id}>`)
.setColor('#f54242')
      .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
  const actionRow = new ActionRowBuilder()
        .addComponents([
            new ButtonBuilder()
            .setLabel('Go to First Message')

            .setURL(`${msg.url}`)
            .setStyle(ButtonStyle.Link)
        ])
    interaction.reply({ embeds: [embed], components: [actionRow] })
      
    } catch (error){
      client.slash_err(client, interaction, error);
    }
    }
};