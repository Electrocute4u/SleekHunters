const { SlashCommandBuilder, PermissionFlagsBits, ChannelType } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("update")
    .setDescription("Force update a mode")
    .setDMPermission(false)
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption(option =>
      option
      .setName("mode")
      .setDescription("The mode to force update")
      .setRequired(true)
      .addChoices
      (
          {name: "Hesca", value: "hesca"},
          {name: "Gauntlet", value: "gauntlet"},
          {name: "Trials Leaderboard", value: "trials-leaderboard"},
          {name: "Trials Weekly", value: "trials-weekly"},
      )
    ),
    async execute(interaction, bot) {
      const {readFileSync} = require("fs")

      // Calling config and utils file
      const config = JSON.parse(readFileSync(`./config.json`, 'utf8'))
      const tools = require(`${config.provider == true ? `/home/electrocute4u/bot` : `../..`}/utils/functions`)
      
      // Acquire file name and folder name
      let dir = config.dev == true ? __dirname.split(`\\`).slice(-1)[0] : __dirname.split(`/`).slice(-1)[0]
      let fileName = config.dev == true ? __filename.split(`\\`).slice(-1)[0] : __filename.split(`/`).slice(-1)[0]
 
      // Delete and reacquire the cache of command function
      delete require.cache[require.resolve(`${config.provider == true ? `/home/electrocute4u/bot` : `../..`}/commandFunctions/${dir}/${fileName}`)];
      
      // Executing the command file
      const commandFile = require(`${config.provider == true ? `/home/electrocute4u/bot` : `../..`}/commandFunctions/${dir}/${fileName}`)
      await commandFile.command(interaction, tools, bot, config)
    } 
}