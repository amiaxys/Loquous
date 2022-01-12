const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('template')
		.setDescription('Replies with embed'),
	async execute(interaction) {
		const exampleEmbed = new MessageEmbed()
            .setColor('#04BFBF')
            .setAuthor({ name: interaction.user.username, iconURL: interaction.user.avatarURL() })
            .setTitle('Character Sheet')
            .setDescription('Character sheet template')
            .addFields(
                { name: 'Name', value: 'Some value here' },
                //{ name: '\u200B', value: '\u200B' },
                { name: 'Age', value: 'Some value here', inline: true },
                { name: 'Gender', value: 'Some value here', inline: true },
                { name: 'Race', value: 'Some value here', inline: true },
            )
            .setImage('https://cdn.pixabay.com/photo/2015/08/11/22/43/teal-885329_1280.png')
            .setTimestamp()
            .setFooter({ text: 'A note down here' });

        await interaction.reply({ embeds: [exampleEmbed] });
	},
};