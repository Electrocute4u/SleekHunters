const { REST, Routes } = require('discord.js');

const { readdirSync, readFileSync } = require("fs")

// import and require .env reference
require('dotenv').config();

module.exports = (bot) => {


    bot.handleCommands = async() => {
    // Calling config file
    const config = JSON.parse(readFileSync(`./config.json`, 'utf8'))
    
    // Calling in functions
    const tools = require(`${config.provider == true ? `/home/electrocute4u/bot` : `../..`}/utils/functions`);

        // Store all Owner-only functions here by name
        let devCommands = []

        // Find subfolders in /commands then push all .js files to commandArray in bot.js
        const commandFolders = readdirSync(`${config.provider == true ? `/home/electrocute4u/bot` : `.`}/commands`)
        for (const folder of commandFolders) {
            const commandFiles = readdirSync(`${config.provider == true ? `/home/electrocute4u/bot` : `.`}/commands/${folder}`).filter((file) => file.endsWith(".js"))
 
            const { commands, commandArray } = bot;
            for (const file of commandFiles) {
                const command = require(`${config.provider == true ? `/home/electrocute4u/bot` : `../..`}/commands/${folder}/${file}`);
                commands.set(command.data.name, command);
                // Create exception for admin commands
                if(folder.toLowerCase() == "admin") devCommands.push(command.data.name.toLowerCase())
                commandArray.push(command.data.toJSON());
            }
        }
        // Call a synched version of config.json
        const {dev, slashGuildID, slashGuildIDPublic} = JSON.parse(readFileSync(`./config.json`, 'utf8'))

        // Assign token depending on bot version
        let token = dev == false ? process.env.publicToken : process.env.devToken
  
        // Assign client ID depending on version
        let clientid = dev == false ? process.env.publicClientID : process.env.devClientID

        const guildid = dev === false ? slashGuildIDPublic : slashGuildID;

        // Using the REST Version 10 for stable performence.
        const rest = new REST({version: "10"}).setToken(token);
        
        try {
            
            //if(dev == false){
            //        // Delete all local (/) commands from the set test server.
            //        // Prevents duplication of global and local (/) commands on public version.
            //        rest.get(Routes.applicationGuildCommands(clientid, slashGuildID))
            //        .then(data => {
            //            const promises = [];
            //            for (const command of data) {
            //                const deleteUrl = `${Routes.applicationGuildCommands(clientid, slashGuildID)}/${command.id}`;
            //                promises.push(rest.delete(deleteUrl));
            //            }
            //        return Promise.all(promises);
            //});
            //tools.CustomLog("Deleted all local (/) commands from Test Server", "Info")
            //tools.CustomLog("Started refreshing Public Application (/) Commands...", "Info")
            //    // Filters out the admin commands from commandArray so only global commands remains
            //    const noDevForPublic = bot.commandArray.filter(function (command) {
            //        return !devCommands.includes(command.name);
            //    });
            //    
            //    // Pushes the (/) commands globally 
            //    await rest.put(Routes.applicationCommands(clientid), {
            //        body: noDevForPublic
            //    })
            //    tools.CustomLog("Started refreshing Global Application (/) Commands...", "Info")
            //    // Filter out all global (/) commands so only admin commands remains
            //    const onlyDevForSupportServer = bot.commandArray.filter(function (command) {
            //        return devCommands.includes(command.name);
            //    });
            //    // Push only admin (/) commands locally to the public test server
            //    await rest.put(Routes.applicationGuildCommands(clientid, guildid), {
            //        body: onlyDevForSupportServer
            //    })
            //}

            // Push all (/) commands in dev environment for testing
            if(dev == true){
                tools.CustomLog("[DEV] Uploading Application (/) Commands...", "Info")
                await rest.put(Routes.applicationGuildCommands(clientid, guildid), {
                    body: bot.commandArray
                })
            }
            if(dev == false){
                tools.CustomLog(`[PUBLIC] Uploading Application (/) Commands...`, "Info")
                await rest.put(Routes.applicationGuildCommands(clientid, guildid), {
                    body: bot.commandArray
                })
            }
            tools.CustomLog("Successfully uploaded all Application (/) commands!", "Info")
            
        } catch (error) {
            console.log(error)
            tools.CustomLog(error, "Error");
        }
    };
}