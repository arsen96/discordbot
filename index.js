const Discord = require('discord.js')
const bot = new Discord.Client()
const Google = require('./commands/google')
const Ping = require('./commands/ping')
const Play = require('./commands/play')

bot.on('ready', function () {
  // bot.user.setAvatar('./avatar.png').catch(console.error)
  // bot.user.setGame('Préparation du tutoriel').catch(console.error)
})

bot.on('guildMemberAdd', function (member) {
  member.createDM().then(function (channel) {
    return channel.send('Bienvenu sur le channel ' + member.displayName)
  }).catch(console.error)
})

bot.on('message', function (message) {
  let commandUsed =
    Ping.parse(message) ||
    Play.parse(message) ||
    Google.parse(message)
})

bot.login('MzE1NDgxNDc2MDIyMDA5ODY2.DAHXsA.tkrYro5HVcEKyBSmqK8e2bhUeSk')