const Discord = require('discord.js');
const client = new Discord.Client();

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**حياك في سيرفرنا 🌹 
https://discord.gg/SJsYw9s
جيف اوايات و نظام انفايت قوي 💪 **`) 
}).catch(console.error)
})

client.login(process.env.TOKEN)