const { ModalBuilder, TextInputBuilder, TextInputStyle, ApplicationCommandType, ActionRowBuilder } = require("discord.js")
module.exports = {
  name: "source-bin",
  description: "Uploads Code To Sourcebin, And Returns A Link!'",
  example: "/source-bin -> add code on modal",
  category: "utility",
  userPerms: [""],
  botPerms: [""],
  cooldown: 0,
  guildOnly: false,
  ownerOnly: false,
  toggleOff: false,
  nsfwOnly: false,
  maintenance: false,
  type: ApplicationCommandType.ModalSubmit,
  run: async (client, interaction) => {
    try {
      const modal = new ModalBuilder()
        .setCustomId(`source-bin`)
        .setTitle(`Source Bin`);
      const title = new TextInputBuilder()
        .setCustomId('sb-title')
        .setLabel('Title')
        .setStyle(1)
        .setMinLength(0)
        .setPlaceholder('Title of the code')
        .setRequired(false);
      const description = new TextInputBuilder()
        .setCustomId('sb-description')
        .setLabel('Description')
        .setStyle(1)
        .setMinLength(0)
        .setPlaceholder('Description of the code')
        .setRequired(false);
      const code = new TextInputBuilder()
        .setCustomId('sb-code')
        .setLabel('Code')
        .setStyle(2)
        .setMinLength(1)
        .setPlaceholder('Code Here....')
        .setRequired(true);
      const firstActionRow = new ActionRowBuilder().addComponents(title);
      const secActionRow = new ActionRowBuilder().addComponents(description);
      const thirdActionRow = new ActionRowBuilder().addComponents(code);
      
      modal.addComponents(firstActionRow, secActionRow, thirdActionRow);
      
      await interaction.showModal(modal);
    } catch (error) {
      client.slash_err(client, interaction, error);
    }
  },
};