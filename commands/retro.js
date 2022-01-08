/* eslint-disable no-unused-vars */
/* __________________________________________REQUIRED IMPORTS_______________________________________________________*/
const Discord = require('discord.js');

// #region require command => not used {fetch random retro/vintage image}
const got = require('got');
// #endregion

/* ______________________________________Config + Information Code ________________________________________________*/
module.exports.config = {
	config:{
		name: 'retro',
		aliases: ['rtr', 'r', '80s'],
		category: 'user_responsive',
		description: 'returns a random image from a list of images all related to 1980s and their values.',
		accessability: '{Public: Members}',
	},
};

module.exports = {
	'name': 'retro',
	'aliases': ['rtr', 'r', '80s'],
	'description': 'module.exports.config => description',

	// eslint-disable-next-line no-unused-vars
	commit(message, args) {
		/* eslint-disable semi */
		const retro_command = new Discord.MessageEmbed()
		got('https://www.dreamstime.com/photos-images/retro.html').then(response => {
			const content = JSON.parse(response.body);
			const permalink = content[0].data.children[0].data.permalink;
			const retroUrl = `https://www.dreamstime.com${permalink}`;
			const retroImage = content[0].data.children[0].data.url;
			const retroTitle = content[0].data.children[0].data.title;
			// Work on editing on this {function} => return values and images => url{comments, title, description}

			const website_link = ['http://retroimageprints.com', 'https://www.dictionary.com/browse/retro?s=t'];
			const Images = ['https://lh3.googleusercontent.com/ogw/ADGmqu-oJeHS26q7VNI1wUyRQ3qLOVJHiL8GfGURQOeM=s83-c-mo',
				'https://www.pngkit.com/png/full/315-3155859_anime-girl-aesthetic-freetoedit-japanese-anime-girl-aesthetic.png',
				'https://webstockreview.net/images/clipart-flower-aesthetic-4.png'];
			retro_command.setColor('#6a0dad')
			retro_command.setURL(retroUrl)
			retro_command.setTitle('❤ Retro | Command ❤')
			retro_command.setAuthor(
				'Narrator ❤', Images[0], 'https://discord.js.org')
			retro_command.setDescription(`The [retro](${website_link[1]}) command is a command that will return a random image from a set of images within a global query. The global query is fetched from [retro.com](${website_link[0]}).`)
			retro_command.setThumbnail(Images[1])
			retro_command.addField(
				'Retro Command | More Information',
				'The Retro command can also be used to bring back 1900s vibes for everyone who is looking forward to remembering the 1900s. The images are stored and selected from within a collection of various images and a random image returns every time.',
				true)
			retro_command.setImage(retroImage)
			retro_command.setTimestamp()
			retro_command.addFields(
				{ name: '|Aliases|', value: '```?r, ?rtr, ?80s```' },

				{ name: '|Usages|', value: '```This command is used to fetch random retro images.```' },

				{ name: '|Other Commands|', value: '```?pearl, ?meme, ?urban, ?greet```' })
			retro_command.setFooter('<Retro Command | ?r, ?retro, ?80>', Images[2]);

			message.channel.send(retro_command);
		});
	},
};