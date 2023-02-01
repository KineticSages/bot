const { ApplicationCommandType } = require("discord.js"),
  fetch = require("node-fetch");
module.exports = {  
  name: "screenshot",
  description: "take a screenshot of the web",
  category: "utility",
	userPerms: [""],
	botPerms: [""],
	cooldown: 5,
  guildOnly: false,
  ownerOnly: false,
  toggleOff: false,
  nsfwOnly: false,
  maintenance: false,
	type: ApplicationCommandType.ChatInput, 
  options: [  
    { 
      name: 'url', 
      description: 'The url you want to take screenshot from',  
      required: true,  
      type: 3  
    } 
  ], 
  run: async (client, interaction, args) => {
      try{
        let url = interaction.options.getString('url');
        if (url.length < 8)
          return interaction.reply({ content: `https is too short to reach - 8 limit` });
        const site = /^(https?:\/\/)/i.test(url) ? url : `http://${url}`;
        const { body } = await fetch(`https://image.thum.io/get/${site}/`);
        interaction.reply({
          files: [{
            attachment: body
          }]
        })
      } catch(error) {
         client.slash_err(client, interaction, error);  
      }
    }
}