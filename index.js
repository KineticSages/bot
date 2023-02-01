const { Client, GatewayIntentBits, Partials, Intents, Collection } = require('discord.js');
const set = require(`${process.cwd()}/Assets/Config/settings`);
const config = require(`${process.cwd()}/Assets/Config/config.js`);
require(`colors`)


const client = new Client({
  shardCount: 2,
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: false,
  },
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,  GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ],
  partials: [
    Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction
  ]
});




const TOKEN = config.TOKEN;

[`variables`, `extraEvents`, `checker`, `mongo_db`, `server`, 'slashCommand', 'events', `antiCrash`].forEach((handler) => {
  const file = require(`./src/handlers/${handler}`)
  if (file.execute) file.execute(client);
  else file(client);
})


client.login(config.TOKEN).catch((error) => { 
  console.log((error.message).bold.red);
})


module.exports = client;

// auto kill 
setInterval(() => {
  if (set.REPL_SETTINGS.AUTO_KILL && set.REPL_USER) {
    if (!client) {
      client.logger("Rate limit assumed, restarting")
      process.kill(1)
    }
  }
}, 5000)