const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("trials")
    .setDescription("Get information about Lady Luck's Trials")
    .setDMPermission(false)
    .addSubcommand(subcommand =>
      subcommand
        .setName('info')
        .setDescription('Get some information about Trials')
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('current')
        .setDescription(`This week's Trial Behemoth`)
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('next')
        .setDescription(`Next week's Trial Behemoth`)
    
    )
    .addSubcommandGroup(group =>
      group
      .setName("leaderboard")
      .setDescription("Get the trials leaderboard")
    .addSubcommand(subcommand =>
      subcommand
      .setName("current")
      .setDescription("Get the current trials leaderboard for this week")
      )
    .addSubcommand(subcommand =>
      subcommand
      .setName("me")
      .setDescription("Get your own placement for this week")
    )
    .addSubcommand(subcommand =>
      subcommand
      .setName("search")
      .setDescription("Search for a player's placements")
      .addStringOption(option => option
        .setName("player")
        .setDescription("An Epic Username or a Epic ID to retrieve a player's leaderboard position(s)")
        .setRequired(true)
      )
      .addStringOption(option => option
        .setName("category")
        .setDescription("The category to retrieve placements from")
        .setChoices(
          {name: "Solo", value: "solo"},
          {name: "Group", value: "group"},
          {name: "Hammer", value: "hammer"},
          {name: "Axe", value: "axe"},
          {name: "Sword", value: "sword"},
          {name: "Chain Blades", value: "chainblades"},
          {name: "War Pike", value: "pike"},
          {name: "Repeaters", value: "repeaters"},
          {name: "Aether Strikers", value: "strikers"}
        )
      )
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
      await commandFile.command(interaction, tools, bot, config)
    } 
}