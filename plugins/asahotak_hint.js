let handler = async (m, { conn }) => {

    conn.asahotak = conn.asahotak ? conn.asahotak : {}

    let id = m.chat

    if (!(id in conn.asahotak)) throw false

    let json = conn.asahotak[id][1]

    m.reply('```' + json.unsur.replace(/[bcdfghjklmnpqrstvwxyz]/gi, '_') + '```')

}

handler.command = /^teki$/i

handler.limit = true

module.exports = handler
