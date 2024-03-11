const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("leveling")
    .setDescription("Find the best ways to level up your weapon fast")
    .setDMPermission(false)
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
          {name: "Neutral", value: "neutral"}
      )
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