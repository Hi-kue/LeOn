/* __________________________________________REQUIRED IMPORTS_______________________________________________________*/
const Discord = require('discord.js');
const got = require('got');

/* ______________________________________Config + Information Code ________________________________________________*/
module.exports.config = {
	config:{
		name: 'meme',
		aliases: ['mm', 'memes', 'dank'],
		category: 'user_responsive',
		description: 'returns a meme from within reddit <query> => most memes are cringy and unrecommended {use at your OWN RISK!}',
		accessability: '{Public: Members}',
		// 'https://www.reddit.com/r/dankmemes/random/.json' => storage => new => URL
	},
};


module.exports = {
	name: 'memes',
	aliases: ['mm', 'memes', 'dank'],
	description: 'module.exports.config => description',

	/* eslint-disable no-unused-vars */
	commit(message, args) {
		const Images = ['https://lh3.googleusercontent.com/ogw/ADGmqu-oJeHS26q7VNI1wUyRQ3qLOVJHiL8GfGURQOeM=s83-c-mo',
			'https://www.pngkit.com/png/full/315-3155859_anime-girl-aesthetic-freetoedit-japanese-anime-girl-aesthetic.png',
			'https://webstockreview.net/images/clipart-flower-aesthetic-4.png'];

		const {	purple } = '#6a0dad';

		/* eslint-disable semi */
		const meme_cmd = new Discord.MessageEmbed()
		got('https://www.reddit.com/r/memes/random/.json').then(response => {
			const content = JSON.parse(response.body);
			const permalink = content[0].data.children[0].data.permalink;
			const memeUrl = `https://reddit.com${permalink}`;
			const memeImage = content[0].data.children[0].data.url;
			const memeTitle = content[0].data.children[0].data.title;
			const memeUpvotes = content[0].data.children[0].data.ups;
			const memeDownvotes = content[0].data.children[0].data.downs;
			const memeNumComments = content[0].data.children[0].data.num_comments;

			meme_cmd.setTitle(`❤ | Reddit Memes | ❤ ${memeTitle}`)
			meme_cmd.setDescription('This command is just a typical meme command, memes are all collected from reddit <query>, => source link of meme is the title page.')
			meme_cmd.setURL(`${memeUrl}`)
			meme_cmd.setImage(memeImage)
			meme_cmd.setThumbnail(Images[1])
			meme_cmd.setColor(purple)
			meme_cmd.setFooter(Discord.ReactionCollector = `👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`);

			message.channel.send(meme_cmd);
		});
	},
};