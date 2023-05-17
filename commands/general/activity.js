const { SlashCommandBuilder } = require("discord.js")

// Acquire file name and folder name
let dir = __dirname.split(`\\`).slice(-1)[0]
let fileName = __filename.split(`\\`).slice(-1)[0]

module.exports = {
    data: new SlashCommandBuilder()
    .setName("activity")
    .setDescription("Get a list of all users who have passed monthly activity check.")
    .addSubcommand(subcommand =>
      subcommand
        .setName('check')
        .setDescription('Check if a user have passed the monthly activity check.')
        .addUserOption(option => option.setName('user')
          .setDescription('The user in this server you want to check.')
          .setRequired(true)
        )
      )
        
    .addSubcommand(subcommand =>
      subcommand
        .setName('list')
        .setDescription(`Get a paginated list of all users who have passed the monthly activity check.`)
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