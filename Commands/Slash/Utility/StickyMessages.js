const { ModalBuilder, TextInputBuilder, TextInputStyle, ApplicationCommandType, ActionRowBuilder } = require("discord.js")
module.exports = {
  name: "stickymsg",
  description: "Set up stickey messages in server channel",
  usage: "",
  category: "utility",
  userPerms: ["Administrator"],
  botPerms: ["Administrator"],
  cooldown: 5,
  guildOnly: false,
  ownerOnly: false,
  toggleOff: false,
  nsfwOnly: false,
  maintenance: false,
  type: ApplicationCommandType.ModalSubmit,
  options: [
    {
      name: "add",
      description: "Stick a message in a channel",
      type: 1
    },
    {
      name: "remove",
      description: "Unstick a message in a channel",
      type: 1,
      options: [
        {
          name: "channel",
          description: "select a channel",
          type: 7,
          required: true
        }
      ]
    },
    {
      name: "list",
      description: "Show all your guild sticky messages",
      type: 1
    }
  ],
  run: async (client, interaction) => {
    try {
      const sub = interaction.options._subcommand;
      if (sub === "add") {
        const modal = new ModalBuilder()
          .setCustomId(`sticky-add`)
          .setTitle(`Sticky Message`);
        const input = new TextInputBuilder()
          .setCustomId('sm-input')
          .setLabel('Message')
          .setStyle(2)
          .setMinLength(0)
          .setPlaceholder('Ex: This is a channel')
          .setRequired(true);
        const firstActionRow = new ActionRowBuilder().addComponents(input);
        modal.addComponents(firstActionRow);
        interaction.showModal(modal);

      } else if (sub === "remove") {
        const channel = interaction.options.getChannel('channel');
        client.schema("StickyMessages").findOne({
          Guild: interaction.guild.id,
          Channel: channel.id
        }, async (err, data) => {
          if (data) {
            client.schema("StickyMessages").findOneAndDelete({
              Guild: interaction.guild.id,
              Channel: channel.id
            }).then(() => {
              return interaction.reply({
                content: client.emotes.MESSAGE.y + " Sticky message deleted from" + channel,
                ephemeral: true,
                components: [client.linksButtons2]
              })
            })
          } else {
            return interaction.reply({
              embeds: [
                client.Embed(false)
                  .setDescription(`❌ No data found`)
              ]
            })
          }
        })
      } else if (sub === "list") {
        client.schema("StickyMessages").find({
          Guild: interaction.guild.id
        }, async (err, data) => {
          if (data) {
            let lb = data.map((value, index) => `${index + 1} Channel: <#${value.Channel}>`)
            require(`${process.cwd()}/src/functions/createLeaderboard.js`)(client, interaction, "💬・Sticky Message", lb)
          } else {
            return interaction.reply({
              embeds: [
                client.Embed(false)
                  .setDescription(`❌ No data found`)
              ]
            })
          }
        })
      }
    } catch (error) {
      client.slash_err(client, interaction, error);
    }
  }
};