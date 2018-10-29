const Discord = require('discord.js');
const Client = new Discord.Client();

Client.on('ready', () => {
  console.log(` ${Client.user.tag}Sunucuya girdi!`);
});

Client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam,Hoşgeldin!');
  }
  if (msg.content.toLowerCase() === 'instagram') {
        msg.reply('infinitydiamond6!');
  }
  if (msg.content.toLowerCase() === 'dostlar') {
    msg.channel.sendMessage('TurgayEmirAtalay,BedirhanKuyucu, MertGencer,Aleyna Dayi,Amed Sağın');
  }
  if (msg.content.toLowerCase() === 'prenses') {
    msg.reply('Prenses tabikide :Aleyna Dayi.Bunu Bilmeyen var mi ?');
  }
});

Client.login('NTA2MTcwMjg0OTc0Mjc2NjE4.DrePbg.H1sDK-tVLtF7SAnJr_EKN4zl-Zo');
