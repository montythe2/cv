const express = require('express');
const app = express();

app.listen(() => console.log('ready'));

app.use('/ping', (req, res) => {
    res.send(new Date());
});

const Discord = require("discord.js");
const moment = require('moment')
const client = new Discord.Client();
const prefix = "."; // بادئة البوت
// كود تقديم ادارة
client.on("message", message => { 
  if(message.content.startsWith(prefix+"cv")) {// كلمة بدء التقديم
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = message.guild.channels.cache.find(ch => ch.id === '944514097234444329')// اي دي روم التقديم
            if(!channel) return message.reply("**لانشاء روم التقديمات !!setsubmissions من فضلك اكتب الامر**")
            if(channel) {
              message.channel.send(message.author.username + '`1`').then((m)=>{
            m.edit(message.channel.send + ', ناو').then( (m) =>{
             m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();

                  m.edit(message.author.username + '`2`').then( (m) =>{
                      m.edit( message.author.username + ',ته‌مه‌ن ' )
                      setTimeout(() => {
                        m.delete()
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.author.username + '`3`').then( (m) =>{
                            m.edit( message.author.username + ' ؟ ‎ماوەی چەندە لە دیسکۆردی' )
                            setTimeout(() => {
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.author.username + '`4`').then( (m) =>{
                                  m.edit( message.author.username + ', ‎چه‌نده‌؟  (kd) ئاستی یاری كردنت چۆنه‌ یان' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send(  message.author.username + '``5``').then( (m) =>{
                                        m.edit( message.author.username + ',؟ ‎ڕۆژانە دەتوانی بۆماوەی چەند ئەکتیڤ بی:' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit( message.author.username + ', ‎سیڤیەکەت نێردرا بەڕێزم:').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.MessageEmbed()
                          .setAuthor(message.author.username, message.author.avatarURL) 
                          .setColor('GOLD')
                        .setTitle(`\`سیڤی بوون به‌ پلایه‌ر\` \n  🙏‎تكه‌یه‌ چاوەڕێی ڕۆڵ بە دەستێک بە تا وەڵام دەدرێیتەوە
‌ا‌  , \n > ID: ${message.author.id}`)
                        .addField('> \`ناو:\`', ` ** ${name} ** ` , true)
                        .addField('> \`ته‌مه‌ن:\`', ` ** ${age} ** ` , true)
                        .addField('> \`؟‎ماوەی چەندە لە دیسکۆردی:\`',`** ${ask} ** ` , true)
                        .addField('> \` ‎چه‌نده‌؟  (kd) ئاستی یاری كردنت چۆنه‌ یان :\` ',` ** ${ask2} ** ` , true)
                        .addField('> \`‎ڕۆژانە دەتوانی بۆماوەی چەند ئەکتیڤ بی؟\`',` ** ${ask3} ** ` , true)
                        .addField('> __ ‎سیڤیەکەت نێردرا بەڕێزم: __',` \`${message.author.createdAt} \` ` , true)
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);

                 })
                })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })
    }
}
        });
        client.on('message',async message => {
          let mention = message.mentions.members.first();
          if(message.content.startsWith(prefix+"yas")) {// امر القبول
          if(!message.channel.guild) return;
          let acRoom = message.guild.channels.cache.find(ch => ch.id === '944514118583472158')// اي دي روم القبول
          if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
          if(!mention) return message.reply("الرجاء الإشارة");
         
          acRoom.send(`> أهلا بك تم قبولك ك إداري في الخادم \n ${mention} إداري مبتدئ - :partying_face: `)
          }
        });

client.on('message',async message => {
  let mention = message.mentions.members.first();
  if(message.content.startsWith(prefix+"no")) {// امر الرفض
  if(!message.channel.guild) return;
  let acRoom = message.guild.channels.cache.find(ch => ch.id === '944514118583472158')// اي دي روم الرفض
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
  if(!mention) return message.reply("الرجاء الإشارة");
 
  acRoom.send(`> نعتذر منك لايمكننا قبولك في الوقت الحالي \n ${mention} - :pleading_face: `)
  }
});


client.login("ODY1Mzg1MzA0MzYwODc4MDkx.YPDO3g.L7tq3EFtc3BvxQPph61HMHZ8AhQ")
// حقوق احمد / Ahmed
