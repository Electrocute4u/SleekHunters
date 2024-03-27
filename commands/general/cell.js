const { SlashCommandBuilder } = require("discord.js")
const { readFileSync } = require("fs")
module.exports = {
    data: new SlashCommandBuilder()
    .setName("cell")
    .setDMPermission(false)
    .setDescription("Get information about a specific cell")
    .addSubcommand(subcommand =>
      subcommand
    .setName("name")
    .setDescription("Get information about a specific cell")
    .addStringOption(option =>
			option.setName('cell')
				.setDescription('The name for the cell to look up')
				.setAutocomplete(true)
        .setRequired(true))
    )
    .addSubcommand(subcommand =>
      subcommand
      .setName('type')
      .setDescription('Returns all cells from the given category')
      .addStringOption(option =>
			  option.setName('category')
				  .setDescription('Returns all cells from the given category')
				  .setAutocomplete(true)
          .setRequired(true))
    ),
	async autoComplete(interaction) {
    const tools = require(`${config.provider == true ? `/home/electrocute4u/bot` : `..`}/../utils/functions`)
		const focusedOption = interaction.options.getFocused(true);
		let choices;
		
    if (focusedOption.name === 'cell') {
      // Calling the cell.json file
      const cellsData = JSON.parse(readFileSync('./gear/cell.json', 'utf8'));
    
      if (focusedOption.value === '') {
          choices = Object.values(cellsData).map(cell => cell.name).slice(0, 25);
      } else {
          const inputName = tools.toUpperCaseAll(focusedOption.value);
          const similarCellNames = new Set();
    
          // Check for exact matches with cell names
          Object.values(cellsData)
              .filter(cell => tools.toUpperCaseAll(cell.name) === inputName)
              .forEach(cell => similarCellNames.add(cell.name));
    
          // Check for partial matches with cell names
          Object.values(cellsData)
              .filter(cell => tools.toUpperCaseAll(cell.name).includes(inputName))
              .forEach(cell => similarCellNames.add(cell.name));
    
          // Check for partial matches with cell types
          Object.values(cellsData)
              .filter(cell => cell.slot && (tools.toUpperCaseAll(cell.slot) === inputName || tools.toUpperCaseAll(cell.slot).includes(inputName)))
              .forEach(cell => similarCellNames.add(cell.name));
    
          choices = [...similarCellNames].slice(0, 25);
      }
  }

    if (focusedOption.name === 'category') {
      choices = ["Finesse", "Alacrity", "Fortitude", "Insight", "Brutality"]
		}
    
		let filtered;
    if(focusedOption.name === 'cell') filtered = choices.slice(0, 25)
		else filtered = choices.length > 0 ? choices.filter(choice => choice.startsWith(tools.toUpperCaseAll(focusedOption.value))).slice(0, 25) : choices.slice(0, 25)
	
    await interaction.respond(
			filtered.map(choice => ({ name: choice.replace(/Cell/gi, ""), value: choice.replace(/Cell/gi, "") })),
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