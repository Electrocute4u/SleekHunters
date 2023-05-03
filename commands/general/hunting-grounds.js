const { SlashCommandBuilder } = require("discord.js")

// Acquire file name and folder name
let dir = __dirname.split(`\\`).slice(-1)[0]
let fileName = __filename.split(`\\`).slice(-1)[0]

module.exports = {
    data: new SlashCommandBuilder()
    .setName("hunting-grounds")
    .setDescription("Get information about a specific hunting ground or obtain a list of all hunting grounds")
    .addStringOption(option =>
      option
      .setName("map")
      .setDescription("Get information about a specific hunting ground")
      .setRequired(false)
      .addChoices
      (
          {name: "Emberthorn Cove", value: "emberthorn_cove"},
          {name: "Boreal Outpost", value: "boreal_outpost"},
          {name: "Revelation Rock", value: "revelation_rock"},
          {name: "Restless Sands", value: "restless_sands"},
          {name: "Iron Falls", value: "iron_falls"},
          {name: "Sunderstone", value: "sunderstone"},
          {name: "Aulric's Peak", value: "aulric's_peak"},
          {name: "Frostmarch", value: "frostmarch"},
          {name: "Thunderwatch", value: "thunderwatch"},
          {name: "Fortune's Folly", value: "fortune's_folly"},
          {name: "Brightwood", value: "brightwood"},
          {name: "Conundrum Rocks", value: "conundrum_rocks"},
          {name: "Coldrunner Key", value: "coldrunner_key"},
          {name: "The Snowblind Waste", value: "the_snowblind_waste"},
          {name: "Undervald Defile", value: "undervald_defile"},
          {name: "Cape Fury", value: "cape_fury"},
          {name: "Hades Reach", value: "hades_reach"},
          {name: "Razorcliff Isle", value: "razorcliff_isle"},
          {name: "The Paradox Breaks", value: "the_paradox_breaks"},
          {name: "Twilight Sanctuary", value: "twilight_sanctuary"},
          {name: "The Blazeworks", value: "the_blazeworks"}
      )
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