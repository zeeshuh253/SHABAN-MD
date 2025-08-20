const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0JvKy82MWsrYldTbEFQcXY3R3hlQUJJTEF5cG01U3RjbGJXSkdWamtXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnZsU0ZZTTJPclNabzh3dmNjeUVxSkRQc2pzeDhUQy9YN2tDbGtDWEtWQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSWxnMXpmbHQxWmxPZ1psYzFmOXIrcm5wdXVHQkR1VC9JL2ZtQkttc0ZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQitrSUd1SlVuVkhBWHVpalR1YUY0VDg1c2pJV0JWd2pjbC9UOTVCcXpFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZBa1doUnBxdjNSV2xNZEx4VDJVOG9iN1h4QTdmNjRtVlNCZ3plSXdQMjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikk2SzYwWkRCWCt3SHRWS3AxbkJUaW1HUjBBTlpPNWw5UGhPODZqUTFXM0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUdPOTBLY1Q1YjhPMWNndWR3c0RxbVdITEZqclRtN0R4K0t6ZHBrTWZITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2h3MnRaWEZ1clNHb1hQRkt3amhSMzE5cUJodUJuSHF0RThZQVhHV09oWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJMTDJJYTRPNDVrQXJGcU5BT1N5S3BLQUN2eElLYmxpSm1sc1BJcGVMbE5yRnpyMzk0UjB2ZlB5VjUyK05oSkFGSWlMZVRCa0F6UVprU0pIZHp5NEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODQsImFkdlNlY3JldEtleSI6Iis1UzNXMW5ZVlFocXFaNER5dFBwOWpRM29IRWZ4WU1SYXVHMThCMU5kVzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkVGOFJUV0hLIiwibWUiOnsiaWQiOiI5MjM0ODg5NjI5Nzc6NjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8JOGqfCdmY/MpPCdmZ3wnZuv4Y+HIPCdkIPwnZCA8J2QkfCdkIog8J2QmfCdkITwnZCE8J2QkvCdkIfwnZCU8JOGqiAgXG7wk4ap8JODrvCThqogXG7wk4ap8JODrvCThqogXG7wnZCH8J2QjvCdkI3wk4ap8JODrvCThqogXG7wk4ap8JODrvCThqogXG7wk4ap8JODrvCThqogXG7wk4ap8JODrvCThqogXG7wk4ap8JODrvCThqrwnZCY8J2QgPCdkJHwk4ap8JODrvCThqogXG7wk4ap8JODrvCThqogXG7wk4ap8JODrvCThqoiLCJsaWQiOiIyNzIyNjcxMzczMDI3MDE6NjNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOdlFsY3NCRU1DUGxzVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJRcjZ5bHh0TVR0ZUhDUTh4Z3hrcmpFT2o0UjJJUHowVmFvZWl3RndwWHpvPSIsImFjY291bnRTaWduYXR1cmUiOiJUVTJHREdZTXd6OHhtZUVCWlFjbjkrYkU4eWx3STdpWllFb3pKVHNOMGIwTFoza2xoWEVDQzRIQkl6Z2NCWDhpYVNsY2kraXczSll2ZnJJM0dhYTdCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOWZOc1NHTjB3dWdlb2llWFlwZHFVZ0huTHJDZTYzeVQvSXo5RTBPN0FESllkL0RiOTBBc0VDMy90KzBVNm1wWDdQblhuYlViakhEQ0UvMGVKWFNBQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0ODg5NjI5Nzc6NjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVUsrc3BjYlRFN1hod2tQTVlNWks0eERvK0VkaUQ4OUZXcUhvc0JjS1Y4NiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1Njc4NjU5LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtWVyJ9qnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqvCdkJjwnZCA8J2QkfCThqnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqiIsImxpZCI6IjI3MjI2NzEzNzMwMjcwMTo2MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05yUWxjc0JFTy9ObGNVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFyNnlseHRNVHRlSENROHhneGtyakVPajRSMklQejBWYW9laXdGd3BYem89IiwiYWNjb3VudFNpZ25hdHVyZSI6IlN3YnNuVWwvd29rR1Z5NS9LdlREVDRCbzl3dkJKaDRMOFNJZjhhY2RWb0FmWm9oK2tkRDZvem9BRGcybm9vd3NRbDhzUzRUc29wMjhKUi83UURmQ0FRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJOd1VkL0VYZjR4cWMrdlBQNGJFTGZJMklBblI3OS9hTzdNWFpZcGFad2UrTjMxbjVtN2dlWkRLTTZQWE9lNW43Y0dVdTBDbkZjV1JvVnB6T082U1RDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQ4ODk2Mjk3Nzo2MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVSytzcGNiVEU3WGh3a1BNWU1aSzR4RG8rRWRpRDg5RldxSG9zQmNLVjg2In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU2NzAyNTgsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTHBFIn0=qnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqvCdkJjwnZCA8J2QkfCThqnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqiBcbvCThqnwk4Ou8JOGqiIsImxpZCI6IjI3MjI2NzEzNzMwMjcwMTo2MUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05uUWxjc0JFSWl3bGNVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFyNnlseHRNVHRlSENROHhneGtyakVPajRSMklQejBWYW9laXdGd3BYem89IiwiYWNjb3VudFNpZ25hdHVyZSI6ImdPdTNueTFWc09uNjJ4U28xMVdCRFN6SG1sUjI2MVhrZXhkY284SWc0UERkb09HeU9JQUtIaTJUYTNGZWlPaGU0bDREVVFMR09QOEM3Vzd4UnFJZkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJyUW1wZ1cyZStMbzdNcDcxbXlxSWtzQ0xPTzhhenZpckxEZFE5VnBIb3pyY3IwV3NhU3daaXhtVnVTcFhyeWIvTmhMaCttZGNWOEpDOEtnN2FXV0FoZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQ4ODk2Mjk3Nzo2MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVSytzcGNiVEU3WGh3a1BNWU1aSzR4RG8rRWRpRDg5RldxSG9zQmNLVjg2In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU2NjY0NDIsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRUhsIn0=",
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
