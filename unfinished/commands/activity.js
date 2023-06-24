const { SlashCommandBuilder, ChannelType } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("activity")
    .setDescription("Activity checker")
    .setDMPermission(false)
    .addSubcommand(subcommand =>
	    subcommand
        .setName('setup')
        .setDescription('Sets up an activity checker in a designated channel')
        .addChannelOption(option =>
	    	option.setName('channel')
	    		.setDescription('The channel to post the reaction embed in')
                .addChannelTypes(ChannelType.GuildText)
                .setRequired(true)
        )
        .addIntegerOption(option =>
            option.setName('days')
                .setDescription('The amount of days the activity checker will run')
                .setMinValue(1)
                .setMaxValue(90)
                .setRequired(true)
        )
    )
    .addSubcommand(subcommand =>
	    subcommand
        .setName('join')
        .setDescription('Manually join an ongoing activity check, if any')
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
        await commandFile.command(interaction, tools, bot)
    } 
}