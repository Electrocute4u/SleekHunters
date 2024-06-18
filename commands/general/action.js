const { SlashCommandBuilder } = require("discord.js");
const fs = require('fs');
const path = require('path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("action")
        .setDMPermission(false)
        .setDescription("Perform an action on multiple users")
        .addSubcommand(subcommand => 
            subcommand
            .setName("use")
            .setDescription('Use an action on a user or multiple users.')
            .addStringOption(option => 
            option.setName('type')
                .setDescription('The type action to perform, find all actions in /action list')
                .setRequired(true)
                .setAutocomplete(true))
        .addStringOption(option => 
            option.setName('users')
                .setDescription('User ID, @Mention, Username, Nickname or Globalname, seperate users with a comma')
                .setRequired(true))
        )
        .addSubcommand(subcommand => 
            subcommand
            .setName("list")
            .setDescription('A list of all actions available.')
        ),
    
    async autoComplete(interaction) {
      const focusedOption = interaction.options.getFocused(true);
      
        if (focusedOption.name === 'type') {
            const actionDir = path.join(__dirname, '../../images/action_images');
            const folders = fs.readdirSync(actionDir, { withFileTypes: true })
                .filter(dirent => dirent.isDirectory())
                .map(dirent => dirent.name);

            // Filter choices and ensure they are within the character limit
            const choices = folders.filter(folder => folder.toLowerCase().includes(focusedOption.value.toLowerCase()))
                                   .slice(0, 25); // Ensure we return a maximum of 25 choices

            await interaction.respond(choices.map(choice => ({
                name: choice.length > 25 ? choice.substring(0, 25) : choice,
                value: choice.length > 25 ? choice.substring(0, 25) : choice,
            })));
        }
    },
    
    async execute(interaction, bot, tools) {
        // Calling config and utils file
        const { readFileSync } = require("fs");
        const config = JSON.parse(readFileSync(`./config.json`, 'utf8'));

        // Acquire file name and folder name
        let dir = config.dev == true ? __dirname.split(`\\`).slice(-1)[0] : __dirname.split(`/`).slice(-1)[0];
        let fileName = config.dev == true ? __filename.split(`\\`).slice(-1)[0] : __filename.split(`/`).slice(-1)[0];

        // Delete and reacquire the cache of command function
        delete require.cache[require.resolve(`${config.provider == true ? `/home/electrocute4u/bot` : `../..`}/commandFunctions/${dir}/${fileName}`)];
        
        // Executing the command file
        const commandFile = require(`${config.provider == true ? `/home/electrocute4u/bot` : `../..`}/commandFunctions/${dir}/${fileName}`);
        await commandFile.command(interaction, tools, bot, config);
    }
};