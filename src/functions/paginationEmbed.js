const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const ms = require("ms")
require("colors");
module.exports = async (client, interaction, embeds, timeout, ephemeral = false, editReply = false) => {
  try {
    if (embeds.length <= 0) return editReply ? interaction.editReply({
      embeds: [
        new EmbedBuilder()
          .setDescription("No embeds to paginate!")
          .setColor(client.embed.color)
      ],
      content: []
    }) : interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setDescription("No embeds to paginate!")
          .setColor(client.embed.color)
      ],
      content: []
    });

    if (embeds.length === 1) return editReply ? interaction.editReply({
      embeds: [embeds[0]]
    }) : interaction.reply({
      embeds: [embeds[0]]
    });

    let current = 0;
    let emojis = ["⏮️", "◀️", "▶️", "⏭️"];
    const row = (state, counter) => [
      new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setEmoji(emojis[0])
          .setDisabled(state)
          .setStyle(2)
          .setCustomId("btn1"),
        new ButtonBuilder()
          .setEmoji(emojis[1])
          .setDisabled(state)
          .setStyle(2)
          .setCustomId("btn2"),
        new ButtonBuilder()
          .setLabel(`${counter + 1}/${embeds.length}`)
          .setDisabled(true)
          .setStyle(2)
          .setCustomId("counter-btn"),
        new ButtonBuilder()
          .setEmoji(emojis[2])
          .setDisabled(state)
          .setStyle(2)
          .setCustomId("btn3"),
        new ButtonBuilder()
          .setEmoji(emojis[3])
          .setDisabled(state)
          .setStyle(2)
          .setCustomId("btn4")
      )
    ];


    let curPage = editReply ? await interaction.editReply({
      embeds: [embeds[current]],
      components: row(false, current),
      fetchReply: true,
      ephemeral,
    }).catch((x) => { throw x }) : await interaction.reply({
      embeds: [embeds[current]],
      components: row(false, current),
      fetchReply: true,
      ephemeral,
    }).catch((x) => { throw x });

    const collector = curPage.createMessageComponentCollector((button) => button.user.id === interaction.user.id, { time: ms(timeout) });
    collector.on("collect", async (collected) => {
      if (collected.user.id !== interaction.user.id) return collected.reply({ content: `**You Can't Use it\n**`, ephemeral: true });
      if (collected.customId === "btn1") current = 0
      else if (collected.customId === "btn2") current--
      else if (collected.customId === "btn3") current++
      else if (collected.customId === "btn4") current = embeds.length - 1;
      if (current < 0) current = embeds.length - 1
      if (current >= embeds.length) current = 0
      collected.update({
        embeds: [embeds[current]],
        components: row(false, current),
        ephemeral
      }).catch(() => { });
    });
    collector.on("end", async (b) => {
      b.update({
        embeds: [embeds[current].setColor("#FF0000")],
        components: row(true, current),
        ephemeral
      }).catch((x) => { throw x });
    });
    embeds.map((embed, index) => {
      embed.setColor(client.embed.color).setFooter({ text: `Page ${index + 1} / ${embeds.length}`, iconURL: client.user.displayAvatarURL() });
    })

  } catch (error) {
    console.log(error.stack ? String(error.stack).red : String(error).red)
  }
}
