
$(document).ready(function(){
  var header_move=false;
  var aaa=false;
  var st_count=0;
  var header=$("header"),
      ham=header.find(".ham"),
      ham_span=ham.find("span"),
      main_ul=header.find(".main_ul"),
      m_close=main_ul.find(".m_close"),
      main_li=main_ul.find(".main_li"),
      main_li_a=main_li.find("a");
  var width_window=window.innerWidth;
  var wheel_data;
  var wheel_Event=true;
  var about=$(".about"),
      rigth_about=about.find(".rigth_about"),
      bt_more=rigth_about.find(".bt_more"),
      on_skill=rigth_about.find(".on_skill"),
      more_about_wrap=rigth_about.find(".more_about_wrap"),
      close_more=more_about_wrap.find(".close_more");
  var top_back=$(".top_back");
  var portfolio=$(".portfolio"),
      pf_sub_box=$(".pf_sub_box");
  var home_height = $(".home").height();
  var st;
  var position;

  BT_page_move();
  $(".home").addClass("start");
  $(".text_home").addClass("on");
  m_close.hide();
  $(".logo").click(function(){st_count=0;});
  back_portfolio_text();

  if(width_window < 900){aaa=true;}
  //창크기변화-------------------
  $(window).resize(function() {
    width_window=window.innerWidth;
    home_height = $(".home").height();
    back_portfolio_text();
    // header_scroll();
    if(width_window < 900 && aaa==false){aaa=true;st_count=0;BT_page_move();}
    if(width_window >= 900 && aaa==true){aaa=false;st_count=0;BT_page_move();}
  });
  //스크롤----------------------
  $(document).scroll(function(){
    st=$(this).scrollTop();
    // 스크롤 시 헤더 변화
    header_scroll();
    if(width_window < 900 ){BT_page_move_scroll();}
  });

  function header_scroll(){
    if (width_window >= 640) {
      if(st>100 && header_move==false){
        $('header').stop().animate({height:'70px'},300);
        header_change_before();header_move=true;
      }
      else if (st < 100) {
        $("header").stop().animate({height: '80px'},300);
        header_change_after();header_move = false;
      }
    }else if( width_window < 640 ){
        $("header").stop().animate({height: '60px'},200);
        if(st>100 && header_move==false){
          header_change_before();header_move=true;
        }
        else if (st < 100) {
          header_change_after();header_move = false;
        }
    }
  }

  function header_change_before(){$('header').css({"background-color":"#000000"});$('.logo a').css({"color":"#ffffff"});ham_span.addClass("on");}
  function header_change_after(){$('header').css({"background-color":"#ffffff"});$('.logo a').css({"color":"#384843"});ham_span.removeClass("on");}

  top_back.click(function(){st_count=0;BT_page_move();});
  // 햄버거 클릭
  ham.on("click",function(){header_addclass();});
  m_close.on("click",function(){header_removeclass();});
  // 메뉴리스트
  main_li.eq(0).click(function(){header_removeclass();st_count=0;BT_page_move();});
  main_li.eq(1).click(function(){header_removeclass();st_count=1;BT_page_move();});
  main_li.eq(2).click(function(){header_removeclass();st_count=2;BT_page_move();});
  main_li.eq(3).click(function(){header_removeclass();st_count=7;BT_page_move();});
  function header_addclass(){main_ul.addClass("on");main_li.addClass("on");m_close.fadeIn(1000);}
  function header_removeclass(){main_ul.removeClass("on");main_li.removeClass("on");m_close.fadeOut();}
  // about_more버튼 클릭-----------------------------------
  bt_more.click(function(){more_about_wrap.addClass("on");});
  close_more.click(function(){more_about_wrap.removeClass("on");});
  //마우스휠------------------------------------------------------
  window.addEventListener('mousewheel',function(c) {
    wheel_data= c.wheelDelta;
    if(width_window >= 900){
      if (wheel_data > 0) {
        c.preventDefault();
        if (st_count > 0 && wheel_Event == true) {
          wheel_Event = false;
          st_count --;BT_page_move();
          setTimeout(function(){
            wheel_Event = true;
          }, 500);
        }
      }else if (wheel_data < 0) {
        c.preventDefault();
        if (st_count < 7 && wheel_Event == true) {
          wheel_Event = false;
          st_count ++;BT_page_move();
          setTimeout(function(){
            wheel_Event = true;
          }, 500);
        }
      }
    }
  },{ passive: false });

  function BT_page_move(){
    if(st_count==0){
      position=$(".home").offset();
      $('html,body').stop().animate({scrollTop:position.top},400);
      top_back.hide();on_skill.removeClass("on");
    }else if (st_count==1) {
      position=$(".about").offset();
      $('html,body').stop().animate({scrollTop:position.top},400);
      top_back.show();on_skill.addClass("on");
      pf_sub_box.stop().animate({top:'40px',opacity: '0'});
    }else if (st_count==2) {
      position=$(".pf_01").offset();
      $('html,body').stop().animate({scrollTop:position.top},400);
      on_skill.removeClass("on");
      pf_sub_box.stop().animate({top:'40px',opacity: '0'});
      $(".pf_01").find(pf_sub_box).stop().animate({top:'0px',opacity: '1'},1000);
    }else if (st_count==3) {
      position=$(".pf_02").offset();
      $('html,body').stop().animate({scrollTop:position.top},400);
      pf_sub_box.stop().animate({top:'40px',opacity: '0'});
      $(".pf_02").find(pf_sub_box).stop().animate({top:'0px',opacity: '1'},1000);
    }else if (st_count==4) {
      position=$(".pf_03").offset();
      $('html,body').stop().animate({scrollTop:position.top},400);
      pf_sub_box.stop().animate({top:'40px',opacity: '0'});
      $(".pf_03").find(pf_sub_box).stop().animate({top:'0px',opacity: '1'},1000);
    }else if (st_count==5) {
      position=$(".pf_04").offset();
      $('html,body').stop().animate({scrollTop:position.top},400);
      pf_sub_box.stop().animate({top:'40px',opacity: '0'});
      $(".pf_04").find(pf_sub_box).stop().animate({top:'0px',opacity: '1'},1000);
    }else if (st_count==6) {
      position=$(".pf_05").offset();
      $('html,body').stop().animate({scrollTop:position.top},400);
      pf_sub_box.stop().animate({top:'40px',opacity: '0'});
      $(".pf_05").find(pf_sub_box).stop().animate({top:'0px',opacity: '1'},1000);
    }else if (st_count==7) {
      position=$(".contact").offset();
      $('html,body').stop().animate({scrollTop:position.top},400);
      pf_sub_box.stop().animate({top:'40px',opacity: '0'});
    }
  }
  function BT_page_move_scroll(){
    var scroll_height = home_height*0.9;
    if( st < 100 ){
      pf_sub_box.stop().animate({top:'30px',opacity: '0'});top_back.hide();on_skill.removeClass("on");
    }else if( st >= scroll_height && st < scroll_height*2){
      top_back.show();on_skill.addClass("on");
    }else if( st >= scroll_height*2 && st < scroll_height*3){
      $(".pf_01").find(pf_sub_box).stop().animate({top:'0px',opacity: '1'},500);
    }else if( st >= scroll_height*3 && st < scroll_height*4){
      $(".pf_02").find(pf_sub_box).stop().animate({top:'0px',opacity: '1'},500);
    }else if( st >= scroll_height*4 && st < scroll_height*5){
      $(".pf_03").find(pf_sub_box).stop().animate({top:'0px',opacity: '1'},500);
    }else if( st >= scroll_height*5 && st < scroll_height*6){
      $(".pf_04").find(pf_sub_box).stop().animate({top:'0px',opacity: '1'},500);
    }else if( st >= scroll_height*6 && st < scroll_height*7){
      $(".pf_05").find(pf_sub_box).stop().animate({top:'0px',opacity: '1'},500);
    }
  }
  function back_portfolio_text() {
    if(width_window < 640){
      $(".back_text_size").css({"font-size":"30px"});
    }else if(width_window < 900 && width_window >= 640){
      $(".back_text_size").css({"font-size":"60px"});
    }else if(width_window >= 900){
      $(".back_text_size").css({"font-size":"120px"});
    }
  }
});
