let fetch = require('node-fetch') 
let handler  = async (m) => {
  let res = await fetch('https://raw.githubusercontent.com/Shinz7777/database/master/kata-kata/dare.json')
  let json = await res.json()
  m.reply(pickRandom(json))
}
handler.help = ['dare']
handler.tags = ['quotes']
handler.command = /^(dare)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.round(Math.random() * list.length)]
}
