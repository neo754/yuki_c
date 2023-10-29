import { pickRandom} from './lib/other-function.js'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import { watchFile, unwatchFile } from 'fs'
import fs from "fs"
import moment from 'moment-timezone'
/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`    
let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
//TIME
global.waktu = `${date}`
global.namabot = 'YukiBoy'
global.v = '-'   
global.botdate = `⫹⫺ DATE: ${week} ${date}\n⫹⫺ TIME: ${wktuwib}`
global.bottime = `T I M E : ${wktuwib}`
// Sticker WM
global.packname = `YukiBot`
global.author = `© Yuki`

/* ===========Hiasan=========== */
let htjava = pickRandom(["乂", "❏", "⫹⫺", "⎔", "✦", "⭔", "⬟"])
let pmenus = pickRandom(["乂", "◈", "➭", "ଓ", "⟆•", "⳻", "•", "↬", "◈", "⭑", "ᯬ", "◉", "᭻", "»", "〆", "々", "✗", "♪"])
global.eror = "_Lagi error bang_"
global.lopr = "🅟"
global.lolm = "Ⓛ"
global.dmenut = htjava + "───『"
global.dmenub = "│" + pmenus
global.dmenub2 = "│" + pmenus
global.dmenuf = "╰━━━━━━━━┈─◂"
global.cmenut = htjava + "───『"
global.cmenuh = "』───" + htjava
global.cmenub = "│" + pmenus
global.cmenuf = "╰━━━━━━━━┈─◂"
global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     "
global.dashmenu = "✧────···[ *Dashboard* ]···────✧"
global.pmenus = pickRandom(["乂", "◈", "➭", "ଓ", "⟆•", "⳻", "•", "↬", "◈", "⭑", "ᯬ", "◉", "᭻", "»", "〆", "々", "✗", "♪"])
global.htjava = pickRandom(["乂", "❏", "⫹⫺", "⎔", "✦", "⭔", "⬟"])
global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.emojis = pickRandom(["👑", "🎗", "️🗿", "🕹", "️💡", "🪄", "🎈", "🎊", "🔖", "📍", "❤", "‍🔥", "💤", "💭", "🕚", "💬", "🚩", "🎐", "🍃", "🌿", "🥀", "✨", "⚡", "☂️"])

//--------[WATERMARK]
global.wm = 'YukiBot' //Main WM
global.wm2 = 'YukiBott'
global.wm3 = 'Bot-Yuki'
global.md = 'YukiZzy‌'
//-----[OWNER]
global.nomorown = '62857106777263'
global.owner = [
['62857106777263'], // global owner 0
['62857106777263'], // global owner 1
['6285710677726'], // global owner 2
['62857106777263', 'Yukii><`', true] // global owner 3
]
global.mods = [] // Want some help?
global.prems = ['62857106777263','6285710677726'] // Premium user has unlimited limit

