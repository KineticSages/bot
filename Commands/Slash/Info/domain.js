const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, SelectMenuBuilder } = require('discord.js');
//===Code===\\

module.exports = {
  name: 'domaim',
  description: "Shows you a List of FREE Domains!",
  category: "info",
  cooldown: 10,
  guildOnly: false,
  ownerOnly: true,
  toggleOff: false,
  nsfwOnly: false,
  maintenance: false,
  botPerms: "ViewChannel",
  userPerms: "ViewChannel",
  type: ApplicationCommandType.ChatInput,
  run: async (client, interaction) => {
    try {

      const slash_cmd_count = client.slashCommands.map(a => a).length;

      // first main page 🏆
      let em1 = client.Embed(false)
        .setAuthor({ name: `${client.user.username}`, iconURL: client.user.displayAvatarURL({ format: "png" }), url: "https://dsc.gg/spicydevs" })
        .setTitle(`Domains`)
        .addFields([
          { name: `Categories`, value: `>>> 🤑 Free Domains \n💲 Paid Domains\n🔨 Extra`, inline: true },

        ])
      // info commands 🎃
      let em2 = new EmbedBuilder()
        .setAuthor({ name: `Information Commands [${client.commands.filter((cmd) => cmd.category === "info").size + client.slashCommands.filter((cmd) => cmd.category === "info").size}]`, iconURL: client.user.displayAvatarURL({ format: "png" }), url: "https://discord.gg/pXRT2FusPb" })
        .setDescription(`**Prefix**:\n ${client.commands.filter((cmd) => cmd.category === "info").sort((a, b) => a.name.localeCompare(b?.name)).map((cmd) => `\`${cmd.name}\``).join("︲") || "No prefix command in this category"}\n\n **Slash:**\n${client.slashCommands.filter((cmd) => cmd.category === "info").sort((a, b) => a.name.localeCompare(b?.name)).map((cmd) => `\`${cmd.name}\``).join("︲") || "No slash command in this category"}`)
      // Music commands 🎶
      let em3 = new EmbedBuilder()
        .setAuthor({ name: `Music Commands [${client.commands.filter((cmd) => cmd.category === "music").size + client.slashCommands.filter((cmd) => cmd.category === "music").size}]`, iconURL: client.user.displayAvatarURL({ format: "png" }), url: "https://discord.gg/pXRT2FusPb" })
        .setDescription(`**Prefix**:\n ${client.commands.filter((cmd) => cmd.category === "music").sort((a, b) => a.name.localeCompare(b?.name)).map((cmd) => `\`${cmd.name}\``).join("︲") || "No prefix command in this category"}\n\n **Slash:**\n${client.slashCommands.filter((cmd) => cmd.category === "music").sort((a, b) => a.name.localeCompare(b?.name)).map((cmd) => `\`${cmd.name}\``).join("︲") || "No slash command in this category"}`)
      // Ranking commands 🎆
      let em4 = new EmbedBuilder()
        .setAuthor({ name: `Ranking Commands [${client.commands.filter((cmd) => cmd.category === "rank").size + client.slashCommands.filter((cmd) => cmd.category === "rank").size}]`, iconURL: client.user.displayAvatarURL({ format: "png" }), url: "https://discord.gg/pXRT2FusPb" })
        .setDescription(`**Prefix**:\n ${client.commands.filter((cmd) => cmd.category === "rank").sort((a, b) => a.name.localeCompare(b?.name)).map((cmd) => `\`${cmd.name}\``).join("︲") || "No prefix command in this category"}\n\n **Slash:**\n${client.slashCommands.filter((cmd) => cmd.category === "rank").sort((a, b) => a.name.localeCompare(b?.name)).map((cmd) => `\`${cmd.name}\``).join("︲") || "No slash command in this category"}`)
      // Economy commands 💰
      let em5 = new EmbedBuilder()
        .setAuthor({ name: `Economy Commands [${client.commands.filter((cmd) => cmd.category === "eco").size + client.slashCommands.filter((cmd) => cmd.category === "eco").size}]`, iconURL: client.user.displayAvatarURL({ format: "png" }), url: "https://discord.gg/pXRT2FusPb" })
        .setDescription(`**Prefix**:\n ${client.commands.filter((cmd) => cmd.category === "eco").sort((a, b) => a.name.localeCompare(b?.name)).map((cmd) => `\`${cmd.name}\``).join("︲") || "No prefix command in this category"}\n\n **Slash:**\n${client.slashCommands.filter((cmd) => cmd.category === "eco").sort((a, b) => a.name.localeCompare(b?.name)).map((cmd) => `\`${cmd.name}\``).join("︲") || "No slash command in this category"}`)
      // Utility commands ✨
      let em6 = new EmbedBuilder()
        .setAuthor({ name: `Utility Commands [${client.commands.filter((cmd) => cmd.category === "utility").size + client.slashCommands.filter((cmd) => cmd.category === "utility").size}]`, iconURL: client.user.displayAvatarURL({ format: "png" }), url: "https://discord.gg/pXRT2FusPb" })
        .setDescription(`**Prefix**:\n ${client.commands.filter((cmd) => cmd.category === "utility").sort((a, b) => a.name.localeCompare(b?.name)).map((cmd) => `\`${cmd.name}\``).join("︲") || "No prefix command in this category"}\n\n **Slash:**\n${client.slashCommands.filter((cmd) => cmd.category === "utility").sort((a, b) => a.name.localeCompare(b?.name)).map((cmd) => `\`${cmd.name}\``).join("︲") || "No slash command in this category"}`)
      //  NSFW commands 🔐
      let em7 = new EmbedBuilder()
        .setAuthor({ name: `NSFW Commands [${client.commands.filter((cmd) => cmd.category === "nsfw").size + client.slashCommands.filter((cmd) => cmd.category === "nsfw").size}]`, iconURL: client.user.displayAvatarURL({ format: "png" }), url: "https://discord.gg/pXRT2FusPb" })
        .setDescription(`**Prefix**:\n ${client.commands.filter((cmd) => cmd.category === "nsfw").sort((a, b) => a.name.localeCompare(b?.name)).map((cmd) => `\`${cmd.name}\``).join("︲") || "No prefix command in this category"}\n\n **Slash:**\n${client.slashCommands.filter((cmd) => cmd.category === "nsfw").sort((a, b) => a.name.localeCompare(b?.name)).map((cmd) => `\`${cmd.name}\``).join("︲") || "No slash command in this category"}`)
      //  Fun commands 🎭
      let em8 = new EmbedBuilder()
        .setAuthor({ name: `Fun Commands [${client.commands.filter((cmd) => cmd.category === "fun").size + client.slashCommands.filter((cmd) => cmd.category === "fun").size}]`, iconURL: client.user.displayAvatarURL({ format: "png" }), url: "https://discord.gg/pXRT2FusPb" })
        .setDescription(`**Prefix**:\n ${client.commands.filter((cmd) => cmd.category === "fun").sort((a, b) => a.name.localeCompare(b?.name)).map((cmd) => `\`${cmd.name}\``).join("︲") || "No prefix command in this category"}\n\n **Slash:**\n${client.slashCommands.filter((cmd) => cmd.category === "fun").sort((a, b) => a.name.localeCompare(b?.name)).map((cmd) => `\`${cmd.name}\``).join("︲") || "No slash command in this category"}`)
      //  Tikit commands 🎫
      let em9 = new EmbedBuilder()
        .setAuthor({ name: `Tikit Commands [${client.commands.filter((cmd) => cmd.category === "ticket").size + client.slashCommands.filter((cmd) => cmd.category === "ticket").size}]`, iconURL: client.user.displayAvatarURL({ format: "png" }), url: "https://discord.gg/pXRT2FusPb" })
        .setDescription(`**Prefix**:\n ${client.commands.filter((cmd) => cmd.category === "ticket").sort((a, b) => a.name.localeCompare(b?.name)).map((cmd) => `\`${cmd.name}\``).join("︲") || "No prefix command in this category"}\n\n **Slash:**\n${client.slashCommands.filter((cmd) => cmd.category === "ticket").sort((a, b) => a.name.localeCompare(b?.name)).map((cmd) => `\`${cmd.name}\``).join("︲") || "No slash command in this category"}`)
      //  GiveAway commands 🎉
      let em10 = new EmbedBuilder()
        .setAuthor({ name: `GiveAway Commands [${client.commands.filter((cmd) => cmd.category === "givwaway").size + client.slashCommands.filter((cmd) => cmd.category === "givwaway").size}]`, iconURL: client.user.displayAvatarURL({ format: "png" }), url: "https://discord.gg/pXRT2FusPb" })
        .setDescription(`**Prefix**:\n ${client.commands.filter((cmd) => cmd.category === "givwaway").sort((a, b) => a.name.localeCompare(b?.name)).map((cmd) => `\`${cmd.name}\``).join("︲") || "No prefix command in this category"}\n\n **Slash:**\n${client.slashCommands.filter((cmd) => cmd.category === "givwaway").sort((a, b) => a.name.localeCompare(b?.name)).map((cmd) => `\`${cmd.name}\``).join("︲") || "No slash command in this category"}`)

      let startButton = new ButtonBuilder()
        .setStyle(2)
        .setEmoji(`⏮️`)
        .setCustomId('start')

      let backButton = new ButtonBuilder()
        .setStyle(2)
        .setEmoji(`◀️`)
        .setCustomId('back')

      let forwardButton = new ButtonBuilder()
        .setStyle(2)
        .setEmoji(`▶️`)
        .setCustomId('forward')

      let endButton = new ButtonBuilder()
        .setStyle(2)
        .setEmoji(`⏭️`)
        .setCustomId('end')

      const options = []

      const option1 = { label: 'Owerview', value: '0' }
      const option2 = { label: 'Information', value: '1' }
      const option3 = { label: 'Music', value: '2' }
      const option4 = { label: 'Ranking', value: '3' }
      const option5 = { label: 'Economy', value: '4' }
      const option6 = { label: 'Utility', value: '5' }
      const option7 = { label: 'NSFW', value: '6' }
      const option8 = { label: 'Fun', value: '7' }
      const option9 = { label: 'Ticket', value: '8' }
      const option10 = { label: 'GiveAway', value: '9' }

      options.push(option1, option2, option3, option4, option5, option6, option7, option8, option9, option10)
      let menu = new SelectMenuBuilder()
        .setPlaceholder('Change page')
        .setCustomId('pagMenu')
        .addOptions(options)
        .setMaxValues(1)
        .setMinValues(1)

      const allButtons = [startButton.setDisabled(true), backButton.setDisabled(true), forwardButton.setDisabled(false), endButton.setDisabled(false)]

      let group1 = new ActionRowBuilder().addComponents(menu)
      let group2 = new ActionRowBuilder().addComponents(allButtons)

      let helpMessage = await interaction.reply({
        content: `Click on the buttons to change page`,
        embeds: [em1],
        components: [group1, group2],
      })
      const collector = helpMessage.createMessageComponentCollector((button) => button.user.id === interaction.user.id, { time: 60e3 });

      var embeds = [em1, em2, em3, em4, em5, em6, em7, em8, em9, em10]

      // for (let i = 0; i < 0; i++) embeds.push(new EmbedBuilder().setColor('ORANGE').setFooter(i))

      let currentPage = 0

      collector.on('collect', async (b) => {
        if (b.user.id !== interaction.user.id)
          return b.reply({
            content: `**You Can't Use it\n**`,
            ephemeral: true
          });
        switch (b.customId) {
          case 'start':
            currentPage = 0
            group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(true), backButton.setDisabled(true), forwardButton.setDisabled(false), endButton.setDisabled(false)])
            b.update({ embeds: [embeds[currentPage]], components: [group1, group2] })
            break;
          case 'back':
            --currentPage;
            if (currentPage === 0) { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(true), backButton.setDisabled(true), forwardButton.setDisabled(false), endButton.setDisabled(false)]) } else { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(false), endButton.setDisabled(false)]) }
            b.update({ embeds: [embeds[currentPage]], components: [group1, group2] })
            break;
          case 'forward':
            currentPage++;
            if (currentPage === embeds.length - 1) { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(true), endButton.setDisabled(true)]) } else { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(false), endButton.setDisabled(false)]) }
            b.update({ embeds: [embeds[currentPage]], components: [group1, group2] })
            break;
          case 'end':
            currentPage = embeds.length - 1;
            group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(true), endButton.setDisabled(true)])
            b.update({ embeds: [embeds[currentPage]], components: [group1, group2] })
            break;
          case 'pagMenu':
            currentPage = parseInt(b.values[0])
            if (currentPage === 0) { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(true), backButton.setDisabled(true), forwardButton.setDisabled(false), endButton.setDisabled(false)]) } else if (currentPage === embeds.length - 1) { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(true), endButton.setDisabled(true)]) } else { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(false), endButton.setDisabled(false)]) }
            b.update({ embeds: [embeds[currentPage]], components: [group1, group2] })
            break;
          default:
            currentPage = 0
            b.update({ embeds: [embeds[currentPage]], components: null })
            break;
        }
      });
      collector.on('end', b => {
        b.update({ embeds: [helpMessage.embeds[0]], components: [] })
      });
      collector.on('error', (e) => console.log(e));
      embeds.map((embed, index) => {
        embed.setColor(client.embed.color)
          .setFooter({ text: `Page ${index + 1} / ${embeds.length}`, iconURL: client.user.displayAvatarURL() });
      })
    } catch (error) {
      client.slash_err(client, interaction, error);
    }
  }
}

//===========================================================\\
//===================| Coded By Uo#1428 |====================\\
//==================| https://uo1428.tk/ |===================\\
//===========================================================\\
//=============| ΛLL IN ONΞ™ | Development </> |=============\\
//=============| https://discord.gg/pXRT2FusPb |=============\\
//===========================================================\\