const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0VGU2NtV2RJYWxBTHdjdVdPVDdWSnRPTjFFOHV4Q1BlUzN0eU9pMVVrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmZBM0cxUXVTOGlGc3ZXMCtDSTErVGFoSHdtSU5kYkplQTVualpSY1dtbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4T3JPLzlBUDR3c0I5ZHVHeUxhbFNNZ3hENERWc0xZdEMyWVc0SitZaEdNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQlpuMzlrOUVtdXRMaFNmc2JkT3ZyeHJpdHVNTXRFb1g1aENqUDV4MnlFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitJSGI0QVBaUzJkT0tWN28wNE0ranYrbFBPMkY2TDdrS1V5bjI0Nkw4MGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFCcTYwZ1N0Ym5sZmNadkN3VFlYLzJlenRPR3dHejROSWFGNUNhWUVhejQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU09PeXFzOEdOMS9DWnl5b3RQWjFsOFlmSGpCUUJRakxCQkJZZEhsdHAxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2hoN3gva25QeUwvc0ZpS1ZWNnRYcTkxODJvNklLOElLOEtoR3h5MU1TTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVQRDdLaFgvTzE4dWdTenlxcmhXN2R1dGQ2NkJ6R2VaVDJTVFZ2aWlYZis5akRjMHY0RTVIT0M3azEzOS9xY0M1L1ROcTlXZG8zb1pNY1R6bHAvcERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI3LCJhZHZTZWNyZXRLZXkiOiJtajBaczk0UXNkanZvVGNhV2pzRzU5eUZqVVQrT29ETTUvYjlBSy9LUVRNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQ4ODk2Mjk3N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCRkU1NDQ3NzY0NjI3MzdCMDQzNTdDQTExQkI0NDFEMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1NjcwMjY0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJRN1EzRUFDUCIsIm1lIjp7ImlkIjoiOTIzNDg4OTYyOTc3OjYyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCThqnwnZmPzKTwnZmd8J2br+GPhyDwnZCD8J2QgPCdkJHwnZCKIPCdkITwnZCM8J2QgPCdkI3wk4aqICBcbvCThqnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqiBcbvCdkIfwnZCO8J2QjfCThqnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqvCdkJjwnZCA8J2QkfCThqnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqiIsImxpZCI6IjI3MjI2NzEzNzMwMjcwMTo2MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05yUWxjc0JFTy9ObGNVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFyNnlseHRNVHRlSENROHhneGtyakVPajRSMklQejBWYW9laXdGd3BYem89IiwiYWNjb3VudFNpZ25hdHVyZSI6IlN3YnNuVWwvd29rR1Z5NS9LdlREVDRCbzl3dkJKaDRMOFNJZjhhY2RWb0FmWm9oK2tkRDZvem9BRGcybm9vd3NRbDhzUzRUc29wMjhKUi83UURmQ0FRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJOd1VkL0VYZjR4cWMrdlBQNGJFTGZJMklBblI3OS9hTzdNWFpZcGFad2UrTjMxbjVtN2dlWkRLTTZQWE9lNW43Y0dVdTBDbkZjV1JvVnB6T082U1RDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQ4ODk2Mjk3Nzo2MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVSytzcGNiVEU3WGh3a1BNWU1aSzR4RG8rRWRpRDg5RldxSG9zQmNLVjg2In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU2NzAyNTgsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTHBFIn0=qnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqvCdkJjwnZCA8J2QkfCThqnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqiIsImxpZCI6IjI3MjI2NzEzNzMwMjcwMTo2MUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05uUWxjc0JFSWl3bGNVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFyNnlseHRNVHRlSENROHhneGtyakVPajRSMklQejBWYW9laXdGd3BYem89IiwiYWNjb3VudFNpZ25hdHVyZSI6ImdPdTNueTFWc09uNjJ4U28xMVdCRFN6SG1sUjI2MVhrZXhkY284SWc0UERkb09HeU9JQUtIaTJUYTNGZWlPaGU0bDREVVFMR09QOEM3Vzd4UnFJZkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJyUW1wZ1cyZStMbzdNcDcxbXlxSWtzQ0xPTzhhenZpckxEZFE5VnBIb3pyY3IwV3NhU3daaXhtVnVTcFhyeWIvTmhMaCttZGNWOEpDOEtnN2FXV0FoZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQ4ODk2Mjk3Nzo2MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVSytzcGNiVEU3WGh3a1BNWU1aSzR4RG8rRWRpRDg5RldxSG9zQmNLVjg2In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU2NjY0NDIsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRUhsIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.ibb.co/BDn7t21/shaban-md.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "ZeeshU༄",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Zeeshu༄⃟",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💞,❤️,🤍,🙈,🤭",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923488962977",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Zeeshu༄",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/BDn7t21/shaban-md.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *SHABAN-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923488962977",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