// =================={[(API KEYS)]}==================
global.mupar = 'OnLasdan'
global.org = '4SVXAlaZC9Ix9LK5O33M7qeZ'
global.openai = 'UWDxn1Vpch2WWkMJ5JbiT3BlbkFJaEkc5PvkWPeg0HnlKEw1'
global.APIs = {
can: 'https://pnggilajacn.my.id',
skizo: 'https://xzn.wtf',
xteam: 'https://api.xteam.xyz', 
nrtm: 'https://fg-nrtm.ddns.net',
bg: 'http://bochil.ddns.net',
lol : 'https://api.lolhuman.xyz' , 
fgmods: 'https://api-fgmods.ddns.net',
violetics : 'https://violetics.pw',
zenz: 'https://zenzapi.xyz',
xzn: 'https://xzn.wtf'
}
global.APIKeys = {
'https://pnggilajacn.my.id': 'ItsukaChan',
'https://xzn.wtf': 'Mufar',
'https://api.xteam.xyz': 'd90a9e986e18778b',
'https://zenzapis.xyz': '675e34de8a', 
'https://api-fgmods.ddns.net': 'xWBaBwKE',
'https://zenzapi.xyz': '01ABEB1E11',
'https://violetics.pw': 'beta',
'https://api.lolhuman.xyz': '4088badbf51e0935f6bcd12c',
'https://xzn.wtf/': 'mufar'
}
global.lolkey = '4088badbf51e0935f6bcd12c'
global.lolkeysapi = [ '4088badbf51e0935f6bcd12c' ]
global.lol = '4088badbf51e0935f6bcd12c'
global.rose = '51e0d1fb74102f74edd18be8'
global.xyro = 'ClaraKeyOfficial'
global.xzn = 'mufar'
global.wait = ' *■■■■■■□□□□ 60% 𝚠𝚊𝚒𝚝!* '
///==================/thumbnail 
global.thumb = 'https://telegra.ph/file/c3ec001ccc338782db4a4.jpg' //Main Thumbnail
global.thumb2 = 'https://telegra.ph/file/7e7a03321b44aae71c54f.jpg'
global.thumbbc = 'https://telegra.ph/file/df5a01c0c4ee495935bd8.jpg' //For broadcast
global.giflogo = 'https://telegra.ph/file/c3ec001ccc338782db4a4.jpg'
global.thumblvlup = ''
global.footer = 'YukiBot'
/*============== SOCIAL ==============*/
global.sig = 'https://instagram.com/yuki_xzy55' //Link Instagrammu
global.sgh = '-' //Link Githubmu
global.sgc = 'https://chat.whatsapp.com/ILOsRz3Eb9j75clIlYBDUG'
global.sdc = '-' //Isi Pake Link Discordmu Kalo Gada Biarin aja
global.snh = 'https://nhentai.net/g/HaramTod🗿' //Hmmm, Ini boleh kalian isi terserah :v
//global.logo = ImgMountain()
global.sfb = '-'
global.syt = '-'
//====== Url Template Buttons ======//
global.dtu = 'ᴅᴏɴᴀᴛᴇ'
global.urlnya = "https://pnggilajacn.my.id/contacts"
//========== callButtons ==========//
global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ'
global.phn = '+62 857-1067-77263'
global.ephemeral = '86400' // 86400 = 24jam, kalo ingin di hilangkan ganti '86400' jadi 'null' atau ''
global.monitor = "u1931038-1f70a77eef5964be82e7d606" // Ambil di https://uptimerobot.com
global.multiplier = 69 // The higher, The harder levelup
/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'
global.htjava = '⫹⫺' 
global.fgig = '▢ mupar'
global.docs = [
    'application/pdf',
    'application/msword',
    'application/vnd.ms-excel',
    'application/vnd.ms-powerpoint',
    'application/zip',
    'application/x-rar-compressed',
    'application/x-tar',
    'application/x-7z-compressed',
    'application/epub+zip',
    'application/json'
];
// =============={[(END)]}=================
global.ppbot = [ 'https://telegra.ph/file/c3ec001ccc338782db4a4.jpg','https://telegra.ph/file/7e7a03321b44aae71c54f.jpg','https://telegra.ph/file/df5a01c0c4ee495935bd8.jpg','https://telegra.ph/file/c3ec001ccc338782db4a4.jpg','https://telegra.ph/file/7e7a03321b44aae71c54f.jpg','https://telegra.ph/file/df5a01c0c4ee495935bd8.jpg']
// ================={[(THUMBNAIL)]}===========
    global.hwaifu= ['https://telegra.ph/file/76dac6b1c51affd5b249e.jpg','https://cdnb.artstation.com/p/assets/images/images/065/283/211/large/aoi-ogata-sereule-10.jpg','https://cdnb.artstation.com/p/assets/images/images/065/283/211/large/aoi-ogata-sereule-10.jpg','https://cdnb.artstation.com/p/assets/images/images/065/049/227/large/aoi-ogata-fcd-1.jpg','https://cdnb.artstation.com/p/assets/images/images/063/225/261/large/aoi-ogata-htgyvj.jpg','https://cdnb.artstation.com/p/assets/images/images/062/235/023/large/aoi-ogata-tvfyg.jpg'    
       ]
//===[THUMBNAIL MENU]===

    global.thumbnailUrl= [
'https://telegra.ph/file/c3ec001ccc338782db4a4.jpg','https://telegra.ph/file/7e7a03321b44aae71c54f.jpg','https://telegra.ph/file/df5a01c0c4ee495935bd8.jpg'
]
global.Pallmenu = [
'https://telegra.ph/file/c3ec001ccc338782db4a4.jpg','https://telegra.ph/file/7e7a03321b44aae71c54f.jpg','https://telegra.ph/file/df5a01c0c4ee495935bd8.jpg'
]
global.AraChu2 = [
  "https://telegra.ph/file/c3ec001ccc338782db4a4.jpg",
  "https://telegra.ph/file/7e7a03321b44aae71c54f.jpg",
  "https://telegra.ph/file/df5a01c0c4ee495935bd8.jpg",
  "https://telegra.ph/file/c3ec001ccc338782db4a4.jpg",
  "https://telegra.ph/file/7e7a03321b44aae71c54f.jpg",
  "https://telegra.ph/file/df5a01c0c4ee495935bd8.jpg",
  "https://telegra.ph/file/c3ec001ccc338782db4a4.jpg",
  "https://telegra.ph/file/7e7a03321b44aae71c54f.jpg",
  "https://telegra.ph/file/df5a01c0c4ee495935bd8.jpg",
  "https://telegra.ph/file/c3ec001ccc338782db4a4.jpg",
  "https://telegra.ph/file/7e7a03321b44aae71c54f.jpg",
  "https://telegra.ph/file/df5a01c0c4ee495935bd8.jpg",
  "https://telegra.ph/file/7e7a03321b44aae71c54f.jpg",
  "https://telegra.ph/file/df5a01c0c4ee495935bd8.jpg",
  "https://telegra.ph/file/c3ec001ccc338782db4a4.jpg",
  "https://telegra.ph/file/c3ec001ccc338782db4a4.jpg",
  "https://telegra.ph/file/7e7a03321b44aae71c54f.jpg",
  "https://telegra.ph/file/df5a01c0c4ee495935bd8.jpg"
]
//["https://img.coomer.party/thumbnail/data/20/17/2017bbb33e4b2c492fb1b17f2dbd53273496dbce85b87605c4d701e14fce0267.jpg"]
  //['https://cdnb.artstation.com/p/assets/images/images/014/689/195/large/aoi-ogata-hate20181.jpg']
