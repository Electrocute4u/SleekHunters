const { SlashCommandBuilder } = require("discord.js")

// Acquire file name and folder name
let dir = __dirname.split(`\\`).slice(-1)[0]
let fileName = __filename.split(`\\`).slice(-1)[0]

module.exports = {
    data: new SlashCommandBuilder()
    .setName("career")
    .setDescription("Get your own Career Profile stats based on connected Battletag")
    .addStringOption(option =>
        option.setName('platform')
          .setDescription('Which platform to display stats and competitive ranks from, defaults to both')
          .setRequired(false)
          .addChoices(
            { name: 'PC', value: 'pc' },
            { name: 'Console', value: 'console' }
      ))
      .addBooleanOption(option =>
          option.setName('hide-competitive')
          .setDescription(`Whether or not to hide your competitive stats, defaults to false.`)
          .setRequired(false)
      )
    ,
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