let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [085695157547]
│ • Gopay [085695157547]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285695157547
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