/*global.thumbnailUrl = [
'https://telegra.ph/file/3deaa6abaa91e7edd3a4b.jpg',
'https://telegra.ph/file/4d4bff6d786a173f503ee.jpg',
'https://telegra.ph/file/6b941a1e7b06dfe34c470.jpg',
'https://telegra.ph/file/8847890dd68461f43d1ea.jpg',
'https://telegra.ph/file/ad0adaacd97227ac10309.jpg'
]*/
//global.ppbot = ['https://telegra.ph/file/76dac6b1c51affd5b249e.jpg','https://cdnb.artstation.com/p/assets/images/images/065/283/211/large/aoi-ogata-sereule-10.jpg','https://cdnb.artstation.com/p/assets/images/images/065/283/211/large/aoi-ogata-sereule-10.jpg','https://cdnb.artstation.com/p/assets/images/images/065/049/227/large/aoi-ogata-fcd-1.jpg','https://cdnb.artstation.com/p/assets/images/images/063/225/261/large/aoi-ogata-htgyvj.jpg','https://cdnb.artstation.com/p/assets/images/images/062/235/023/large/aoi-ogata-tvfyg.jpg']
/*global.hwaifu = [
    'https://ll--lasdanon.repl.co/api/asupan/image/korean?apikey=Onlasdan',
    'https://ll--lasdanon.repl.co/api/asupan/image/china?apikey=Onlasdan',
       ]
*/
global.fla = pickRandom(ImgLogoFlam())

/* Img Flamming */
function ImgLogoFlam() {
    let Flam = [
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=arcade-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=dance-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=emperor-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flame-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=matrix-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=robot-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=skate-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=spaceships-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=spider-men-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=wrestler-logo&text="
]
    return Flam
}

global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            Fox: "🦊",
            agility: "🤸‍♂️",
            anggur: "🍇",
            apel: "🍎",
            aqua: "🥤",
            arc: "🏹",
            armor: "🥼",
            bank: "🏦",
            batu: "🧱",
            berlian: "💎",
            bibitanggur: "🍇",
            bibitapel: "🍎",
            bibitjeruk: "🍊",
            bibitmangga: "🥭",
            bibitpisang: "🍌",
            botol: "🍾",
            bow: "🏹",
            bull: "🐃",
            cat: "🐈",
            centaur: "🎠",
            chicken: "🐓",
            coal: "⚱️",
            common: "📦",
            cow: "🐄",
            crystal: "🔮",
            darkcrystal: "♠️",
            diamond: "💎",
            dog: "🐕",
            dragon: "🐉",
            eleksirb: "🧪",
            elephant: "🐘",
            emasbatang: "🪙",
            emasbiasa: "🥇",
            emerald: "💚",
            exp: "✉️",
            fishingrod: "🎣",
            foodpet: "🍱",
            fox: "🦊",
            gardenboc: "🗳️",
            gardenboxs: "📦",
            gems: "🍀",
            giraffe: "🦒",
            gold: "👑",
            griffin: "🦒",
            health: "❤️",
            healtmonster: "❤‍🔥",
            horse: "🐎",
            intelligence: "🧠",
            iron: "⛓️",
            jeruk: "🍊",
            kaleng: "🥫",
            kardus: "📦",
            kayu: "🪵",
            ketake: "💿",
            keygold: "🔑",
            keyiron: "🗝️",
            knife: "🔪",
            koinexpg: "👛",
            kucing: "🐈",
            kuda: "🐎",
            kyubi: "🦊",
            legendary: "🗃️",
            level: "🧬",
            limit: "🌌",
            lion: "🦁",
            magicwand: "⚕️",
            makanancentaur: "🥗",
            makanangriffin: "🥙",
            makanankyubi: "🍗",
            makanannaga: "🍖",
            makananpet: "🥩",
            makananphonix: "🧀",
            mana: "🪄",
            mangga: "🥭",
            money: "💵",
            mythic: "🗳️",
            mythic: "🪄",
            naga: "🐉",
            pancingan: "🎣",
            pet: "🎁",
            petFood: "🍖",
            phonix: "🦅",
            pickaxe: "⛏️",
            pisang: "🍌",
            pointxp: "📧",
            potion: "🥤",
            rock: "🪨",
            rubah: "🦊",
            sampah: "🗑️",
            serigala: "🐺",
            snake: "🐍",
            stamina: "⚡",
            strength: "🦹‍♀️",
            string: "🕸️",
            superior: "💼",
            sword: "⚔️",
            tiger: "🐅",
            tiketcoin: "🎟️",
            trash: "🗑",
            umpan: "🪱",
            uncommon: "🎁",
            upgrader: "🧰",
            wood: "🪵"
        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, "gi")]).filter(v => v[1].test(string))
        if (!results.length) return ""
        else return emot[results[0][0]]
    }
}


//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
//=========/===
