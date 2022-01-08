/* __________________________________________REQUIRED IMPORTS_______________________________________________________*/
const urban = require('urban');
const Discord = require('discord.js');
const { purple } = '#6a0dad';

/* ______________________________________Config + Information Code ________________________________________________*/
module.exports.config = {
	name: 'urban',
	aliases: ['urban', 'dict', 'u'],
	category: 'user_responsive',
	description: ':returns a query from within the urban dictionary of words:',
	accessability: '{Public: Members}',
	format: 'search || random <query>',
};

module.exports = {
	name: 'urban',
	aliases: ['urban', 'dict', 'u'],
	description: 'returns a search query from urban dictionary, this can be terms, facts, etc',

	commit(message, args) {
		const format = 'to search: search || random <query>'.toLowerCase();
		if (args < 1 || !['search', 'random'].includes(args[0])) {return message.channel.send(`-urban ${format}`);}

		const image = 'https://www.pngkit.com/png/full/315-3155859_anime-girl-aesthetic-freetoedit-japanese-anime-girl-aesthetic.png';
		const image_author = 'https://lh3.googleusercontent.com/ogw/ADGmqu-oJeHS26q7VNI1wUyRQ3qLOVJHiL8GfGURQOeM=s83-c-mo';
		const image_set = 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif';
		const search = args[0] ? urban(args.slice(1).join(' ')) : urban.random();

		try {
			search.first(res => {
				if (!res) {return message.channel.send('Oh no! no results found: please try again? :frown:');}
				const { word, definition, example, thumbs_up, thumbs_down, permalink, author } = res;

				const urban_embed = new Discord.MessageEmbed()
					.setColor(purple)
					.setAuthor(`Urban Dictionary | ${word}`, image_author)
					.setImage(image_set)
					.setThumbnail(image)
					.setDescription(`**Defnition**: ${definition || 'No definition was placed for this term. '}
                                **Example**: ${example || 'No example was placed for this term.'}
                                **Upvote?**: ${thumbs_up || 0}
                                **Downvote?**: ${thumbs_down || 0}
                                **Link**: [link to ${word}](${permalink || 'https://www.urbandictionary.com/define.php?term=The%20Urban%20Dictionary'})`)
					.setTimestamp()
					.setFooter(`Written by ${author || 'Anonymous <unknown>'}`);

				message.channel.send(urban_embed);

				if (!message.channel.nsfw) {return message.channel.send('Please run this command in an `NSFW` channel.');}

			});
		}
		catch (e) {
			console.log(e);
			message.channel.send('Narrator Sama ~ my command isnt not working <command: "urban">');
		}
	},
};