const emotes = require ("../../config/emojis.json");

module.exports = {
    name: "skip",
    description: "skips song",
    aliases: [],
    run: async (client, message, args) => {

        //If the member is not in a voice channel
        if(!message.member.voice.channel) return message.channel.send(`You're not in a voice channel ${emotes.error}`);

        //If there's no music
        if(!client.player.isPlaying(message.guild.id)) return message.channel.send(`No music playing on this server ${emotes.error}`);

        const track = await client.player.skip(message.guild.id);

        //Message
        message.channel.send(`Song ${track.name} skipped ${emotes.success}`);

    }
}
