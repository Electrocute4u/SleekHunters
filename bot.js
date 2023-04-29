
const { Client, Collection, GatewayIntentBits } = require("discord.js")

const { readFileSync, readdirSync } = require("fs")
const config = JSON.parse(readFileSync(`./config.json`, 'utf8'))
const { connect } = require("mongoose")

// import and require .env reference
require('dotenv').config();
const {publicToken, devToken, databaseTokenPublic, databaseTokenDev} = process.env;

let token;
if (config.dev == false) token = publicToken
if (config.dev == true) token = devToken

// Calling in functions
const tools = require(`./utils/functions`);

const bot = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages]
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

// Require functions for handlers (commands, components and events)
const functionFolders = readdirSync(`./functions`)
for (const folder of functionFolders) {
    const functionFiles = readdirSync(`./functions/${folder}`).filter((file) => file.endsWith(".js"));
    for (const file of functionFiles)
        require(`./functions/${folder}/${file}`)(bot);
}

bot.handleEvents();
bot.handleCommands();

// Bot login
bot.login(token);

// Connect to the Database Cluster
(async () => { 
    await connect(config.dev == false ? databaseTokenPublic : databaseTokenDev).catch(console.error) 
})();