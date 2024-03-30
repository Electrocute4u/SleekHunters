const { SlashCommandBuilder, ContextMenuCommandBuilder } = require("discord.js")
const { readFileSync } = require("fs")
module.exports = {

    data: new ContextMenuCommandBuilder()
    .setName("test")
    .setType(2)
    ,
   
}