const { SlashCommandBuilder } = require("discord.js")
const { readFileSync } = require("fs")
module.exports = {
    data: new SlashCommandBuilder()
    .setName("armor")
    .setDMPermission(false)
    .setDescription("Get information about a specific armor")
    .addSubcommand(subcommand =>
      subcommand
    .setName("name")
    .setDescription("Get information about a specific armor")
    .addStringOption(option =>
			option.setName('name')
				.setDescription('The name for the armor to look up')
				.setAutocomplete(true))
    )
    .addSubcommand(subcommand =>
      subcommand
      .setName('element')
      .setDescription('Returns all the armor crafted from the given element')
      .addStringOption(option =>
			  option.setName('element')
				  .setDescription('Returns all the armor crafted from the given element')
				  .setAutocomplete(true))
    )
    .addSubcommand(subcommand =>
      subcommand
      .setName('behemoth')
      .setDescription('Returns all the armor crafted from the given Behemoth')
		  .addStringOption(option =>
			  option.setName('behemoth')
				  .setDescription('Returns all the armor crafted from the given Behemoth')
				  .setAutocomplete(true))
    ),
	async autocomplete(interaction) {
    
		const focusedOption = interaction.options.getFocused(true);
		let choices;
		
    if (focusedOption.name === 'name') {
      // Calling the armor.json file
      const armoursData = JSON.parse(readFileSync(`./armor/armor.json`, 'utf8'))
      const armorNameArray = Object.values(armoursData).map(armour => armour.name).filter(Boolean);
      
      if (focusedOption.value === '') {
        choices = armorNameArray.slice(0, 25)
      }
    if (focusedOption.value !== '') {
      // Function to filter armor names similar to the input name
      function getSimilarArmorNames(inputName) {
        const similarNames = [];
      
        // Loop through armor names and check for similarity
        Object.values(armoursData).forEach(armor => {
            if (armor.name.includes(inputName)) {
                similarNames.push(armor.name);
            }
        });

        // Limit the result to 25 choices
        return similarNames.slice(0, 25);
      }

      // Get similar armor names
      choices = getSimilarArmorNames(focusedOption.value);
    }
		}

		if (focusedOption.name === 'element') {
			choices = ["Neautral", "Shock", "Blaze", "Umbral", "Terra", "Frost", "Radiant"]
		}

    if (focusedOption.name === 'behemoth') {
			// Calling the armor.json file
      const armoursData = JSON.parse(readFileSync(`./armor/armor.json`, 'utf8'))
       
      // Set to store unique behemoth names
      var behemothSet = new Set();

      // Iterate through the armoursData object and extract behemoth names
      for (const armour in armoursData) {
          behemothSet.add(armoursData[armour].behemoth);
      }
      if (focusedOption.value == '' || Array.from(behemothSet).filter(Boolean).size > 25) {
        choices = Array.from(behemothSet).filter(Boolean).slice(0, 25)
      }
      else {
        // Convert Set to array to remove duplicates
      choices = Array.from(behemothSet).filter(Boolean);
      }

		}
    
		const filtered = choices.length > 0 ? choices.filter(choice => choice.startsWith(focusedOption.value)) : choices
	
    await interaction.respond(
			filtered.map(choice => ({ name: choice, value: choice })),
		);
	},
    async execute(interaction, bot) {
      
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