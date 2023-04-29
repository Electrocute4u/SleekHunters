const { SlashCommandBuilder } = require("discord.js")

// Acquire file name and folder name
let dir = __dirname.split(`\\`).slice(-1)[0]
let fileName = __filename.split(`\\`).slice(-1)[0]

module.exports = {
    data: new SlashCommandBuilder()
    .setName("relink")
    .setDescription("Relink a existing Battlenet account to your Discord ID.")
    .addStringOption(option => option
    .setName("battletag")
    .setDescription("The battletag to relink your Discord ID with. This is CAsE sensitive.")
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