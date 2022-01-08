/* __________________________________________REQUIRED IMPORTS_______________________________________________________*/
const Discord = require('discord.js');

/* ______________________________________Config + Information Code ________________________________________________*/
module.exports.config = {
	name: 'pearl',
	category: 'user_responsive',
	description: 'returns a greetful response',
	accessability: '{Public: Members}',
	aliases: ['p', 'prl', 'pl'],
};

// eslint-disable-next-line no-unused-vars
module.exports = {
	name: 'pearl',
	aliases: ['p', 'prl', 'pl'],
	description: 'returns an image from a random assortment of images',

	// eslint-disable-next-line no-unused-vars
	commit(message, args) {
		const result_Pearl = new Discord.MessageEmbed()
			.setColor('#6a0dad')
			.setTitle('❤️ Pearl? ❤️')
			.setAuthor(
				'Narrator ❤️', 'https://lh3.googleusercontent.com/ogw/ADGmqu-oJeHS26q7VNI1wUyRQ3qLOVJHiL8GfGURQOeM=s83-c-mo', 'https://discord.js.org')
			.setDescription('Heya! Wanna know what the Pearl command does? Well since you asked kindly, the pearl command is a command that sends the user a random Image!')
			.setThumbnail('https://www.pngkit.com/png/full/315-3155859_anime-girl-aesthetic-freetoedit-japanese-anime-girl-aesthetic.png')
			.addField(
				'More Information About Pearl',
				'The Pearl command can also be captured using ?c or ?capture', true)
			.setImage('https://i.pinimg.com/736x/85/e0/32/85e0329cf21413debb67103907b49ae6.jpg')
			.setTimestamp()
			.setFooter('<All about the Pearl Command>', 'https://webstockreview.net/images/clipart-flower-aesthetic-4.png');

		message.channel.send(result_Pearl);

	},
};