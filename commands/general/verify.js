const { SlashCommandBuilder } = require("discord.js")
const { readFileSync } = require("fs")

module.exports = {
    data: new SlashCommandBuilder()
    .setName('verify')
    .setDescription('Verify an image containing text')
    .addSubcommand(subcommand =>
        subcommand
            .setName('attachment')
            .setDescription('Verify an image attachment')
            .addAttachmentOption(option =>
                option.setName('attachment')
                    .setDescription('Image attachment to verify')
                    .setRequired(true)
            )
    )
    .addSubcommand(subcommand =>
      subcommand
          .setName('url')
          .setDescription('Verify an image from a URL')
          .addStringOption(option =>
              option.setName('url')
                  .setDescription('URL of the image to verify')
                  .setRequired(true)
                  
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
      await commandFile.command(interaction, tools, bot)
    } 
}