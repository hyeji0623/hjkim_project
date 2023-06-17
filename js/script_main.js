$(document).ready(function(){
 // 모바일 이미지 순서 번경
  y_c_coffee_insert();

  function y_c_coffee_insert(){
    var widowwidth = $("body").width();
    if (widowwidth < 623) {
      $(".insert3").insertBefore(".insert1")
    }else if (widowwidth > 622) {
      $(".insert3").insertAfter(".insert2")}
  }

  var y_slide_ul = document.getElementsByClassName('.y_slide_ul')[0];
  var y_banner_box_width = $(".y_banner_box").width();
  var y_slide_ul_li = document.querySelectorAll('.y_slide_ul_li');
  var y_slide_length = y_slide_ul_li.length;
  var slide_time_switch = true;
  var startNumber = 0;
  var y_slide_nav_size = document.querySelector('.y_slide_nav');

  //슬라이드 자동 이동
  var interval01 = setInterval(function(){
    if (startNumber < 2) {
      startNumber++;
      slide_move();
    }else if (startNumber == 2) {
      startNumber = 0;
      slide_move();
    }
  },4000);
  img_resizing();
  $(window).resize(function(){
    // $(".y_slide_ul").css({width:y_banner_box_width * y_slide_length});
    var sttt = $(".y_slide_ul").width();
    img_resizing();
    y_c_coffee_insert();
  });

  $('.next').click(function(){
    if (startNumber < 2 && slide_time_switch == true) {
      slide_time_switch = false;
      startNumber++;
      slide_move();
      clearInterval(interval01);
      interval01 = setInterval(function(){
       if (startNumber < 2) {
         startNumber++;
         slide_move();
       }else if (startNumber == 2) {
         startNumber = 0;
         slide_move();
       }

     },4000);
      setTimeout(function () {
        slide_time_switch = true;
      }, 500);
    }else if (startNumber == 2 && slide_time_switch == true) {
      slide_time_switch = false;
      startNumber = 0;
      slide_move();
      clearInterval(interval01);
      interval01 = setInterval(function(){
       if (startNumber < 2) {
         startNumber++;
         slide_move();
       }else if (startNumber == 2) {
         startNumber = 0;
         slide_move();
       }

     },4000);
      setTimeout(function () {
        slide_time_switch = true;
      }, 500);
    }
  });
  $('.prav').click(function(){
    if (startNumber > 0 && slide_time_switch == true) {
      slide_time_switch = false;
      startNumber--;
      slide_move();
      clearInterval(interval01);
      interval01 = setInterval(function(){
       if (startNumber < 2) {
         startNumber++;
         slide_move();
       }else if (startNumber == 2) {
         startNumber = 0;
         slide_move();
       }

     },4000);
      setTimeout(function () {
        slide_time_switch = true;
      }, 500);
    }else if (startNumber == 0 && slide_time_switch == true) {
      slide_time_switch = false;
      startNumber = 2;
      slide_move();
      clearInterval(interval01);
      interval01 = setInterval(function(){
       if (startNumber < 2) {
         startNumber++;
         slide_move();
       }else if (startNumber == 2) {
         startNumber = 0;
         slide_move();
       }

     },4000);
      setTimeout(function () {
        slide_time_switch = true;
      }, 500);
    }
  });

  $(".bt01").click(function(){
    if (slide_time_switch == true) {
      slide_time_switch = false;
      startNumber = 0;
      slide_move();
      clearInterval(interval01);
      interval01 = setInterval(function(){
       if (startNumber < 2) {
         startNumber++;
         slide_move();
       }else if (startNumber == 2) {
         startNumber = 0;
         slide_move();
       }

     },4000);
      setTimeout(function () {
        slide_time_switch = true;
      }, 500);
    }
  });
  $(".bt02").click(function(){
    if (slide_time_switch == true) {
      slide_time_switch = false;
      startNumber = 1;
      slide_move();
      clearInterval(interval01);
      interval01 = setInterval(function(){
       if (startNumber < 2) {
         startNumber++;
         slide_move();
       }else if (startNumber == 2) {
         startNumber = 0;
         slide_move();
       }

     },4000);
      setTimeout(function () {
        slide_time_switch = true;
      }, 500);
    }
  });
  $(".bt03").click(function(){
    if (slide_time_switch == true) {
      slide_time_switch = false;
      startNumber = 2;
      slide_move();
      clearInterval(interval01);
      interval01 = setInterval(function(){
       if (startNumber < 2) {
         startNumber++;
         slide_move();
       }else if (startNumber == 2) {
         startNumber = 0;
         slide_move();
       }

     },4000);
      setTimeout(function () {
        slide_time_switch = true;
      }, 500);
    }
  });
// pagination 색상 변환
var interval02 = setInterval(function(){
  pagination_color();
  var y_slide_nav_size = $(".y_slide_ul_li").width()
  $(".y_slide_nav").css({width:y_slide_nav_size})

},0);
  function pagination_color() {
    if (startNumber == 0) {
      bg_clear();
      $(".bt01").css({backgroundColor:"rgb(50, 50, 50)"});
    }
    if (startNumber == 1) {
      bg_clear();
      $(".bt02").css({backgroundColor:"rgb(50, 50, 50)"});
    }
    if (startNumber == 2) {
      bg_clear();
      $(".bt03").css({backgroundColor:"rgb(50, 50, 50)"});
    }

  }

  function bg_clear() {
  $(".bt01").css({backgroundColor:""});
  $(".bt02").css({backgroundColor:""});
  $(".bt03").css({backgroundColor:""});
  }
  function img_resizing(){
    $(".y_slide_ul_li").css({width:$(".y_banner_box").width()});
    $(".slide_img").css({left: "50%"});
    slide_move2();
  }
  function slide_move() {
    // $(".y_slide_ul").css({width:y_banner_box_width * y_slide_length});
    $(".y_slide_ul").stop().animate({left: "-" + ($(".y_banner_box").width()*startNumber)+"px"},500);
  }
  function slide_move2() {
    // $(".y_slide_ul").css({width:y_banner_box_width * y_slide_length});
    $(".y_slide_ul").stop().animate({left: "-" + ($(".y_banner_box").width()*startNumber)+"px"});
  }
});
