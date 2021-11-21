let fetch = require('node-fetch')

let timeout = 30000

let poin = 500

let src

let handler = async (m, { conn, usedPrefix }) => {

    conn.asahotak = conn.asahotak ? conn.asahotak : {}

    let id = m.chat

    if (id in conn.asahotak) {

        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.asahotak[id][0])

        throw false

    }

    if (!src) src = await (await fetch('https://raw.githubusercontent.com/Shinz7777/database/master/games/asahotak.json')).json()

    let json = src[Math.floor(Math.random() * src.length)]

    let caption = `

${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*

Ketik ${usedPrefix}calo untuk bantuan

Bonus: ${poin} XP

`.trim()

    conn.asahotak[id] = [

        await conn.sendButton(m.chat, caption, author, 'Bantuan', '.calo', m),

        json, poin,

        setTimeout(async () => {

            if (conn.asahotak[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*\n${json.deskripsi}`, author, 'Cak Lontong', '.caklontong', conn.caklontong[id][0])

            delete conn.asahotak[id]

        }, timeout)

    ]

}

handler.help = ['asahotak']

handler.tags = ['game']

handler.command = /^asahotak/i

module.exports = handler
