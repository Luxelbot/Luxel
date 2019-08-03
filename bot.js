const puppeteer = require('puppeteer'); //Salimcan Satıcı 
const fs = require('fs');
var Jimp = require('jimp'); //

const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36';
(async () => {

//Yurtdışında birinde görmüş olduğum programı Nodejs + Puppeteer chrome kullanarak yazdım. 
//Piyasada ilklerdendir

var sayilar = ["./dakikalar/luxel1.png",
"./dakikalar/luxel2.png",];


    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: {
        width: 1024,
        height: 768,
  
      },
    });
    const page = await browser.newPage();
    console.log("Browser açılıyor");
  await page.setUserAgent(USER_AGENT);
  console.log("Useragent tanımlandı");
  await page.goto('https://www.instagram.com/accounts/edit/');
  console.log("Instagram edit yönlendirme sağlandı");
  await page.waitForSelector('input[name="username"]'); 
  console.log("Girilecek text alanının yüklenmesini bekliyorum");


  await page.type('input[name="username"]', 'luxellll'); //'KULLANICI_ADINIZ '  KULLANICI_ADINIZ yazan kısma yani tırnakları silmeden tırnakların içerisine kullanıcı adınızı yazınız
  console.log("Kullanıcı adı textbox'ına kullanıcı adınız yazılıyor");
  await page.type('input[name="password"]', 'berkeberkeberke2'); // Aynı şekilde SIFRENIZ kısmına da o şekilde boşluk bırakmayın
  console.log("Şifreniz textbox'ına şifreniz yazılıyor. Programda kesinlikle bir veri gönderimi gibi bir durum yok aksi durumda kodları inceleyin inceletiniz. Sorumluluk size aittir.");

  await page.click('button[type="submit"]');
  console.log("Giriş yap butonuna tıkladım.")
  blockingWait(4);
  await page.close(); //Navigation hatasını handle etmek biraz sıkıntılı ve kullandığımız modülde hata vermemesi için bir nebze page variable transfer yapıldı
  const sekme2 = await browser.newPage();
  await sekme2.setUserAgent(USER_AGENT);
  await sekme2.goto('https://www.instagram.com/accounts/edit/');
  const pageTitle = await sekme2.title();
  console.log(pageTitle)


  // for (let index = 0; index < 9999; index++) { //index = 0; kısmı kaçıncı dakikadan başlayacağını belirler v1
    
blockingWait(2); 

const inputElement = await sekme2.$('#react-root > section > main > div > article > div > div.XX1Wc > div > form > input[type="file"]'); 

    setInterval(function(){ 

      let date = new Date();
      let simdikiDakika = date.getMinutes();
      let simdikiSaat = date.getHours();
      simdikisaat = simdikiSaat+1;
      //Tarih'i çektik ***************************
let kacinciGun = date.getDate();
let kacinciayTemp= date.getMonth();
let kacinciAy = kacinciayTemp+1;
let kacinciYil = date.getFullYear();
//******************************* */

var filePath = './dakikalar/'+simdikiDakika+'.png'; 
  fs.unlinkSync(filePath); 
  console.log(filePath+" SİLİNDİ");

 //http://lorempixel.com/320/320/ random fotoğraf çekmek için eklendi dilerseniz beyaz arkaplan bir resmin yolunu verip beyaz arkaplana da yazdırabilirsiniz.
Jimp.read("http://lorempixel.com/320/320/").then(function (delimg) { 
  
Jimp.loadFont(Jimp.FONT_SANS_64_BLACK).then(function (font) { 
  delimg.blur( 20 );
  delimg.resize(320, 320) 
delimg.HORIZONTAL_ALIGN_CENTER; 
                //80 Sağa / //20 Yukarı
                // 15 sağa / // 80 yukarı
  delimg.print(font, 80, 20, simdikiSaat+":"+simdikiDakika,80) 
  delimg.print(font, 15, 80, kacinciGun+"/"+kacinciAy+"/"+kacinciYil,40) 
  delimg.write('./dakikalar/'+simdikiDakika+'.png');

  console.log(simdikiDakika+'.png'+" Yazıldı");


  inputElement.uploadFile('./dakikalar/'+simdikiDakika+'.png');
  console.log(simdikiDakika+'.png upload edildi.');




});

});    



console.log("İşlem Başarılı");
},60000); //60 SANİYEDE BİR TEKRAR
    
    console.log("Bağlandı");
     
  
  }

)();


function blockingWait(seconds) {
  //basit bloklama beklemesi
  var waitTill = new Date(new Date().getTime() + seconds * 1000);
  while (waitTill > new Date()) { }
}
