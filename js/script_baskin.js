$(document).ready(function(){
  //헤더 메뉴-------------------------------------------------------
  var header=$("header"),
      menu_box=header.find(".menu_box"),
      menu_list_box=menu_box.find(".menu_list_box"),
      menu_hover_box=menu_box.find(".menu_hover_box"),
      flavor_ice=menu_hover_box.find(".flavor_ice"),
      h_search_img=header.find(".h_search_img"),
      search_hover=header.find(".search_hover"),
      search_hover_back=header.find(".search_hover_back"),
      slide_down=false;

  menu_list_box.mouseenter(function(){
    if (slide_down==false) {
      menu_hover_box.stop().slideDown(300);
      flavor_ice.css('opacity','1');
    }
  });
  menu_box.mouseleave(function(){
    if (slide_down==false) {
      menu_hover_box.stop().slideUp(300);
      flavor_ice.css('opacity','0');
    }
  });
  //서치클릭
  h_search_img.click(function(){
    if (slide_down==false) {
      h_search_img.addClass("on");
      search_hover.css({'display':'block'});
      search_hover.animate({top:'182px',opacity: '1'},200);
      search_hover_back.addClass("on");
      slide_down=true;
    }else {
      h_search_img.removeClass("on");
      search_hover.css({top:'160px',opacity: '0.6'});
      search_hover.css({'display':'none'});
      search_hover_back.removeClass("on");
      slide_down=false;
    }
  });
  search_hover_back.click(function(){
    if(slide_down==true){
      h_search_img.removeClass("on");
      search_hover.css({top:'160px',opacity: '0.6'});
      search_hover.css({'display':'none'});
      search_hover_back.removeClass("on");
      slide_down=false;
    }
  });

 // 메인슬라이드-----------------------------------------------------
  var slide_wrap=$(".slide_wrap"),
      slide_box=slide_wrap.find(".slide_box"),
      slide_ul=slide_box.find(".slide_ul"),
      slide_li=slide_ul.find(".slide_li"),
      btn_slide=slide_box.find(".btn_slide"),
      dot_box=slide_box.find(".dot_box"),
      slide_count=slide_li.length,
      currentIndex=0,
      dot_count="";
  var timer="";

    slide_li.eq(currentIndex).css("display","block");
    slide_li.each(function(){
      dot_count +='<span class="dot"></span>';
    });
    dot_box.html(dot_count);
    //버튼 닷 생성
    updateNav();
    stratTimer();

  dot_box.on("click","span",function(){
    if( !$(this).hasClass("active")){
      slide_li.eq(currentIndex).fadeOut(500);
      gotoSlide($(this).index());
    }
  });

  btn_slide.on("click","a",function(e){
    e.preventDefault();
    if ($(this).hasClass("prev")){
      var prevIndex=(currentIndex-1)%slide_count;
      //% ==>나눈것의 나머지
      slide_li.eq(currentIndex).fadeOut(500);
      gotoSlide(prevIndex);
    }else{
      var nextIndex=(currentIndex+1)%slide_count;
      slide_li.eq(currentIndex).fadeOut(500);
      gotoSlide(nextIndex);
    }
  });

    function updateNav(){
      dot_box.find("span").removeClass("active").eq(currentIndex).addClass("active");
      // slide_box.find(".slide_li").removeClass("active").eq(currentIndex).addClass("active");
    }

    function gotoSlide(index){
      slide_li.eq(index).fadeIn(500);
      currentIndex=index;
      updateNav();
  }
    slide_wrap.on({
    mouseover:stopTimer,
    mouseleave:stratTimer
    });

    function stratTimer(){
      timer= setInterval(function(){
      var auto=(currentIndex+1)%slide_count;
      slide_li.eq(currentIndex).fadeOut(500);
      gotoSlide(auto);
      },3000);
    }
    function stopTimer(){
      clearInterval(timer);
    }

//store&delivery-----------------------------------------------------------
  var st="";
  $(".BR_store").addClass("on");
  $(".BR_order").addClass("on");
  $(document).scroll(function(){
      st = $(this).scrollTop();
      if(st>=2750){
        $(".BR_store").addClass("on");
        $(".BR_order").addClass("on");
      }
      else if(st<2750){
        $(".BR_store").removeClass("on");
        $(".BR_order").removeClass("on");
      }
    });
// family_site-------------------------------------------
  var family_site =$(".family_site"),
      button=family_site.find("button"),
      family_site_ul=family_site.find(".family_site_ul");

  button.click(function(){
    family_site_ul.toggle();
    button.toggleClass("on");
  });
});
