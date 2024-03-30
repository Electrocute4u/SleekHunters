const { SlashCommandBuilder } = require("discord.js")
const { readFileSync } = require("fs")
module.exports = {
    data: new SlashCommandBuilder()
    .setName("omnicell")
    .setDMPermission(false)
    .setDescription("Get information about a specific omnicell or retrieve a list with all")
    .addStringOption(option =>
			option.setName('name')
				.setDescription('The name for the omnicell')
        .setRequired(false)
        .setChoices(
          { name: 'Bastion', value: 'Bastion' },
				  { name: 'Iceborne', value: 'Iceborne' },
				  { name: 'Discipline', value: 'Discipline' },
          { name: 'Tempest', value: 'Tempest' },
          { name: 'Revenant', value: 'Revenant' },
          { name: 'Artificer', value: 'Artificer' },
        )
    ),
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
      await commandFile.command(interaction, tools, bot, config)
    } 
}