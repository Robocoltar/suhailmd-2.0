const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348109966247";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_52_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNyxcbiAgICAgICAgODcsXG4gICAgICAgIDI1LFxuICAgICAgICAyNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAzLFxuICAgICAgICA3MSxcbiAgICAgICAgNSxcbiAgICAgICAgODUsXG4gICAgICAgIDYzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA4OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA1NixcbiAgICAgICAgMTIyLFxuICAgICAgICA4MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDY5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MixcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA3LFxuICAgICAgICAzMixcbiAgICAgICAgMTg2LFxuICAgICAgICA2OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA5LFxuICAgICAgICA3NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzOCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM1LFxuICAgICAgICA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA4LFxuICAgICAgICA4MyxcbiAgICAgICAgNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAxNCxcbiAgICAgICAgNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDg0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjksXG4gICAgICAgIDg0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlV0WTJ6WE02bmZxdFZaRFVxTXlDK3hPa0gyVG9ENTVtL2ZPbnllWHVjZkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEwOTk2NjI0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTUzOTBBOTIyRjZBQzBCNTU0OTgwQjE3QzFFMDBFMThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNzM1NTcwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVUbGZGNkRWUUN1RmllWHNuWXJJb0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTI3NDJjNDktZWVjNi00OWVlLWIzMWMtMDc0ZGVlMzYxMzA4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNSxcbiAgICAgIDE4NyxcbiAgICAgIDIxOCxcbiAgICAgIDIsXG4gICAgICAzNyxcbiAgICAgIDIwNyxcbiAgICAgIDIxOCxcbiAgICAgIDE5OSxcbiAgICAgIDE0MSxcbiAgICAgIDIxMixcbiAgICAgIDEzOSxcbiAgICAgIDc4LFxuICAgICAgMjU0LFxuICAgICAgMjMyLFxuICAgICAgMTgsXG4gICAgICAxMDksXG4gICAgICAxMixcbiAgICAgIDIyMCxcbiAgICAgIDkzLFxuICAgICAgNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICAxNjAsXG4gICAgICA4OCxcbiAgICAgIDExMCxcbiAgICAgIDE4NSxcbiAgICAgIDExMCxcbiAgICAgIDE2NSxcbiAgICAgIDM5LFxuICAgICAgNTMsXG4gICAgICAxNTgsXG4gICAgICAyNTEsXG4gICAgICA4MSxcbiAgICAgIDE0NSxcbiAgICAgIDg0LFxuICAgICAgMTIyLFxuICAgICAgMTU1LFxuICAgICAgNjQsXG4gICAgICAxNTIsXG4gICAgICAyMixcbiAgICAgIDM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkM2WlJXQzhEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTA5OTY2MjQ3OjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ29sdGFyLjA3XCIsXG4gICAgXCJsaWRcIjogXCIxMzM0NzA0ODc2MTM1NDU6NjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTNJMTVzQ0VNWGJvN2tHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnSFFOeGk5cy9aWUFERWh0R3pEWTZHRWxCdFlNZ0lYcUNadExRTWNhcWpzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjdWMDc4YTUzb01RbkdCYzgwVGtKb2xucXh2Q2xLRFJWUXE0NzJ0MnVxbHcrWThDNlIwbDZzOEZ4ZFVLblYxajhwdnJvTk04c0dQZXB2bVZENFphaEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlovWlpLbmhFbldPS2s4SHhoV2pVcWxBL0N6dWlqajh0OHdRZFprQ3dMYTNCN3R2L1ZtSi8xRUlEbStHN2l0azNkOGpLaWVKcDZUUWsvN2FmTkRxYUJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDk5NjYyNDc6NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDczNTU2MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNvVlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ29WLmpzb24iOiAie1wia2V5RGF0YVwiOlwiS3NXQ2dRV2Ewa0Q0MTN6Y2FMOTBGQ2tRQm5GOEo0KzJyejY0a0xpbzJ0Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1OTQ5Mjg2NTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDczNTU2NzI5OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "COLTAR07",
  packname: process.env.PACK_NAME || "COLTAR",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "COLTAR_07",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_d1c762631a583437b5ba64c3c550eb1baac21d3232794a9a";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
