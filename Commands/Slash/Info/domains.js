const { EmbedBuilder, ApplicationCommandType } = require('discord.js')

module.exports = {
	name: 'domains',
	description: "Shows you the list of FREE Domains!",
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
      
       const embed = new EmbedBuilder()
            .setTitle('FREE DOMAINS')
            .setColor(0x000000)

.setURL(`https://spicydevs.me`)
         .setDescription(`**NOTE:** \nYou can redeem upto **3** Domains \nWe also provide free emails directing to your email. \nExample contact@domain.com redirecting mail to yourmail@gmail.com`)
            .addFields([
                {
                    name: `{name}.confess.ml`,
                    value: `Cost: Free`,
                    inline: true
                },
                {
                    name: `{name}.codez.ml`,
                    value: `Cost: Free`,
                    inline: true
                },
                {
                    name: `{name}.getcodes.ml`,
                    value: `Cost: Free`,
                    inline: true
                },
                {
                    name: `{name}.dcbot.ml`,
                    value: `Cost: DM Aayu5h#1737`,
                    inline: true
                },
                  {
                    name: `{name}.tk`,
                    value: `Cost: Free`,
                    inline: true
                },
                  {
                    name: `{name}.me`,
                    value: `Cost: ₹30`,
                    inline: true
                },
                {
                    name: `Other Domains (Free)`,
                    value: `.ml \n.cf \n.ga \n.gq \n.is-a.dev \n.is-a-good.dev \n.is-not-a.dev \n.js.cool \n`,
                    inline: true
                },
                {
                    name: `To issue a Subdomain!`,
                    value: `DM Aayu5h#1737 (<@526015297887404042>)`,
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