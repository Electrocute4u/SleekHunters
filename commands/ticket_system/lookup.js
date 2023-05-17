const { SlashCommandBuilder } = require("discord.js")

// Obtaining file name from dir path to reload cache of
let dir = __dirname.split(`\\`).slice(-1)[0]
let fileName = __filename.split(`\\`).slice(-1)[0]

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
      // Deleting and reacquiring cache of functions file
      delete require.cache[require.resolve("../../utils/functions")];
      const tools = require("../../utils/functions")

      // Delete and reacquire the cache of command function
      delete require.cache[require.resolve(`../../commandFunctions/${dir}/${fileName}`)];
      
      // Executing the command file
      const commandFile = require(`../../commandFunctions/${dir}/${fileName}`)
      await commandFile.command(interaction, tools, bot)
    } 
}