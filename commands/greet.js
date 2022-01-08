/* __________________________________________REQUIRED IMPORTS_______________________________________________________*/
const Discord = require('discord.js');

/* ______________________________________Config + Information Code ________________________________________________*/
module.exports.config = {
	config: {
		name: 'greet',
		aliases: ['grt', 'greetings', 'g'],
		category: 'user_responsive',
		description: 'returns a greetful response',
		accessability: '{Public: Members}',
	},
};

module.exports = {
	name: 'greet',
	description: 'N/A',

	// eslint-disable-next-line no-unused-vars
	commit(message, args) {
		const greeting = new Discord.MessageEmbed()
			.setColor('#6a0dad')
			.setTitle('❤️ Greetings ❤️')
			.setAuthor('Narrator ❤️', 'https://lh3.googleusercontent.com/ogw/ADGmqu-oJeHS26q7VNI1wUyRQ3qLOVJHiL8GfGURQOeM=s83-c-mo', 'https://discord.js.org')
			.setDescription(random_greet(message.member.user.tag))
			.setThumbnail('https://www.pngkit.com/png/full/315-3155859_anime-girl-aesthetic-freetoedit-japanese-anime-girl-aesthetic.png')

			.addField(
				// eslint-disable-next-line quotes
				'Wanna know a little smthin?', "*Youve probably heard this alot from others*,\n*but you're just so* **amazing**!😝", true)

			.setImage('https://i.pinimg.com/originals/eb/4c/21/eb4c215b3cc86b45939a2ecd6ef16059.gif')
			.setTimestamp()
			.setFooter('*Talk about an introduction!*', 'https://webstockreview.net/images/clipart-flower-aesthetic-4.png');

		message.channel.send(greeting);
	},
};

/* _____________________________________FETCH RANDOM USER GREET________________________________________________*/
const random_greet = (duser) => {
	const greet_random_values = [
		`Hey, boo ${duser}`,
		`What’s new ${duser}?`,
		`How are you ${duser}?`,
		`Hey Hey Hey ${duser}!`,
		`OMG OMG Heyyy ${duser}!`,
		`Shall we dance ${duser}?`,
		`Look who it is ${duser}!`,
		`How’s it going ${duser}?`,
		`Nice to meet you ${duser}!`,
		`Long time no see ${duser}.`,
		`Chip Chip Cheerio ${duser}!`,
		`How have you been ${duser}?`,
		`Heya! Hows it going ${duser}`,
		`What’s the good word ${duser}?`,
		`Nice to see you again ${duser}.`,
		`How are you doing today ${duser}?`,
		`What have you been up to ${duser}?`,
		`How are you feeling today ${duser}?`,
		`Greetings and salutations ${duser}!`,
		`Onii-Chann! How awre ywou ${duser}?`,
		`Look what the cat dragged in ${duser}!`,
		`Bang Bang! Here comes the gang ${duser}!`,
		`Howdy partner, how're these parts ${duser}?`,
		`Morning ${duser}, Care for some tea friend?`,
		`H- Hey... ${duser} *how are you so stunning?*`,
		`Hello anyone home? Arrrg! there yah're ${duser}`,
		`This is strange, I swear we've met before ${duser}?`,
		`Great minds think alike, don't they ${duser}? Greetings!`,
		`Somethings on your mind ${duser}, wanna talk to me about it? ❤️`,
		`If your bi and you don't have a partner, your bi - yourself... Oh Hiya! Didn't notice you ${duser}.`,
	];
	function random_greet_loop(elements) {

		return elements[Math.floor(Math.random() * greet_random_values.length)];

	}
	return (random_greet_loop(greet_random_values));
};