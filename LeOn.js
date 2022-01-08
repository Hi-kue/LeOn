'use strict';
/* _______________________________________REQUIRED VARIABLES________________________________________________*/
const Discord = require('discord.js');
const { prefix, token } = require('./packages/config.json');
const LeOn = new Discord.Client({ disableEveryone: true });

const fs = require('fs');
LeOn.commands = new Discord.Collection();
LeOn.aliases = new Discord.Collection();

/* ______________________________________Catching .js Files______________________________________________*/
fs.readdir('./commands/', (err, files) => {

	if(err) {console.log(err);}

	const jsfile = files.filter(file => file.endsWith('.js'));
	if(!jsfile.endsWith == '.js') {
		return console.log('[LOGS] Couldnt Find command!');
	}

	const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const command = require(`./commands/${file}`);
		LeOn.commands.set(command.name, command);
	}

	for (const aliases of commandFiles) {
		const command = require(`./commands/${aliases}`);
		LeOn.commands.set(command.aliases, command);
	}
});


/* ______________________________________RUNTIME .JS CODE_________________________________________________*/
LeOn.once('ready', () => {
	console.log('LeOn is now Online!');
});

/* If a new user joins the server => execute command*/
LeOn.on('guildMemberAdd', member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
	if (!channel) {return;}
	channel.send(`Welcome to the server, ${member}`);
});

/* Once LeOn is online => this function will run and check values for message return and wait for input */
LeOn.on('message', async (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	if (message.author.bot || message.content == 'dm') {
		return message.channel.send('I was designed for servers, not <dms>');
	}

	if(!message.content.startsWith(prefix)) {return;}

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commands = args.shift().toLowerCase();


	switch (commands) {
	case 'pearl':
		try{
			LeOn.commands.get('pearl').commit(message, args);
		}
		catch(error) {console.log(error);}
		break;

	case 'urban':
		try{
			LeOn.commands.get('urban').commit(message, args);
		}
		catch(error) {console.log(error);}
		break;

	case 'greet':
		try{
			LeOn.commands.get('greet').commit(message, args);
		}
		catch(error) {console.log(error);}
		break;

	case 'retro':
		try{
			LeOn.commands.get('retro').commit(message, args);
		}
		catch(error) {console.log(error);}
		break;

	case 'gay':
		try{
			LeOn.commands.get('gay').commit(message, args);
		}
		catch(error) {console.log(error);}
		break;

		// Work on this command : Note => provide aliases within commands
	case 'trivia' || 'quote':
		try{
			LeOn.commands.get('trivia').commit(message, args);
		}
		catch(error) {console.log(error);}
		break;

	case 'memes' || 'meme':
		try{
			LeOn.commands.get('memes').commit(message, args);
		}
		catch(error) {console.log(error);}
		break;

	default:
		break;
	}
});
LeOn.login(token);