const { version, ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle, Events } = require('discord.js');
/* const { version } = require(`discord.js`) */
var AsciiTable = require('ascii-table')
var table = new AsciiTable()
table.setBorder('│', '─', "✥", "✥");
table.setTitle(`Bot is online!`)
module.exports = {
  async execute(client) {
    client.on("ready", () => {
      const activities = [
        { name: `/uptime add | spicydevs.me`, type: 2 },
        { name: `${client.guilds.cache.size} Servers!`, type: 5 },
        { name: `100% Privacy!`, type: 3 },
        { name: `With You!`, type: 0 }

// LISTENING
      ];
      const status = [
        'online'
      ];
      let i = 0;
      setInterval(() => {
        if (i >= activities.length) i = 0
        client.user.setActivity(activities[i])
        i++;
      }, 5000);

      let s = 0;
      setInterval(() => {
        if (s >= activities.length) s = 0
        client.user.setStatus(status[s])
        s++;
      }, 30000);
      setTimeout(() => {
        client.logger((`Logged in as ${client.user.tag}!`).cyan.bold)
      }, 2000)
      
      // Rows
      table
        .addRow(`Bot`, client.user.tag)
        .addRow(`Guild(s)`, `${client.guilds.cache.size} Server(s)`)
        .addRow(`Member(s)`, `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Members`)
        .addRow(`Commands`, `${client.slashCommands.size} (Slash)`)
        .addRow(`Discord.js`, `${version}`)
        .addRow(`Node.js`, `${process.version}`)
        .addRow(`Memory`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`)
      setTimeout(() => { console.log(table.toString()) }, 3000)
    });


 
    client.on("guildCreate", async (guild) => {
    let channel1 = client.channels.cache.get("1041270795671961611")
    const owner = guild.fetchOwner();
      // Listeing to the guildCreate event.
    // Filtering the channels to get only the text channels.
        channel1.send(`** ** \n**New Server!** \nNAME : **${guild.name}** \nGUILD ID : ${guild.id} \n**Member Count** : ${guild.memberCount} \n**Owner** : <@!${guild.ownerId}> (${guild.ownerId}) \n**Total Servers** : ${client.guilds.cache.size} \n** **`)
      const fs = require('fs');

    fs.appendFile('./guilds.txt', `Added in Guild: ${guild.name} Id: ${guild.id}`, function (err) {
    if (err) throw err;
  });
  });
   




 const { ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle, Events } = require('discord.js');




    
   client.on("messageCreate", async message => {
     /* 
*/
     
  if (message.content.startsWith('.servers')) {
    if (message.author.id !== "526015297887404042") return;
    client.guilds.cache.forEach(guild => {
      message.author.send({ content: `> Server Name : \`${guild.name}\` \n> Server ID : \`(${guild.id})\` \n> Members Count :  \`${guild.memberCount}\`` })
    })
  }

    if (message.content.startsWith('.ayan')) {
    message.author.send("Ayan tu chutiya hai mc")
    }

     if (message.content.startsWith('.secret')) {
    message.author.send(`${message.author.tag} tu chutiya hai mc`)
     }

    if (message.author.bot) return;

    if (message.content.includes("@here") || message.content.includes("@everyone") || message.type == "REPLY") return;

    if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
        
    const exampleEmbed = new EmbedBuilder()
	.setColor(0x000000)
	.setTitle('Upt1me')
	.setURL('https://spicydevs.me/')
	.setAuthor({ name: `${message.author.tag}`, iconURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=256` })
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')

  .setTimestamp()
	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });




		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					
					.setLabel('Website')
          .setEmoji('🌐')
          .setURL("https://spicydevs.me")
					.setStyle(ButtonStyle.Link)
			);

		await message.channel.send({ content: "**Welcome I am Upt1me#8082** \nMy Prefix is `/` \nRun </help:0> to access the help menu \nYou can use the command </uptime add:0> to add your links to moniter.",  embeds: [exampleEmbed], components: [row] });
	} 
    

     
  /* if(message.content === `<@${client.user.id}>`) {
    
    const exampleEmbed = new EmbedBuilder()
	.setColor(0x000000)
	.setTitle('Upt1me')
	.setURL('https://spicydevs.me/')
	.setAuthor({ name: `${message.author.tag}`, iconURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=256` })
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')

  .setTimestamp()
	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });




		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					
					.setLabel('Website')
          .setEmoji('🌐')
          .setURL("https://spicydevs.me")
					.setStyle(ButtonStyle.Link)
			);

		await message.channel.send({ content: "**Welcome I am Upt1me#8082** \nMy Prefix is `/` \nRun </help:0> to access the help menu \nYou can use the command </uptime add:0> to add your links to moniter.",  embeds: [exampleEmbed], components: [row] });
	} 
    */
}); 



 

    
client.on("guildDelete", guild => {
    let channel1 = client.channels.cache.get("1041270795671961611")
    // this event triggers when the bot is removed from a guild.
    channel1.send(`** ** \nI have been removed from : \n**${guild.name}** \n**Total Servers** : ${client.guilds.cache.size} \n** **`);

  return;
    const fs = require('fs');

    fs.appendFile('./guilds.txt', `Removed from Guild: ${guild.name} Id: ${guild.id}`, function (err) {
    if (err) throw err;
  });
});
  }
}

