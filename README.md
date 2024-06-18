![Github Banner Main Page](https://github.com/Electrocute4u/SleekHunters/assets/25005864/4f61d93d-9ad0-412d-a7dd-2d9bece6d6db)


# Sleekhunters

## What is this project?
This project was originally built to one day be added to the official Discord server for SleekHunters, a Dauntless guild. It grew from just a few Dauntless related information slash commands, to be covering Gauntlet, update Gauntlet leaderboard every 30 minutes, as long as covering Trials and scraping website after every reset, allowing users to find current week's behemoths, as long as seeing what's to come next week.

## Bot Commands
Slash commands below having `< >` are optional, while `[ ]` are required fields.
### General commands:
- `/github` - Get a link to the bot's Github repository
- `/lookup` \[input\] - Finds a Epic Games profile based on ID or username, if they exist!
- `/pick` \[choices\] - Let the bot pick a choice for you! (seperate choices with a comma, have as many as you want!)
- `/terminology` - A paginated table with all currently known Dauntless terminologies/terms
- `/info` - Display some information about the Discord bot
### Action commands:
The action command system uses a self-made advanced Mention System, taken from a past project and improved for this one.
<details>

<summary>[Preview GIF - click me to open] </summary>

![action command](https://github.com/Electrocute4u/SleekHunters/assets/25005864/a796b309-726a-40ec-871e-1521c9181347)
</details>

- `/action list` - Get a list of all available actions to use on user(s)
- `/action use [type] [users seperated by comma (i.e user1, id1, @mention]` - Sends a embed with a action to the user(s) selected (i.e pat, hug, kiss, etc)
### Gauntlet commands:
<details>
  
<summary>[Preview GIF - click me to open] </summary>

![gauntlet command](https://github.com/Electrocute4u/SleekHunters/assets/25005864/66d6e67b-c0ef-4b97-8a87-f66630207d30)
</details>

- `/gauntlet spot <season>` - Retrieve SleekHunters's current leaderboard spot or from a previous season
- `/gauntlet find [season] [name]` - Search for a guild by name (or tag) and retrieve their current spot
- `/gauntlet leaderboard <season>` - View the Gauntlet leaderboard for this or a previous season
- `/gauntlet info` - Get some more information about Gauntlet
### Heroic + Escalation commands:
<details>

<summary>[Preview GIF - click me to open] </summary>

![escalation+hesca command](https://github.com/Electrocute4u/SleekHunters/assets/25005864/97149ade-9a74-4111-9daf-c74101521187)
</details>

- `/escalation <element>` - Get information about a specific escalation or obtain a list of all escalations
- `/hesca current` - This week's Heroic Escalation
- `/hesca next` - Next week's Heroic Escalation
### Trials commands:
<details>

<summary>[Preview GIF - click me to open] </summary>

![trials command](https://github.com/Electrocute4u/SleekHunters/assets/25005864/171bbed0-03fd-441b-b0ae-a0735e1bcd48)
</details>

`Current Trials placement` is a User Context Menu Command available if you right click a user. \
This is basically the `/trials leaderboard search`, where the user's displayname is used as query.
- `/trials info` - Get some information about Trials
- `/trials currently` - This week's Trial Behemoth
- `/trials next` - Next week's Trial Behemoth
- `/trials leaderboard me` - Get your own placement for this week (server nickname)
- `/trials leaderboard search [player] <category>` - Search for a player's placement
- `/trials leaderboard current` - Get the current trials leaderboard for this week

### Armor commands:
<details>

<summary>[Preview GIF - click me to open] </summary>

![armor command](https://github.com/Electrocute4u/SleekHunters/assets/25005864/09f580e3-2cfe-4d2f-a763-261a6f98e043)
</details>

- `/armor name [name]` - Returns a armor based on the given armor name
- `/armor behemoth [behemoth]` - Returns all armor pieces from a given behemoth
- `/armor element [element] <type>` - Returns all armor pieces from a given element, and weapon type if passed in
- `/armor all <type>` - Returns all armor or from a given type.
### Cell commands:
<details>

<summary>[Preview GIF - click me to open] </summary>

![cell command](https://github.com/Electrocute4u/SleekHunters/assets/25005864/1bcc1294-897c-4ff7-bc58-6d85788376dc)
</details>

- `/cell name` - Returns information about a cell from the given name
- `/cell type` - Returns all cells with the given type
### Weapon commands:
<details>

<summary>[Preview GIF - click me to open] </summary>

![weapon command](https://github.com/Electrocute4u/SleekHunters/assets/25005864/f5557577-1627-495a-bf39-1085acbbafe8)
</details>

- `/weapon name [cell]` - Returns a weapon based on the given cell name
- `/weapon behemoth [behemoth]` - Returns all weapons from a given behemoth
- `/weapon element [element]` - Returns all weapons from a given element
- `/weapon all <type>` - Returns all weapons, or from a given type (i.e Repeaters, Hammer, Axe, etc...)
### Hunting Grounds command:
<details>

<summary>[Preview GIF - click me to open] </summary>

![hunting-grounds command](https://github.com/Electrocute4u/SleekHunters/assets/25005864/af87c5c4-5a77-42c2-9418-ed9357ec0eaa)
</details>

- `/hunting-grounds <map>`- Get information about a specific hunting ground or obtain a list of all hunting grounds
### Leveling command:
<details>

<summary>[Preview GIF - click me to open] </summary>

![leveling command](https://github.com/Electrocute4u/SleekHunters/assets/25005864/fd264bf5-0e4b-4e5f-a0b6-3f65638f9c9f)
</details>

- `/leveling <element>` - Find the best ways to level up your weapon fast
### Omnicell command:
<details>

<summary>[Preview GIF - click me to open] </summary>

![omnicell command](https://github.com/Electrocute4u/SleekHunters/assets/25005864/679ffa76-b801-4bd0-b98d-69ea38b9070b)

</details>

- `/omnicell <name>` - Returns a paginated embed with all Omnicells or a single omnicell from input

*This project is a personal hobby project and all artwork re-used/and or edited in this Discord bot belong to their respective copyright holders. This bot is not meant to gain or populate any income, as the bot is designed to be in accosiated bot-necceary servers. If you have any inquires about the artwork used or have a complaint, please refer your complaint/question on Github or through a Private Message on Discord at @Milim, formally known as Milim#0001*
