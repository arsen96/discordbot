const Discord = require("discord.js");

require('dotenv').config();
// import res from "./test"


const bot = new Discord.Client();

  bot.on('message', function (message) {
    const anekdotner = new Array(`Ապարացին ընկնում է փոսը և չի կարողանում դուրս գալ հետո ասում է.
    -Էս վերջին անգամն եմ փորձում ստացվեց ստացվեց, չստացվեց կգնամ տուն:`,
    `Ապրիլի 1-ին ապարանցուն «քֆուր» են տալիս, չի հավատում`,
    `Մայիսի 9–ը որոշ երկրներ տոնում են «կարևորը մասնակցությունն է, ոչ թե հաղթանակը» կարգախոսով։`,
    `Աբարանցիք իմանում են Ղարաբաղ կռիվա զանգում եմ ոստիկանություն`,
    `Երկու ապարանցի շախմատ էն խաղում, խեղճ թագավորը ինֆարկտ է ստանում`,
    `Abarantsin erekhayin beruma dprots vor mp3 kardal sovoratsnen.`,
    `Ապարանցիները գնում են բիլիարդ խաղալու, բայց քանի որ շատվոր են լինում, սեղանները կպցնում են իրար.`,
    `Ապարանցին գնում է վարսավիրանոց, հարցնում է թէ մազ կտրելն ի՞նչ արժի: Վարսավիրը պատասխանում է, - 1000 դրամ: Ապարանցին ասում է, - դէ ինձ 400 –ի կտրի`,
    `Ծանոթիս պլաստիկ օպերացիայի համար հինգ հազար դոլար պարտք տվեցի եւ հիմա չեմ կարողանում նրան գտնել... Չգիտեմ՝ ի՞նչ տեսք ունի, - շվարած ասում է մի ապարանցի`,
    `Ինչո՞ւ ես ուզում կնոջիցդ բաժանվել, - հարցնում են ապարանցուն։ - Շատ կեղտոտ կնիկ է`);

      if(message.content === "anekdot" || message.content === "անեկդոտ"){
        var item = anekdotner[Math.floor(Math.random() * anekdotner.length)];
        console.log("item",item);
        message.channel.send(item);
      }else if(message.content === "ari canotananq"){
        message.channel.send("Es qo imacacneric chem")
      }
  })

bot.login(process.env.TOKEN);
