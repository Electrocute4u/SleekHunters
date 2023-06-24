const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("trials")
    .setDescription("Get information about Lady Luck's Trials")
    .addSubcommand(subcommand =>
      subcommand
        .setName('info')
        .setDescription('Get some information about Trials')
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('currently')
        .setDescription(`This week's Trial Behemoth`)
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('next')
        .setDescription(`Next week's Trial Behemoth`)
    
    ),
    async execute(interaction, bot) {
      const {readFileSync} = require("fs")

      // Calling config and utils file
      const config = JSON.parse(readFileSync(`./config.json`, 'utf8'))
      const tools = require(`${config.provider == true ? `/home/electrocute4u/bot` : `../..`}/utils/functions`)
      
      // Acquire file name and folder name
      let dir = config.provider == true ? __dirname.split(`/`).slice(-1)[0] : __dirname.split(`\\`).slice(-1)[0]
      let fileName = config.provider == true ? __filename.split(`/`).slice(-1)[0] : __filename.split(`\\`).slice(-1)[0]
 
      // Delete and reacquire the cache of command function
      delete require.cache[require.resolve(`${config.provider == true ? `/home/electrocute4u/bot` : `../..`}/commandFunctions/${dir}/${fileName}`)];
      
      // Executing the command file
      const commandFile = require(`${config.provider == true ? `/home/electrocute4u/bot` : `../..`}/commandFunctions/${dir}/${fileName}`)
      await commandFile.command(interaction, tools, bot)
    } 
}