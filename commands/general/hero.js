const { SlashCommandBuilder } = require("discord.js")

// Acquire file name and folder name
let dir = __dirname.split(`\\`).slice(-1)[0]
let fileName = __filename.split(`\\`).slice(-1)[0]

module.exports = {
  data: new SlashCommandBuilder()
  .setName("hero")
  .setDescription("Search for a specific hero")
  .addSubcommand(command =>
      command
      .setName("search")
      .setDescription("Search for a hero and return information about that hero")
      .addStringOption(option =>
          option
          .setName(`name`)
          .setDescription(`The name of the hero to look up`)
          .setRequired(true)
      )
  )
  
  .addSubcommandGroup(commandGroup =>
      commandGroup
      .setName("random")
      .setDescription(`Returns a random hero from a specified role or from all categories`)
      .addSubcommand(command =>
          command
          .setName(`all`)
          .setDescription(`Pick a random hero from all the role categories`)
      )
      .addSubcommand(command =>
          command
          .setName(`role`)
          .setDescription(`Pick a random hero from a specified role.`)
          .addStringOption(option =>
            option
            .setName(`role`)
            .setDescription(`Select a role to obtain a random hero from.`)
            .setRequired(true)
            .setChoices({
                name: "Tank",
                value: "tank"
            }, {
                name: "Damage (DPS)",
                value: "damage"
            }, {
                name: "Support",
                value: "support"
            }),
          )
    ))
    .addSubcommandGroup(commandGroup =>
      commandGroup
      .setName("list")
      .setDescription(`Get a full list with all heroes currently playable in Overwatch`)
      .addSubcommand(command =>
          command
          .setName(`all`)
          .setDescription(`All heroes combined into a single paginated embed.`)
      )
      .addSubcommand(command =>
          command
          .setName(`role`)
          .setDescription(`Lists all heroes from a specific role into a paginated embed.`)
          .addStringOption(option =>
            option
            .setName(`role`)
            .setDescription(`Select a role to obtain heroes from.`)
            .setRequired(true)
            .setChoices({
                name: "Tank",
                value: "tank"
            }, {
                name: "Damage (DPS)",
                value: "damage"
            }, {
                name: "Support",
                value: "support"
            }),
          )
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