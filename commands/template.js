const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('template')
		.setDescription('Replies with embed'),
	async execute(interaction) {
		const exampleEmbed = new MessageEmbed()
            .setColor('#04BFBF')
            .setTitle('Template Title')
            .setAuthor({ name: 'Ami', iconURL: 'https://cdn.pixabay.com/photo/2014/06/16/23/40/teal-370129_1280.png' })
            .setDescription('Some description here')
            .setThumbnail('https://cdn.pixabay.com/photo/2015/08/11/22/43/teal-885329_1280.png')
            .addFields(
                { name: 'Name', value: 'Some value here' },
                //{ name: '\u200B', value: '\u200B' },
                { name: 'Age', value: 'Some value here', inline: true },
                { name: 'Gender', value: 'Some value here', inline: true },
                { name: 'Race', value: 'Some value here', inline: true },
            )
            .setImage('https://cdn.pixabay.com/photo/2015/08/11/22/43/teal-885329_1280.png')
            .setTimestamp()
            .setFooter({ text: 'It\'s a Footer!', iconURL: 'https://cdn.pixabay.com/photo/2014/06/16/23/40/teal-370129_1280.png' });

        await interaction.reply({ embeds: [exampleEmbed] });
	},
};