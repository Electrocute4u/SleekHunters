const { SlashCommandBuilder } = require("discord.js")
const { readFileSync } = require("fs")
module.exports = {
    data: new SlashCommandBuilder()
    .setName("weapon")
    .setDMPermission(false)
    .setDescription("Retrieve information about a specific weapon from name")
    .addSubcommand(subcommand =>
      subcommand
    .setName("find")
    .setDescription("Retrieve information about a specific weapon")
    .addStringOption(option =>
			option.setName('name')
				.setDescription('The name for the weapon to look up')
				.setAutocomplete(true)
        .setRequired(true)
      )
    )
    .addSubcommand(subcommand =>
      subcommand
      .setName('element')
      .setDescription('Returns all weapons crafted from the given element')
      .addStringOption(option =>
			  option.setName('element')
				  .setDescription('Returns all weapons crafted from the given element')
				  .addChoices
              (
                  {name: "Neutral", value: "Neutral"},
                  {name: "Shock", value: "Shock"},
                  {name: "Blaze", value: "Blaze"},
                  {name: "Umbral", value: "Umbral"},
                  {name: "Terra", value: "Terra"},
                  {name: "Frost", value: "Frost"},
                  {name: "Radiant", value: "Radiant"},
              )
          .setRequired(true)
        )
      .addStringOption(option =>
        option
        .setName("type")
        .setDescription("Return all weapons from the given weapon type.")
        .setRequired(false)
        .addChoices
          (
              {name: "Aether Strikers", value: "aether_strikers"},
              {name: "Axe", value: "axe"},
              {name: "Chain Blades", value: "chain_blades"},
              {name: "Hammer", value: "hammer"},
              {name: "Repeaters", value: "repeater"},
              {name: "Sword", value: "sword"},
              {name: "War Pike", value: "war_pike"},
          )
        )
    )
    .addSubcommand(subcommand =>
      subcommand
      .setName('behemoth')
      .setDescription('Returns all weapons crafted from the given Behemoth')
		  .addStringOption(option =>
			  option.setName('behemoth')
				  .setDescription('Returns all weapons crafted from the given Behemoth')
				  .setAutocomplete(true)
          .setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
      subcommand
      .setName('all')
      .setDescription('Returns all weapons in a paginated embed')
          .addStringOption(option =>
            option
            .setName("type")
            .setDescription("Return all weapons from the given weapon type.")
            .setRequired(false)
            .addChoices
              (
                  {name: "Aether Strikers", value: "aether_strikers"},
                  {name: "Axe", value: "axe"},
                  {name: "Chain Blades", value: "chain_blades"},
                  {name: "Hammer", value: "hammer"},
                  {name: "Repeaters", value: "repeater"},
                  {name: "Sword", value: "sword"},
                  {name: "War Pike", value: "war_pike"},
              )
            )
    ),
	async autoComplete(interaction) {
    const tools = require(`${config.provider == true ? `/home/electrocute4u/bot` : `..`}/../utils/functions`)
		const focusedOption = interaction.options.getFocused(true);
		let choices;
		
    if (focusedOption.name === 'name') {
      // Calling the weapon.json file
      const weaponsData = JSON.parse(readFileSync('./gear/weapon.json', 'utf8'));
  
      if (focusedOption.value === '') {
          choices = Object.values(weaponsData).map(weapon => weapon.name).slice(0, 25);
      } else {
          const inputName = tools.toUpperCaseAll(focusedOption.value);
          const similarNames = new Set();
  
          // Check for exact matches with weapon names
          Object.values(weaponsData)
              .filter(weapon => tools.toUpperCaseAll(weapon.name) === inputName)
              .forEach(weapon => similarNames.add(weapon.name));
  
          // Check for partial matches with weapon names
          Object.values(weaponsData)
              .filter(weapon => tools.toUpperCaseAll(weapon.name).includes(inputName))
              .forEach(weapon => similarNames.add(weapon.name));

          // Check for partial matches with behemoth names
          Object.values(weaponsData)
              .filter(weapon => weapon.behemoth && tools.toUpperCaseAll(weapon.behemoth).includes(inputName))
              .forEach(weapon => similarNames.add(weapon.name));
  
          // Check for partial matches with 3 or more characters in weapon names
          if (inputName.length >= 3) {
              Object.values(weaponsData)
                  .filter(weapon => weapon.name.split(' ').some(part => tools.toUpperCaseAll(part).startsWith(inputName)))
                  .forEach(weapon => similarNames.add(weapon.name));
          }
  
          choices = [...similarNames].slice(0, 25);
      }
  }

		if (focusedOption.name === 'element') {
			choices = ["Neutral", "Shock", "Blaze", "Umbral", "Terra", "Frost", "Radiant"]
		}

    if (focusedOption.name === 'behemoth') {
			// Calling the weapon.json file
      const weaponsData = JSON.parse(readFileSync(`./gear/weapon.json`, 'utf8'))
       
      // Set to store unique behemoth names
      var behemothSet = new Set();

      // Iterate through the weaponsData object and extract behemoth names
      for (const weapon in weaponsData) {
          behemothSet.add(weaponsData[weapon].behemoth);
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
      let dir = config.dev == true ? __dirname.split(`\\`).slice(-1)[0] : __dirname.split(`/`).slice(-1)[0]
      let fileName = config.dev == true ? __filename.split(`\\`).slice(-1)[0] : __filename.split(`/`).slice(-1)[0]
 
      // Delete and reacquire the cache of command function
      delete require.cache[require.resolve(`${config.provider == true ? `/home/electrocute4u/bot` : `../..`}/commandFunctions/${dir}/${fileName}`)];
      
      // Executing the command file
      const commandFile = require(`${config.provider == true ? `/home/electrocute4u/bot` : `../..`}/commandFunctions/${dir}/${fileName}`)
      await commandFile.command(interaction, tools, bot, config)
    } 
}