
$(function(){
    $(window).scroll(function() {
     if($(this).scrollTop() > 50){
      $('.header').stop().animate({top:"-200px"});
      $('.list').stop().animate({top:"-200px"});
      $('.logoline').stop().animate({top:"-200px"});
     }
     else{
      $('.header').stop().animate({top:"0px"});
      $('.list').stop().animate({top:"0px"});
      $('.logoline').stop().animate({top:"0.5px"});
     }
    }).scroll();
   });
   $(document).ready(function(){
    $('.itemslick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
  });
  $(document).ready(function(){
    $('#nav-icon1').click(function(){
      $(this).toggleClass('open');
      document.getElementsByClassName('.hamlist').style.display='block';
    });
  });
  var firebaseConfig = {
    apiKey: "AIzaSyCNGaOOLqRce39-8gdQTcifKj3VepmW6Qg",
    authDomain: "final-12e95.firebaseapp.com",
    databaseURL: "https://final-12e95.firebaseio.com",
    projectId: "final-12e95",
    storageBucket: "final-12e95.appspot.com",
    messagingSenderId: "408463186181",
    appId: "1:408463186181:web:fb9cbdaead68f8fe70bf6c",
    measurementId: "G-QCLFPG51D7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.initializeApp(config);

var db = firebase.firestore();

function storedata() {
  db.collection("movies").doc("新世紀福爾摩斯").set({
    name: "新世紀福爾摩斯",
    date: "2010",
    desctiption: "本劇改編自阿瑟·柯南·道爾爵士家喻戶曉的推理小說，一位脾氣古怪的大偵探在現代倫敦的街頭悄悄巡行，四處搜尋線索。",
    actors: ["班尼迪克·康柏拜區", "馬丁·費曼"]
  });
}

function getdata() {
  var docRef = db.collection("movies").doc("新世紀福爾摩斯");
  docRef.get().then(function(doc) {
      if (doc.exists) {
        console.log(doc.data());
      } else {
        console.log("找不到文件");
      }
    })
    .catch(function(error) {
      console.log("提取文件時出錯:", error);
    });
}
$(document).ready(function () {

  // Load JSON file
  let openingAnimWindow = document.querySelector('#openingLottie');
  let openingAnimData = {
    container: openingAnimWindow,
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    // path: 'json/download-icon.json'
    path: 'https://assets7.lottiefiles.com/packages/lf20_A9xmVE.json'
  };
  // set bodymovin
  let openingAnim = bodymovin.loadAnimation(openingAnimData);



});