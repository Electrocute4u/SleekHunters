const { REST, Routes } = require('discord.js');

const { readdirSync, readFileSync } = require("fs")

// import and require .env reference
require('dotenv').config();

module.exports = (bot) => {
    bot.handleCommands = async() => {

    // Deleting and reacquiring functions file
    delete require.cache[require.resolve("../../utils/functions")];
    const { filePathBot, CustomLog } = require("../../utils/functions")

        // Store all Owner-only functions here by name
        let devCommands = []

        // Find subfolders in /commands then push all .js files to commandArray in bot.js
        const commandFolders = readdirSync(`${filePathBot()}/commands`)
        for (const folder of commandFolders) {
            const commandFiles = readdirSync(`${filePathBot()}/commands/${folder}`).filter((file) => file.endsWith(".js"))
 
            const { commands, commandArray } = bot;
            for (const file of commandFiles) {
                const command = require(`../../commands/${folder}/${file}`);
                commands.set(command.data.name, command);
                // Create exception for admin commands
                if(folder.toLowerCase() == "admin") devCommands.push(command.data.name.toLowerCase())
                commandArray.push(command.data.toJSON());
            }
        }
        // Call a synched version of config.json
        const {dev, slashGuildID} = JSON.parse(readFileSync(`${filePathBot()}/config.json`, 'utf8'))
        // Assign token depending on version
        let token = dev == false ? process.env.publicToken : process.env.devToken
  
        // Assign client ID depending on version
        let clientid = dev == false ? process.env.publicClientID : process.env.devClientID

        const guildid = slashGuildID;

        // Use REST Version 10.
        const rest = new REST({version: "10"}).setToken(token);
        
        try {
            
            if(dev == false){
                    // Delete all local (/) commands from support server.
                    // Prevents duplication of global and local (/) commands on public version.
                    rest.get(Routes.applicationGuildCommands(clientid, slashGuildID))
                    .then(data => {
                        const promises = [];
                        for (const command of data) {
                            const deleteUrl = `${Routes.applicationGuildCommands(clientid, slashGuildID)}/${command.id}`;
                            promises.push(rest.delete(deleteUrl));
                        }
                    return Promise.all(promises);
            });
            CustomLog("Deleted all local (/) commands from Support Server", "Info")
            CustomLog("Started refreshing Public Application (/) Commands...", "Info")
                // Filters out the admin commands from commandArray so only global commands remains
                const noDevForPublic = bot.commandArray.filter(function (command) {
                    return !devCommands.includes(command.name);
                });
                
                // Pushes the (/) commands globally 
                await rest.put(Routes.applicationCommands(clientid), {
                    body: noDevForPublic
                })
                CustomLog("Started refreshing Global Application (/) Commands...", "Info")
                // Filter out all global (/) commands so only admin commands remains
                const onlyDevForSupportServer = bot.commandArray.filter(function (command) {
                    return devCommands.includes(command.name);
                });
                // Push only admin (/) commands locally to the public support server
                await rest.put(Routes.applicationGuildCommands(clientid, guildid), {
                    body: onlyDevForSupportServer
                })
            }

            // Push all (/) commands in dev environment for testing
            if(dev == true){
                CustomLog("Started refreshing Local Test Application (/) Commands...", "Info")
                await rest.put(Routes.applicationGuildCommands(clientid, guildid), {
                    body: bot.commandArray
                })
            }
            CustomLog("Successfully reloaded all Application (/) commands.", "Info")
            
        } catch (error) {
            console.error(error);
        }
    };
}