const { SlashCommandBuilder } = require("discord.js")

// Acquire file name and folder name
let dir = __dirname.split(`\\`).slice(-1)[0]
let fileName = __filename.split(`\\`).slice(-1)[0]

module.exports = {
    data: new SlashCommandBuilder()
    .setName("leveling")
    .setDescription("Find the best ways to level up your weapon fast")
    .addStringOption(option =>
      option
      .setName("element")
      .setDescription("If you want to level up with a specific element")
      .setRequired(false)
      .addChoices
      (
          {name: "Blaze", value: "blaze"},
          {name: "Frost", value: "frost"},
          {name: "Radiant", value: "radiant"},
          {name: "Shock", value: "shock"},
          {name: "Terra", value: "terra"},
          {name: "Umbral", value: "umbral"},
          {name: "Neutral", value: "neautral"}
      )
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