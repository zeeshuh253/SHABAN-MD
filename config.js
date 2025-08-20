const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY01ZWXpNZkVxekFlMlpvQ3hXY091RG9FN1pEMHNmVGxFcWliRkl3Tmdsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1RwN091K1pVV3lRMC9PSWhLbUU1b204QXJxeFBES25ZWElMb3QwYVYwVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSGl1aEo1bXdkUnFZbm9BS0x2Ty9jcXBSQ1dUVXdralBQdnJRR25aVkhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUZGFRNGVtMDdTQjd5cmlVWU80V1NyTXVWMUtKR2gwTk8xR1NGcStKdkE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNGRGpYNUdtY2VRNXE2RFR6Z2wwQzdBeWd6eWVLZmhvRmthZEZGcXE1WE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imt0M0FZNG5tbU5YM3RFdFR5cmtQZFVwYWVLUHdjWFdXY3B2K3JwbXRqQ1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSURTNUpKVnFYcmpEbTBHWjIxYXVqQkVyZjAzQlZPalU0L3ZUYlk0cjNHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibG5sT0ZMOGt2WXF3VFpMdExENVg5VXc5YVlBU0p2dVJzTlgrWDRlcDZIaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQrL3RLeXRKVzZYSmYyNy9BcFRQVWNEaS9yNkZBWE55VGRjekxLWjdGUDVDYWhIZjlhNi9oRHBXLzVoSlpWOU9OYXdKMWxFRzZoTE5mTmt0YS80ckNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE4LCJhZHZTZWNyZXRLZXkiOiIvTnF2ZnpJTk1vdTRmT2NvQmtldXp2VnU0c2JEdHcwcmJaRks5bW5pSnlFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQ4ODk2Mjk3N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQjI5NjEwRkNCMzE1NUMxMDE5QjIyNDFDRTJCMTdDOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1Njc4OTQxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJIQzdHWkRFMiIsIm1lIjp7ImlkIjoiOTIzNDg4OTYyOTc3OjY0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCThqnwnZmPzKTwnZmd8J2br+GPhyDwnZCD8J2QgPCdkJHwnZCKIPCdkJnwnZCE8J2QhPCdkJLwnZCH8J2QlPCThqogIFxu8JOGqfCTg67wk4aqIFxu8JOGqfCTg67wk4aqIFxu8J2Qh/CdkI7wnZCN8JOGqfCTg67wk4aqIFxu8JOGqfCTg67wk4aqIFxu8JOGqfCTg67wk4aqIFxu8JOGqfCTg67wk4aqIFxu8JOGqfCTg67wk4aq8J2QmPCdkIDwnZCR8JOGqfCTg67wk4aqIFxu8JOGqfCTg67wk4aqIFxu8JOGqfCTg67wk4aqIiwibGlkIjoiMjcyMjY3MTM3MzAyNzAxOjY0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnpRbGNzQkVOV1Jsc1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUXI2eWx4dE1UdGVIQ1E4eGd4a3JqRU9qNFIySVB6MFZhb2Vpd0Z3cFh6bz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMHpGdnJuU3JzYVpnZzN1ZWFFSjNUMjBrWkVGQmwzd2RLSFdrUU8zbHhMdU5SaFhZY2JWdGdiQ0RFZUR4QW5CZnNic1VQaFBsU2xKR1YwbHlpOCswQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IlJWMm5uYXZmcSs4enRWMTdYeXZybU5nWjM1T05zd251WnVTbjZQWWowTWErdVVkbGJLc3I1NDNxdDNXWkczckVBRDhUOWw3TDRRcC9JMCtPRUMvWUF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDg4OTYyOTc3OjY0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVLK3NwY2JURTdYaHdrUE1ZTVpLNHhEbytFZGlEODlGV3FIb3NCY0tWODYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTY3ODkzNiwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQb3kifQ==",
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
