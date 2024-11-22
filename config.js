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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_39_11_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzksXG4gICAgICAgIDExMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA3LFxuICAgICAgICAzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY0LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNixcbiAgICAgICAgMjI3LFxuICAgICAgICA2MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NyxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA0MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYwLFxuICAgICAgICA0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICA4MyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjU0LFxuICAgICAgICA0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDczLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQyLFxuICAgICAgICA4MixcbiAgICAgICAgNjgsXG4gICAgICAgIDI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMixcbiAgICAgICAgMjM2LFxuICAgICAgICA0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI2LFxuICAgICAgICA5NixcbiAgICAgICAgMjU1LFxuICAgICAgICA5MixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MixcbiAgICAgICAgMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NyxcbiAgICAgICAgODcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDYwLFxuICAgICAgICAzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MixcbiAgICAgICAgMTk3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDQwLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3OSxcbiAgICAgICAgODYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjksXG4gICAgICAgIDkwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MixcbiAgICAgICAgMTcwLFxuICAgICAgICA4MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MixcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4ZWt6eHFWWlJSZmF1NzN4SFVrWktPR2dzSTFlcjIyemp0eXdtMUdQNys0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKYXI5X2ZCZVN0U3FiTHJNNEZ4V1hRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjljYzM3MjdhLWUzNWEtNDY5MS05MzUyLTE1N2YwNjU0NjBhNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTcsXG4gICAgICAyMzQsXG4gICAgICAyMixcbiAgICAgIDIwMixcbiAgICAgIDgzLFxuICAgICAgMjUwLFxuICAgICAgMTEwLFxuICAgICAgNzMsXG4gICAgICA0NCxcbiAgICAgIDY2LFxuICAgICAgMjQzLFxuICAgICAgMjE0LFxuICAgICAgMjMsXG4gICAgICAzOCxcbiAgICAgIDI1MyxcbiAgICAgIDEwOSxcbiAgICAgIDU5LFxuICAgICAgNTksXG4gICAgICA3NSxcbiAgICAgIDIxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTUsXG4gICAgICAyMzcsXG4gICAgICA2NyxcbiAgICAgIDE4MixcbiAgICAgIDE5OSxcbiAgICAgIDQ4LFxuICAgICAgOCxcbiAgICAgIDE4LFxuICAgICAgNjQsXG4gICAgICAxMzksXG4gICAgICAxOTYsXG4gICAgICA1LFxuICAgICAgMTY0LFxuICAgICAgNzAsXG4gICAgICAxODgsXG4gICAgICAxOTAsXG4gICAgICAyMDEsXG4gICAgICAxMTUsXG4gICAgICA1MixcbiAgICAgIDEzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCRzNZNTVDNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwOTk2NjI0Nzo2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcInNoaW5hZmF5ZWh1blwiLFxuICAgIFwibGlkXCI6IFwiMTMzNDcwNDg3NjEzNTQ1OjY0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0k3Yzh1a0hFUGE3ZzdvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTkdjeG1TdGMzWUZEMGhHSTBIeWlRdDIySS9tTkpCaEUrL2orTnFZMGhrTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWRTlUMWdtN2JSelFIbGhWOXdaenZmdHk1bXJRN2FXUVRZcnJNeStGZWVuY2U1S3BOb0ZHMUdrcVpGWmJ4VEVPc0VkTUlNdVlZd0NzYmFscmMzeUJCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSdGtZMGhocWc2VHFqVXFYR2xodXhRNzRJaGNuUC9neWNzTmU2eWsxQTNxUzkzZ0Y1ckpBR0lLMDUramNFUndQVE9pdG45cnBHUlg5cHBEdUJXckZqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTA5OTY2MjQ3OjY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjMwNDM3OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
