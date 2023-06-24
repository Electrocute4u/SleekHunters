const { Collection, GatewayIntentBits } = require("discord.js")
const discordClient = require("discord.js")
const { readFileSync, readdirSync } = require("fs")
const { connect } = require("mongoose")

// import and require .env reference
require('dotenv').config();
const {publicToken, devToken, databaseTokenPublic, databaseTokenDev, epicGamesAuth} = process.env;

// Calling config and utils file
const config = JSON.parse(readFileSync(`./config.json`, 'utf8'))
const tools = require(`${config.provider == true ? `/home/electrocute4u/bot` : `.`}/utils/functions`)

let token;
if (config.dev == false) token = publicToken
if (config.dev == true) token = devToken

const bot = new discordClient.Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions],
})

// Utilize the Hybrid Sharding instead of 
//const Cluster = require('discord-hybrid-sharding');

// Initiate client (with Cluster Manager handling shards)
// const bot = new Client({
//     intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages], // The needed intents for the bot to function
//     shards: Cluster.data.SHARD_LIST, // An array of shards that will get spawned (handled by Cluster Manager)
//     shardCount: Cluster.data.TOTAL_SHARDS, // Total number of shards (handled by Cluster Manager)
// });

// initialize the Client, so we can access the .broadcastEval()
// bot.cluster = new Cluster.Client(bot);

// Command collection
bot.commands = new Collection();
bot.commandArray = [];

// Buttons collection
bot.buttons = new Collection();

// Cooldown collection
bot.cooldown = new Collection(); 

// App (ticket) ongoing deletion collection
bot.appDeletes = new Collection();
bot.ticketCreateCooldown = new Collection();

// Require functions for handlers (commands, components and events)
const functionFolders = readdirSync(`${config.provider == true ? `/home/electrocute4u/bot` : `.`}/functions`)
for (const folder of functionFolders) {
    const functionFiles = readdirSync(`${config.provider == true ? `/home/electrocute4u/bot` : `.`}/functions/${folder}`).filter((file) => file.endsWith(".js"));
    for (const file of functionFiles)
        require(`${config.provider == true ? `/home/electrocute4u/bot` : `.`}/functions/${folder}/${file}`)(bot);
}

bot.handleEvents();
bot.handleCommands();

// Bot login
bot.login(token);
let epicClient

async function signIntoEpic() {

try {
    // Login to Epic Games API
    const { readFile, writeFile } = require('fs').promises;
    const { Client } = require('fnbr');

    let auth;
    try {
      auth = { deviceAuth: JSON.parse(await readFile(`./deviceAuth.json`)) };
    } catch (e) {
      auth = { authorizationCode: async () => epicGamesAuth };
    }
    
    epicClient = new Client({ auth });
    
    epicClient.on('deviceauth:created', (da) => writeFile(`./deviceAuth.json`, JSON.stringify(da, null, 2)));
    
    await epicClient.login();
    console.log(`Logged into Epic Games API as ${epicClient.user.displayName}`);
    } catch (e) {
        // handle error
        console.error(e)
    }
}


signIntoEpic().then(() => {
    bot.epicClient = epicClient
}).catch(() => null)

// Handle and log rejection errors without crashing process
// process.on('uncaughtException', (err, origin) => {
//     console.log(err.stack)
//     tools.CustomLog(`Caught exception: ${err}\n` + `Exception origin: ${origin}`);
// });

// Connect to the Database Cluster
// (async () => { 
//     await connect(config.dev == false ? databaseTokenPublic : databaseTokenDev).catch(console.error) 
// })();