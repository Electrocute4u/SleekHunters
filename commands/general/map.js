const { SlashCommandBuilder } = require("discord.js")

// Acquire file name and folder name
let dir = __dirname.split(`\\`).slice(-1)[0]
let fileName = __filename.split(`\\`).slice(-1)[0]

module.exports = {
  data: new SlashCommandBuilder()
  .setName("map")
  .setDescription("Get useful information about a map in Overwatch")
  .addSubcommand(command =>
      command
      .setName("search")
      .setDescription("Search for a map by its name")
      .addStringOption(option =>
          option
          .setName(`name`)
          .setDescription(`The name of the map to look up`)
          .setRequired(true)
      )
  )
  
  .addSubcommandGroup(commandGroup =>
      commandGroup
      .setName("list")
      .setDescription(`List all maps in Overwatch or by event-specific`)
      .addSubcommand(command =>
          command
          .setName(`all`)
          .setDescription(`Returns a list of all maps currently playable in Overwatch`)
      )
      .addSubcommand(command =>
        command
        .setName(`gamemode`)
        .setDescription(`Return a list with all maps in the selected gamemode`)
        .addStringOption(option =>
          option
          .setName(`mode`)
          .setDescription(`The gamemode to return all maps from`)
          .setRequired(true)
          .setChoices({
              name: "Quickplay (QP)",
              value: "quickplay"
          }, {
              name: "Competitive (Comp)",
              value: "competitive"
          }, {
              name: "Arcade",
              value: "arcade"
          })
      ))
      .addSubcommand(command =>
        command
        .setName(`events`)
        .setDescription(`Returns a paginated embed with all event-specific or all event maps in Overwatch`)
        .addStringOption(option =>
          option
          .setName(`name`)
          .setDescription(`Optional, this will return a list from a specific event only`)
          .setRequired(false)
          .setChoices({
              name: "Halloween",
              value: "halloween"
          }, {
              name: "Christmas",
              value: "christmas"
          }, {
              name: "Summer",
              value: "summer"
          }, {
              name: "Lunar New Year",
              value: "lunar_new_year"
          }, {
            name: "Overwatch Archives",
            value: "archives"
        },{
          name: "Overwatch Anniversary",
          value: "anniversary"
        })
      )
    ))
    .addSubcommandGroup(commandGroup =>
      commandGroup
      .setName("info")
      .setDescription(`Get information about a map in Overwatch`)
      .addSubcommand(command =>
          command
          .setName(`all`)
          .setDescription(`Returns a paginated embed with information about every map`)
          .addBooleanOption(option =>
            option
            .setName('alphabetically')
            .setDescription('Whether or not the list should be sorted alphabetically by the map name.')
            .setRequired(false)
      ))
      .addSubcommand(command =>
        command
        .setName(`gamemode`)
        .setDescription(`Return a paginated embed with all maps from the selected gamemode`)
        .addStringOption(option =>
          option
          .setName(`mode`)
          .setDescription(`The gamemode to return all maps from`)
          .setRequired(true)
          .setChoices({
              name: "Quickplay (QP)",
              value: "quickplay"
          }, {
              name: "Competitive (Comp)",
              value: "competitive"
          }, {
              name: "Arcade",
              value: "arcade"
          })
      ))
    //   .addSubcommand(command =>
    //       command
    //       .setName(`events`)
    //       .setDescription(`Returns a paginated embed with all event-specific or all event maps in Overwatch`)
    //       .addStringOption(option =>
    //         option
    //         .setName(`name`)
    //         .setDescription(`Optional, this will return a list from a specific event only`)
    //         .setRequired(false)
    //         .setChoices({
    //             name: "Halloween",
    //             value: "halloween"
    //         }, {
    //             name: "Christmas",
    //             value: "christmas"
    //         }, {
    //             name: "Summer",
    //             value: "summer"
    //         }, {
    //             name: "Lunar New Year",
    //             value: "lunar_new_year"
    //         }, {
    //           name: "Overwatch Archives",
    //           value: "archives"
    //       },{
    //         name: "Overwatch Anniversary",
    //         value: "anniversary"
    //       })
    //     )
    // )
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