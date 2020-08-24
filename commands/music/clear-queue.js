const emotes = require ("../../config/emojis.json");

module.exports = {
    name: "clear-queue",
    description: "clears queue",
    aliases: [],
    run: async (client, message, args) => {
  
        //If the member is not in a voice channel
        if(!message.member.voice.channel) return message.channel.send(`You're not in a voice channel ${emotes.error}`);

        //If there's no music
        if(!client.player.isPlaying(message.guild.id)) return message.channel.send(`No music playing on this server ${emotes.error}`);

        //The bot removes the waiting list
        client.player.clearQueue(message.guild.id);

        //Success message
        message.channel.send(`Queue cleared ${emotes.success}`);

    }
}
