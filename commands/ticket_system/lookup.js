const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("lookup")
    .setDescription("Finds a Epic Games profile based on ID or username, if they exists.")
    .addStringOption(option =>
      option
      .setName("input")
      .setDescription("Either a Epic Games username or ID")
      .setRequired(true)
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