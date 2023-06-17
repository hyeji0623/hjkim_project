$(document).ready(function(){
  //mobile---------------------------------------------
  $(".m_search_icon").on('click',function(){$(".search_wrap").toggle();});
  //모바일 호버
  var hb=$(".hb"),
      m_menu=$(".m_header_menu"),
      m_meun_ul=m_menu.find(".m_header_menu_ul"),
      m_meun_li=m_meun_ul.find(".m_header_menu_li"),
      m_meun_hover=m_meun_li.find(".menu_hover"),
      m_li_a=m_meun_li.find(".li_a"),
      m_arrow=m_meun_li.find("span"),
      close=m_menu.find(".close");

  m_meun_li.eq(0).find(m_meun_hover).css('display','block');
  m_meun_li.eq(0).find(m_li_a).css({'font-family': '나눔고딕_bold','color':'#121111'});
  m_meun_li.eq(0).find(m_arrow).css('display','block');

  hb.on("click",function(){
    $(m_menu).addClass("on");$(".m_hover_back").css('display','block');
  });
  close.on("click",function(){
    $(m_menu).removeClass("on");$(".m_hover_back").css('display','none');
  });
  m_meun_li.click(function(){
    m_arrow.hide();m_meun_hover.hide();
    m_li_a.css({'color':'#fbf9f6','font-family': '나눔고딕'});
    $(this).find(m_li_a).css({'font-family': '나눔고딕_bold','color':'#121111'});
    $(this).find(m_arrow).css('display','block');
    $(this).find(m_meun_hover).css('display','block');
  });
  //pc_list 호버----------------------------------------
  $(".header_menu_li").mouseover(function(){$(this).find(".menu_hover").stop().slideDown(100);});
  $(".header_menu_li").mouseleave(function(){$(this).find(".menu_hover").stop().slideUp(100);});

  window.onload=function() {
    //화장품 이동이미지 높이값
    var iiimmm = $(".iimmm").height();
    $(".move_ani").css({height: iiimmm});
  };

  //메인 슬라이드 ---------------------------------------
  var slide_box=$(".main_slide_box"),
      main_slide=slide_box.find(".main_slide"),
      slide_ul=slide_box.find(".slide_ul"),
      slide_li=slide_ul.find(".slide_li"),
      slide_btn=slide_box.find(".bt_wrap"),
      slide_count=slide_box.find(".slide_count"),
      slideCount=slide_li.length,
      slide_width = main_slide.width();
  var resize_slide_width = slide_box.width(),
      resize_slide_img_height = $(".slide_li img").height();
  var currentIndex=0;
  var aaa=false;
  var timer="";

  slide_content_width();
  updateNav();
  startTimer();

  $(window).resize(function() {
    slide_content_width();
    iiimmm = $(".iimmm").height();
    $(".move_ani").css({height: iiimmm});
  });

  // 리사이즈될때 크기 변경
  function slide_content_width() {
    resize_slide_width = slide_box.width();
    resize_slide_img_height = slide_li.find("img").height();
    slide_li.css({"width":resize_slide_width});
    slide_ul.css({
    "width":resize_slide_width*slideCount,
    "left":-resize_slide_width*currentIndex+"px"
    });
    slide_ul.css({"left":-resize_slide_width});
  }

  $(".bt_l").click(function(){animate("back");});
  $(".bt_r").click(function(){animate("next");});

  function animate(ani){
    if(ani == "next" && aaa==false){
      aaa=true;
      slide_ul.stop().animate({
        left:-resize_slide_width*2
      },{complete: function(){
        slide_ul.append(slide_ul.children()[0]);
        slide_ul.css({"left":-resize_slide_width});//원상복귀
        var nextIndex=(currentIndex+1)%slideCount;
        currentIndex=nextIndex;
        updateNav();
        aaa=false;
      }});
    }else if (ani == "back" && aaa==false ){
      aaa=true;
      slide_ul.stop().animate({
        left:0
      },{complete: function(){
        slide_ul.prepend(slide_ul.children()[slideCount-1]);
        //length의 children을 셀때는 1부터 세기 때문에 -1 --> append,prepend에서는 children을 0부터 센다.
        slide_ul.css({"left":-resize_slide_width});
        var preIndex=(currentIndex+(slideCount-1))%slideCount;
        currentIndex=preIndex;
        updateNav();
        aaa=false;
      }});
    }
  }
  function updateNav(){
    var countCurrent=$(".slide_count").find(".currentIndex"),
    countTotal=$(".slide_count").find(".slideCount");
    countCurrent.text(currentIndex+1);
  }
  // 시간 타이며
  slide_box.on({
    mouseenter:stopTimer,
    mouseleave:startTimer
  });
  function startTimer(){
      timer= setInterval(function(){
        animate("next");
      },3500);
    }
  function stopTimer(){clearInterval(timer);}
  // best 아이템 슬라이드----------------------------------------------
  var width_window= window.innerWidth;
  var best_item_box=$(".best_item"),
      best_ul=best_item_box.find("ul"),
      best_li=best_ul.find("li");
  var best=false;
  var show_num=5;
  var num_li=0;
  var num_li_m=0;
  var st;
  var bbb=false;
  var slide_copy=$(".best_item > ul > li:lt("+show_num+")").clone();
  //show_num(10)보다 작은 인덱스를 가진 객체(=lt선택자)를 모두 선택해서 복사(0부터 시작)
  best_ul.append(slide_copy);
  //맨 뒤로 보낸다
  //화장품 애니메이션
  ani_scroll();

  $(window).resize(function() {
    width_window=window.innerWidth;
    if(width_window>=640){
      if(num_li_m>0){best_ul.css("left",0);num_li=0;num_li_m=0;}
    }else{
      if(num_li>0){best_ul.css("left",0);num_li=0;num_li_m=0;}
    }
  });

  $(".bt_best_l").click(function(){
    if(width_window>=640){back_best();}
    if(width_window<640){back_best_m();}
  });
  $(".bt_best_R").click(function(){
    if(width_window>=640){next_best();}
    if(width_window<640){next_best_m();}
  });

  function back_best(){
    if(best==false){
      best=true;
      if (num_li==0) {
        num_li=2;best_ul.css("left",-96*num_li+"%");
      }
      num_li--;
      best_ul.stop().animate({"left":-96*num_li+"%"},{complete: function(){
        best=false;
      }},600);
    }
  }
  function next_best(){
    if(best==false){
      best=true;
      if (num_li==2) {
        num_li=0;best_ul.css("left",num_li);
      }
      num_li++;
      best_ul.stop().animate({"left":-96*num_li+"%"},{complete: function(){
        best=false;
      }},600 );
    }
  }

  function back_best_m(){
    if(best==false){
      best=true;
      if (num_li_m==0) {
        num_li_m=5;
        best_ul.css("left",-96*num_li_m+"%");
      }
      num_li_m--;
      best_ul.animate({"left":-96*num_li_m+"%"},{complete: function(){
        best=false;
      }},600 );
    }
  }
  function next_best_m(){
    if(best==false){
      best=true;
      if (num_li_m==5) { num_li_m=0;best_ul.css("left",num_li_m);}
      num_li_m++;
      best_ul.animate({"left":-96*num_li_m+"%"},{complete: function(){
        best=false;
      }},600 );
    }
  }
  //화장품 애니메이션-----------------------------------------
  function ani_scroll(){
    $(document).scroll(function(){
      st = $(this).scrollTop();
      var position=$(".best_item_wrap").offset();
      if(width_window>=640){
        if(st>=position.top*1.4 && bbb==false){ani_css();}
      }else{
        if(st>=position.top*2 && bbb==false){ani_css();}
      }
    });
  }
  function ani_css(){
    bbb=true;
    $(".mens_cosme").stop().animate({"left":"0%"},500 );$(".skincare").stop().animate({"right":"0%"},500 );
    $(".mens_cosme").css("opacity","1");$(".skincare").css("opacity","1");
  }
});
