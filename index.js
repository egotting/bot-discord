
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
// dotenv
const dotenv = require('dotenv')
dotenv.config()
const {TOKEN, CLIENT_ID, GUILD_ID } = process.env;


//importacao dos comandos
const fs = require("node:fs")
const path = require("node:path")
const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))
const client = new Client({intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection()

for (const file of commandFiles){
	const filePath = path.join(commandsPath, file)
	const commands = require(filePath)
	if ("data" in command && "execute" in command) {
		client.commands.set (command.data.name, command)
	} else {
		console.log(` esse comando em ${filePath} esta com "data" ou "execute ausente"`)
	}
}



// login bot
client.once(Events.ClientReady, c => {
	console.log(`Pronto! login feito por ${c.user.tag}`)
});
client.login(TOKEN);




//interections

client.on(Events.InteractionCreate, interaction => {
	if (!interaction.ischatinputcommand()) return

})