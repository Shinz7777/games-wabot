et handler  = async (m, { conn }) => {

  conn.reply(m.chat,`“${pickRandom(global.truth)}”`, m)

}

handler.help = ['truth']

handler.tags = ['quotes']

handler.command = /^(truth)$/i

handler.owner = false

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.admin = false

handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {

  return list[Math.floor(list.length * Math.random())]

}

global.truth = [

    "Acara tv apa yang paling memuakkan? Berikan alasannya!", 

    "Apa baju yang (menurutmu) paling jelek yang pernah kamu pakai, dan kapan kamu memakainya?",

    "Apa binatang patronus yang cocok untuk kamu?", "Apa hal paling buruk yang pernah kamu bilang tentang temenmu?",

    "Apa hal paling memalukan dari dirimu?",

    "Apa hal paling memalukan dari temanmu?", 

    "Apa hal pertama yang kamu lihat saat kamu melihat orang lain (beda gender)?",

    "Apa hal pertama yang terlintas di pikiranmu saat kamu melihat cermin?",

    "Apa hal terbodoh yang pernah kamu lakukan?", "Apa hal terbodoh yg pernah kamu lakukan ?",

    "Apa ketakutan terbesar kamu?",

    "Apa mimpi terburukmu?", "Apa mimpi terkonyol yang pernah kamu inget?",

    "Apa pekerjaan paling konyol yang pernah kamu bayangin kamu akan jadi?",

    "Apa sifat terburukmu menurut kamu?",

    "Apa sifat yang ingin kamu rubah dari dirimu?",

    "Apa sifat yang ingin kamu rubah dari temanmu?",

    "Apa yang akan kamu lakuin bila pacarmu bilang hidung atau jarimu jelek?",

    "Apa yg kamu fikirkan sebelum kamu tidur ? ex: menghayal tentang jodoh,dll.",

    "Apakah hal yang menurutmu paling menonjol dari dirimu?",

    "Bagian tubuh temanmu mana yang paling kamu sukai dan ingin kamu punya?",

    "Bagian tubuhmu mana yang paling kamu benci?", 

    "Dari semua kelas yang ada di sekolah, kelas mana yang paling ingin kamu masuki dan kelas mana yang paling ingin kamu hindari?",

    "Deksripsikan teman terdekat mu!",

    "Deskripsikan dirimu dalam satu kata!",

    "Film dan lagu apa yang pernah bikin kamu nangis?",

    "Hal apa yang kamu rahasiakan sampe, sekarang dan gak ada satu orangpun yang tau?",

    "Hal paling romantis apa yang seseorang (beda gender) pernah lakuin atau kasih ke kamu?","Hal-hal menjijikan apa yang pernah kamu alami ?",

    "Jika kamu lahir kembali dan harus jadi salah satu dari temanmu, siapa yang akan kamu pilih untuk jadi dia?",

    "Jika punya kekuatan super/ super power ingin melakukan apa",

    "Jika sebentar lagi kiamat, apa yg kamu lakukan ?",

    "Kalo kamu disuruh operasi plastik dengan contoh wajah dari teman sekelasmu, wajah siapa yang akan kamu tiru?",

    "Kamu pernah mencuri sesuatu gak?",

    "Kamu takut mati? kenapa?",

    "Kapan terakhir kali menangis dan mengapa?",

    "kemampuan spesial kamu apa?",

    "Kok bisa suka sama orang yang kamu sukai?",

    "Menurutmu, apa sifat baik teman terdekatmu yang nggak dia sadari?",

    "Orang seperti apa yang ingin kamu nikahi suatu saat nanti?",

    "Pekerjaan paling ngenes apa yang menurutmu cocok untuk teman di sebelah kananmu?",

    "Pengen tukeran hidup sehari dengan siapa? (teman terdekat yang kalian sama-sama tahu) dan mengapa",

    "Pernahkah kamu diam-diam berharap hubungan seseorang dengan pacarnya putus? Siapa?",

    "Pilih PACAR atau TEMAN ? berikan alasannya !",

    "Quote apa yang paling kamu ingat dan kamu suka?",

    "Rahasia apa yg belum pernah kamu katakan sampai sekarang kepada teman mu ?",

    "Rolemodel (panutan) kamu siapa?",

    "Siapa di antara temanmu yang kamu pikir matre?",

    "Siapa di antara teman-temanmu yang menurutmu potongan rambutnya paling ngenes (paling nggak banget)?",

    "Siapa diantara temen-temenmu yang paling NGGAK fotogenik dan kalo difoto lagi ketawa mukanya kaya kuda?",

    "Siapa mantan terindah mu? dan mengapa kalian putus ?!",

    "Siapa nama artis yang pernah kamu cium fotonya diam-diam?",

    "Siapa nama guru cowok yang pernah kamu sukai dulu?",

    "Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?",

    "Siapa nama orang (beda gender) yang menurutmu akan asyik bila dijadikan pacar?",

    "Siapa nama orang yang kamu benci, tapi kamu rasa orang itu suka sama kamu (nggak harus beda gender)?",

    "Siapa nama orang yang pernah kamu ikutin diam-diam?",

    "Siapa orang (lawan jenis) yang paling sering terlintas di pikiranmu?",

    "Siapa orang yg paling menjengkelkan di antara teman teman mu ? alasannya!",

    "Siapa sebenernya di antara teman-temanmu yang kamu pikir harus di make-over?",

    "Siapa yang paling mendekati tipe pasangan idealmu di sini"

]
