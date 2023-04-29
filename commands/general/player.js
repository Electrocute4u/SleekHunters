const { SlashCommandBuilder } = require("discord.js")

// Acquire file name and folder name
let dir = __dirname.split(`\\`).slice(-1)[0]
let fileName = __filename.split(`\\`).slice(-1)[0]

module.exports = {
  data: new SlashCommandBuilder()
  .setName("player")
  .setDescription("Search for a list of users through username or retrieve a career profile for a user.")
  .addSubcommand(command =>
      command
      .setName("profile")
      .setDescription("Search for a specific user and retrieve their career profile.")
      .addStringOption(option =>
          option
          .setName(`battletag`)
          .setDescription(`This is CASE sensitive! The battletag of the user to retrieve the career profile from.`)
          .setRequired(true)
      )
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
          .setDescription(`Whether or not to hide a user's competitive stats, defaults to false.`)
          .setRequired(false)
      )
  )
  .addSubcommand(command =>
    command
    .setName("search")
    .setDescription("Lookup a username and retrieve a list of all battlenet users matching that query.")
    .addStringOption(option =>
        option
        .setName(`username`)
        .setDescription(`The username to lookup`)
        .setRequired(true)
    )
    // .addStringOption(option =>
    //   option.setName('platform')
    //     .setDescription('Filter by platform, defaults to both.')
    //     .setRequired(false)
    //     .addChoices(
    //       { name: 'PC', value: 'pc' },
    //       { name: 'Console', value: 'console' }
    // ))
    .addStringOption(option =>
      option.setName('privacy')
        .setDescription('Filter by account privacy, defaults to both.')
        .setRequired(false)
        .addChoices(
          { name: 'Public', value: 'public' },
          { name: 'Private', value: 'private' }
    ))
    .addIntegerOption(option =>
      option.setName('offset')
        .setDescription('Offset the results (i.e start at result 300 instead of 1 in an ascending order)')
        .setRequired(false)
    )),
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