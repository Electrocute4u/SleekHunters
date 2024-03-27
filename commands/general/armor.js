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
				.setAutocomplete(true)
        .setRequired(true))
    )
    .addSubcommand(subcommand =>
      subcommand
      .setName('element')
      .setDescription('Returns all the armor crafted from the given element')
      .addStringOption(option =>
			  option.setName('element')
				  .setDescription('Returns all the armor crafted from the given element')
				  .setAutocomplete(true)
          .setRequired(true))
    )
    .addSubcommand(subcommand =>
      subcommand
      .setName('behemoth')
      .setDescription('Returns all the armor crafted from the given Behemoth')
		  .addStringOption(option =>
			  option.setName('behemoth')
				  .setDescription('Returns all the armor crafted from the given Behemoth')
				  .setAutocomplete(true)
          .setRequired(true))
    ),
	async autoComplete(interaction) {
    const tools = require(`${config.provider == true ? `/home/electrocute4u/bot` : `..`}/../utils/functions`)
		const focusedOption = interaction.options.getFocused(true);
		let choices;
		
    if (focusedOption.name === 'name') {
      // Calling the armor.json file
      const armorsData = JSON.parse(readFileSync('./gear/armor.json', 'utf8'));
  
      if (focusedOption.value === '') {
          choices = Object.values(armorsData).map(armor => armor.name).slice(0, 25);
      } else {
          const inputName = tools.toUpperCaseAll(focusedOption.value);
          const similarNames = new Set();
  
          // Check for exact matches with armor names
          Object.values(armorsData)
              .filter(armor => tools.toUpperCaseAll(armor.name) === inputName)
              .forEach(armor => similarNames.add(armor.name));
  
          // Check for partial matches with armor names
          Object.values(armorsData)
              .filter(armor => tools.toUpperCaseAll(armor.name).includes(inputName))
              .forEach(armor => similarNames.add(armor.name));
  
          // Check for partial matches with behemoth names
          Object.values(armorsData)
              .filter(armor => armor.behemoth && tools.toUpperCaseAll(armor.behemoth).includes(inputName))
              .forEach(armor => similarNames.add(armor.name));
  
          // Check for partial matches with 3 or more characters in armor names
          if (inputName.length >= 3) {
              Object.values(armorsData)
                  .filter(armor => armor.name.split(' ').some(part => tools.toUpperCaseAll(part).startsWith(inputName)))
                  .forEach(armor => similarNames.add(armor.name));
          }
  
          choices = [...similarNames].slice(0, 25);
      }
  }

		if (focusedOption.name === 'element') {
			choices = ["Neutral", "Shock", "Blaze", "Umbral", "Terra", "Frost", "Radiant"]
		}

    if (focusedOption.name === 'behemoth') {
			// Calling the armor.json file
      const armoursData = JSON.parse(readFileSync(`./gear/armor.json`, 'utf8'))
       
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
    
		let filtered;
    if(focusedOption.name === 'name') filtered = choices.slice(0, 25)
		else filtered = choices.length > 0 ? choices.filter(choice => choice.startsWith(tools.toUpperCaseAll(focusedOption.value))).slice(0, 25) : choices.slice(0, 25)
	
    await interaction.respond(
			filtered.map(choice => ({ name: choice, value: choice })),
		);
	},
    async execute(interaction, bot, tools) {
      
      // Calling config and utils file
      const config = JSON.parse(readFileSync(`./config.json`, 'utf8'))
      
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