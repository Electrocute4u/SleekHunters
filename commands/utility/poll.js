const { SlashCommandBuilder, PermissionFlagsBits, ChannelType } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("poll")
    .setDescription("Creating, managing and monitoring monthly polls")
    .setDMPermission(false)
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addSubcommand(subcommand =>
      subcommand
          .setName('create')
          .setDescription('Sends a activity check poll in the selected channel')
      .addChannelOption(option => option.setName("category").setDescription("The category to setup the application embed in").addChannelTypes(ChannelType.GuildText, ChannelType.GuildAnnouncement).setRequired(true))
      .addIntegerOption(option => option.setName("hours").setDescription("How many hours to run poll (1 = 1 hour and 168 = 1 week)").setMinValue(1).setMaxValue(168).setRequired(true))
      .addStringOption(option => option.setName("title").setDescription(`The poll title (i.e "Monthly Activity Check!"`).setMaxLength(300).setMinLength(1).setRequired(true))
      .addStringOption(option => option.setName("text").setDescription("If you want to include any text/post above the poll.").setMinLength(1).setMaxLength(2000))
    )
    .addSubcommand(subcommand =>
      subcommand.setName('close').setDescription('Close the ongoing poll and choose to announce the results or not')
      .addBooleanOption(option => option.setName("log-results").setDescription("Send the poll results to #logs").setRequired(true))
    )
    //.addSubcommand(subcommand =>
    //  subcommand
    //      .setName('verify')
    //      .setDescription('I wonder what this butto- Oh, better not touch that!')
    //)
    ,
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