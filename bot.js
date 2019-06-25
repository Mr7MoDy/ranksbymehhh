const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "£" // تقدر تغيره
    const blow = new Set()
    client.on('message', message => {
  var price = '£'
  var rank = '£'
  var sender = '£'
             let fouroulou = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`Our plans :
                                       ** -Good S **    
                                       ** -Price:20k Probot **
                                       ** -To Buy: \`£Good \` **
 
                                        ** -Perfect S **    
                                        ** -Price:40k Probot **
                                        ** -To Buy:\`£Perfect\` **
 
                                       ** -Exellent S **    
                                       ** -Price:60k Probot **
                                       ** -To Buy: \`£Exellent\` **
 
                                       ** -Great S **        
                                       ** -Price:80k Probot **
                                       ** -To Buy: \`£Great\` **
                                       
                                       ** -Epic S **        
                                       ** -Price:100k Probot **
                                       ** -To Buy: \`£Epic\` **
                                     
 
 
        For more information go to <#576447682030338058>`)  
      .setTimestamp()
    let filter = m => m.author.id === message.author.id;
   if(message.content.startsWith(".buy")){
       let user = client.users.get("591407427656613931"); // ايديك
      let user1 = client.users.get("591590366428397572"); // اي دي بروبوت
     //ههقهقهقه
    // جيبلي كود فيه تحقق yes or no
 
     if (blow.has(message.author.id)) {
     return message.reply("**لايمكنك اعادة الامر مجددا ان لم تنهي عملية الشراء لانهائها قم بكتابة cancel**").then(message => {
      message.delete(10000)
     })
     }
     blow.add(message.author.id);
    setTimeout(() => {
        blow.delete(message.author.id);
   }, 60000);// خلك كفو زيي ترا دا مرا ايزي ._.
 
     message.channel.sendEmbed(fouroulou).then(msg => {
      message.channel.awaitMessages(response => response.content === 'HightnessSeller' || 'NormalSeller' || 'BestSeller' || 'PerfectSeller' && filter,{
        max: 1,
        time: 90000,
        errors: ['time']
      })
      .then(collected => {
        if(collected.first().content === '£Good') {
          rank = 'Good S'
          price = 20000
              let price2 = price - ( (price * 5) / 100 )
 
                    let mrx = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`**If you want to buy rank :**
                 ** Please transfer the amount below :**
                 \`20k-probot\`
                ** To:<@591407427656613931>**
                 **Ex: #credit <@591407427656613931> 20000**
                  **To Exit Write Cancel**`)  
      .setTimestamp()
     
                    message.channel.sendEmbed(mrx).then(m => {
                  message.channel.awaitMessages(res => res.content.includes(message.author.username + ', has transferred \`$20000\` to ' + user) && res.author.id === user1.id, {
          max: 1, //**💰 | ${message.author.username}, has transferred \`$1\` to ${user}**
          time: 60000,
          errors: ['time'],
         
        }).then(collected => {
            message.reply('**Thanks for trusting us and wish you the best times :heart:**')
            message.member.addRole(message.guild.roles.find(c => c.name == 'Good S'));
            blow.delete(message.author.id);
            }).catch(() => {
                m.edit(`You took to long time please do the command \`£buy\` again`)
            })
           
            })
          message.delete();
        }
        if(collected.first().content === '£') {
           let mrx = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`**If you want to buy rank :**
                 ** Please transfer the amount below :**
                 \`20k-probot\`
                ** To:<@591407427656613931>**
                 **Ex: #credit <@591407427656613931> 20000**
                  **To Exit Write Cancel**`)  
      .setTimestamp()
                    message.channel.sendEmbed(mrx).then(m => {
                  message.channel.awaitMessages(res => res.content.includes(message.author.username + ', has transferred \`$66500\` to ' + user) && res.author.id === user1.id, {
          max: 1, //**💰 | ${message.author.username}, has transferred \`$1\` to ${user}**
          time: 60000,
          errors: ['time'],
         
        }).then(collected => {
            message.reply('**Thanks for trusting us and wish you the best times :heart:**')
            message.member.addRole(message.guild.roles.find(c => c.name == 'Perfect S'));
            blow.delete(message.author.id);
            }).catch(() => {
                m.edit(`**You took to long time please do the command £buy\` again**`)
            })
           
            })
          collected.first().delete();
}
                if(collected.first().content === '£Perfect') {
          rank = 'Perfect S'
          price = 40000
          let mrx = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`**If you want to buy rank :**
                 ** Please transfer the amount below :**
                 \`40k-probot\`
                ** To:<@591407427656613931>**
                 **Ex: #credit <@591407427656613931> 40000**
                  **To Exit Write Cancel**`)  
      .setTimestamp()
                message.channel.sendEmbed(mrx).then(m => {
                  message.channel.awaitMessages(res => res.content.includes(message.author.username + ', has transferred \`$85500\` to ' + user) && res.author.id === user1.id, {
          max: 1, //**💰 | ${message.author.username}, has transferred \`$1\` to ${user}**
          time: 60000,
          errors: ['time'],
         
        }).then(collected => {
            message.reply('**Thanks for trusting us and wish you the best times :heart:**')
            message.member.addRole(message.guild.roles.find(c => c.name == 'Great S'));
            blow.delete(message.author.id);
            }).catch(() => {
                m.edit(`You took to long time please do the command \`£buy\` again`)
            })
           
            })
          collected.first().delete();
}
                if(collected.first().content === '£Exellent') {
          rank = 'Exellent S'
          price = 60000
          let mrx = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`**If you want to buy rank :**
                 ** Please transfer the amount below :**
                 \`60k-probot\`
                ** To:<@591407427656613931>**
                 **Ex: #credit <@591407427656613931> 60000**
                  **To Exit Write Cancel**`)  
      .setTimestamp()
                message.channel.sendEmbed(mrx).then(m => {
                  message.channel.awaitMessages(res => res.content.includes(message.author.username + ', has transferred \`$85500\` to ' + user) && res.author.id === user1.id, {
          max: 1, //**💰 | ${message.author.username}, has transferred \`$1\` to ${user}**
          time: 60000,
          errors: ['time'],
         
        }).then(collected => {
            message.reply('**Thanks for trusting us and wish you the best times :heart:**')
            message.member.addRole(message.guild.roles.find(c => c.name == 'Great S'));
            blow.delete(message.author.id);
            }).catch(() => {
                m.edit(`You took to long time please do the command \`£buy\` again`)
            })
           
            })
          collected.first().delete();
}
                if(collected.first().content === '£Great') {
          rank = 'Great S'
          price = 80000
          let mrx = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`**If you want to buy rank :**
                 ** Please transfer the amount below :**
                 \`80k-probot\`
                ** To:<@591407427656613931>**
                 **Ex: #credit <@591407427656613931> 80000**
                  **To Exit Write Cancel**`)  
      .setTimestamp()
                message.channel.sendEmbed(mrx).then(m => {
                  message.channel.awaitMessages(res => res.content.includes(message.author.username + ', has transferred \`$85500\` to ' + user) && res.author.id === user1.id, {
          max: 1, //**💰 | ${message.author.username}, has transferred \`$1\` to ${user}**
          time: 60000,
          errors: ['time'],
         
        }).then(collected => {
            message.reply('**Thanks for trusting us and wish you the best times :heart:**')
            message.member.addRole(message.guild.roles.find(c => c.name == 'Great S'));
            blow.delete(message.author.id);
            }).catch(() => {
                m.edit(`You took to long time please do the command \`£buy\` again`)
            })
           
            })
          collected.first().delete();
}
                if(collected.first().content === '£Epic') {
          rank = 'Epic S'
          price = 100000
          let mrx = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`**If you want to buy rank :**
                 ** Please transfer the amount below :**
                 \`60k-probot\`
                ** To:<@591407427656613931>**
                 **Ex: #credit <@591407427656613931> 100000**
                  **To Exit Write Cancel**`)  
      .setTimestamp()
                    message.channel.sendEmbed(mrx).then(m => {
                  message.channel.awaitMessages(res => res.content.includes(message.author.username + ', has transferred \`$47500\` to ' + user) && res.author.id === user1.id, {
          max: 1, //**💰 | ${message.author.username}, has transferred \`$1\` to ${user}**
          time: 60000,
          errors: ['time'],
         
        }).then(collected => {
            message.reply('**Thanks for trusting us and wish you the best times :heart:**')
            message.member.addRole(message.guild.roles.find(c => c.name == 'Exelent S'));
            blow.delete(message.author.id);
            }).catch(() => {
                m.edit(`You took to long time please do the command \`£buy\` again`)
            })
           
            })
          collected.first().delete();
}})
 
 
       })    
       
}});
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
const developers = ["591407427656613931","id"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith(prefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else
     if (message.content === (prefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(prefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(prefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(prefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(prefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
 
 
 
 
 
 
 
 
 
// شفت كلو ايزي بس انت ما تشغل الدماغ
 
 
 
 
client.on('message', message => {
 if(message.content.startsWith("cancel")){
 if(blow.has(message.author.id)) {
   blow.delete(message.author.id)
   message.channel.send('**Buying Has Been Cancled**')
 }}});
client.login(process.env.TOKEN)
