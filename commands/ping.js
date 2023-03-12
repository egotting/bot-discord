const { SlashCommanBuilder} = require("discord.js")

module.exports ={

data: new SlashCommanBuilder ()
    .setName("ping")
    .setDescription("responde com ..."),

async execute(interaction) {
    await interaction.reply("pong")
}
}