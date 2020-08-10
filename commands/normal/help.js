const Discord = require("discord.js")

module.exports = {
    name: "help",
    description: "help command",
    run: (message, args) => {

        if (!args[0]) {
            var embed = new Discord.MessageEmbed()
                .setTitle("Help")
                .setDescription("List of commands for me to follow")

                .addFields(
                    {name: 'Help All', value: `Returns All Commands`},
                    {name: 'Help Music', value: `Returns Music Commands`},
                    {name: 'Help Misc',    value: `Returns Misc Commnands`},
                )

                .setColor(15158332)
        }

        else if (args[0] === "all") {
            var embed = new Discord.MessageEmbed()
            .setTitle("Help")
            .setDescription("List of commands for me to follow")

            .addFields(
                {name: 'Website (No Arg)', value: `Returns My Website`},
                {name: '8ball (Question)', value: `Returns Yes, No, Maybe`},
                {name: 'Ping (No Arg)',    value: `Returns Pong`},
                {name: 'Rules (No Arg)',   value: `Returns List of Rules`},
                {name: 'Join (No Arg)',    value: `Joins VC`},
                {name: 'Leave (No Arg)',   value: `Leaves VC`},
                {name: 'Pause (No Arg)',   value: `Pauses Video`},
                {name: 'Resume (No Arg)',  value: `Resumes Video`},
                {name: 'Play (YT Link)',   value: `Plays YT Link Audio`}
            )
        }

        else if (args[0] === "music") {
            var embed = new Discord.MessageEmbed()
            .setTitle("Help Music")
            .setDescription("List of commands for me to follow")

            .addFields(
                {name: 'Join (No Arg)',    value: `Joins VC`},
                {name: 'Leave (No Arg)',   value: `Leaves VC`},
                {name: 'Pause (No Arg)',   value: `Pauses Video`},
                {name: 'Resume (No Arg)',  value: `Resumes Video`},
                {name: 'Play (YT Link)',   value: `Plays YT Link Audio`}
            )
        }

        else if (args[0] === "misc") {
            var embed = new Discord.MessageEmbed()
            .setTitle("Help")
            .setDescription("List of commands for me to follow")

            .addFields(
                {name: 'Rules (No Arg)', value: `Returns List of Rules`},
                {name: 'Website (Question)', value: `Returns My Website`},
                {name: 'Ping (No Arg)', value: `Returns Pong`}
            )
        }

        message.channel.send({embed: embed});
    }
}