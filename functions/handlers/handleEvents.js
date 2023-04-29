const {readdirSync} = require("fs");
const { connection } = require("mongoose")

module.exports = (bot) => {

    // Handle client and database events
    bot.handleEvents = async () => {
        // Fetches a synched version of /events folder for each event type
        const eventFolders = readdirSync(`./events`);
        for (const folder of eventFolders) {
            const eventFiles = readdirSync(`./events/${folder}`).filter((file) => file.endsWith(".js"))

            // Switch for event type
            switch (folder) {
                case "client":
                    for (const file of eventFiles) {
                        const event = require(`../../events/${folder}/${file}`)
                        if (event.once) bot.once(event.name, (...args) =>
                            event.execute(...args, bot)
                        );
                        else bot.on(event.name, (...args) =>
                            event.execute(...args, bot)
                        );
                    }
                    break;

                case "mongo":
                    for (const file of eventFiles) {
                        const event = require(`../../events/${folder}/${file}`);
                        if (event.once) 
                        connection.once(event.name, (...args) => 
                            event.execute(...args, bot)
                        );
                        else 
                        connection.on(event.name, (...args) => 
                            event.execute(...args, bot)
                        );
                    }
                    break;

                default:
                    break;
            }
        }
    }
}