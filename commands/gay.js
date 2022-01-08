const Discord = require('discord.js');

/* ______________________________________Config + Information Code ________________________________________________*/
module.exports.config = {
	config:{
		name: 'gay',
		aliases: ['g', 'gy', 'gai'],
		category: 'user_responsive',
		description: 'returns a geetful "are you gay response" to the user',
		accessability: '{Public: Members}',
	},
};

module.exports = {
	name: 'gay',
	description: 'module.exports.config => description',

	// eslint-disable-next-line no-unused-vars
	commit(message, args) {
		const gay_cmd = new Discord.MessageEmbed()
			.setColor('#6a0dad')
			.setTitle('Response')
			.setDescription(`**What're you gay or something**\n❤️💛💚💙💜${message.member.user.tag}❤️💛💚💙💜**?**`)
			.setThumbnail('https://www.pngkit.com/png/full/315-3155859_anime-girl-aesthetic-freetoedit-japanese-anime-girl-aesthetic.png')
			.setAuthor('Narrator ❤️', 'https://webstockreview.net/images/clipart-flower-aesthetic-4.png', 'https://discord.js.org');
		message.channel.send(gay_cmd);
	},
};