require('dotenv').config();

module.exports = (client, message) => {
    // set status and log when ready
    client.user.setActivity( "jake help", {
        type: "LISTENING",
      });
    console.log("Bot is ready")
}