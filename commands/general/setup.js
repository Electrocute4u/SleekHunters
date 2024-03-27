const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("setup")
    .setDescription("I wonder what this butto- Oh, better not touch that!")
    .setDMPermission(false)
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addSubcommand(subcommand =>
      subcommand
          .setName('verify')
          .setDescription('I wonder what this butto- Oh, better not touch that!')
    )
    ,
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