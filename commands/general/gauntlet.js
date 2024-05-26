const { SlashCommandBuilder } = require("discord.js")
const fs = require("fs")
const path = require('path');
const config = JSON.parse(fs.readFileSync(`./config.json`, 'utf8'))

module.exports = {
    data: new SlashCommandBuilder()
    .setName("gauntlet")
    .setDescription("Get leaderboard, guild's rank or information about Gauntlet")
    .setDMPermission(false)
    .addSubcommand(subcommand =>
      subcommand
        .setName('spot')
        .setDescription('Retrieve SleekHunters\'s current spot or from a previous season')
        .addStringOption(option =>
          option
          .setName("season")
          .setDescription("Which previous season to pull up the leaderboard for")
          .setRequired(false)
          .setAutocomplete(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('find')
        .setDescription(`Search for a guild by name and retireve their current spot.`)
        .addStringOption(option =>
          option
          .setName("season")
          .setDescription("Which previous season to pull up the leaderboard for")
          .setRequired(true)
          .setAutocomplete(true)
        )
        .addStringOption(option => 
          option
          .setName("name")
          .setDescription("The name/tag of the guild to retrieve placement for")
          .setRequired(true)
          .setAutocomplete(false)
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('leaderboard')
        .setDescription('View the Gauntlet leaderboard for this or a previous season')
        .addStringOption(option =>
          option
          .setName("season")
          .setDescription("Which previous season to pull up the leaderboard for")
          .setRequired(false)
          .setAutocomplete(true)
        )
    )
    .addSubcommand(subcommand =>
       subcommand
         .setName('info')
         .setDescription('Get some more information about Gauntlet')
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('stats')
        .setDescription('Get some Gauntlet statistics about SleekHunters')
   ),

    async autoComplete(interaction) {
      const tools = require(`${config.provider == true ? `/home/electrocute4u/bot` : `..`}/../utils/functions`)
      const focusedValue = interaction.options.getFocused();
      
      // return an ordered list of files in the input dir, with full paths
      function listFilesSync(dir) {
        let fileList = [];
        fs.readdirSync(dir).forEach((file) => {
          const fullPath = path.join(dir, file);
          // use lstat so this does not follow dir symlinks
          // (otherwise this will include files from other dirs, which I don't want)
          if (fs.lstatSync(fullPath).isDirectory()) {
            fileList = fileList.concat(listFilesSync(fullPath));
          } else {
            fileList.push(fullPath);
          }
        });
        return fileList;
      }
      let seasons = (listFilesSync(`${config.provider == true ? `/home/electrocute4u/bot` : `.`}/gauntlet`))
      
      seasons = seasons.map((value, index) => {
        if(config.provider == true) value = value.replace(`/home/electrocute4u/bot/gauntlet/`, "").replace(/.json/gi, "").replace(/_/gi, " ")
        if(config.provider == false) value = value.split(`gauntlet\\`)[1].replace(/.json/gi, "").replace(/_/gi, " ")
        return tools.toUpperCase(value) })
      
		  const choices = seasons.length > 24 ? seasons.slice(seasons.length-1-24, seasons.length-1) : seasons

		  const filtered = choices.filter(choice => choice.toLowerCase().startsWith(focusedValue.toLowerCase()));
      filtered.sort(function (a, b) {
        if (a.replace(/[/\d+/]/g, "$1") < b.replace(/[/\d+/]/g, "$1")) {
          return -1;
        }
        if (a.replace(/[/\d+/]/g, "$1") > b.replace(/[/\d+/]/g, "$1")) {
          return 1;
        }
        return 0;
      })
      
		  await interaction.respond(
		  	filtered.map(choice => ({ name: choice, value: choice.replace(/Season /gi, "").trim() })),
		  );
    },

    async execute(interaction, bot, tools) {
      
      // Acquire file name and folder name
      let dir = config.provider == true ? __dirname.split(`/`).slice(-1)[0] : __dirname.split(`\\`).slice(-1)[0]
      let fileName = config.provider == true ? __filename.split(`/`).slice(-1)[0] : __filename.split(`\\`).slice(-1)[0]
 
      // Delete and reacquire the cache of command function
      delete require.cache[require.resolve(`${config.provider == true ? `/home/electrocute4u/bot` : `../..`}/commandFunctions/${dir}/${fileName}`)];
      
      // Executing the command file
      const commandFile = require(`${config.provider == true ? `/home/electrocute4u/bot` : `../..`}/commandFunctions/${dir}/${fileName}`)
      await commandFile.command(interaction, tools, bot, config)
    } 
}