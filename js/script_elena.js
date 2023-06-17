$(document).ready(function(){
    //헤더&텍스트 스크롤 이동---------------------------------------------------
    var header_move=false;
    var about_elena_height = $(".about_elena_wrap").height();
    var st;
    $(document).scroll(function(){
      st = $(this).scrollTop();
      if(st>100 && header_move==false){
        $('header').stop().animate({height:'100px'},500);
          $('.logo').css("transition-delay","0.1s");
          $('.logo').css("opacity","0");
          header_move=true;
      }
      else if (st < 100) {
          $("header").stop().animate({height: '178px'},500);
          $('.logo').css("transition-delay","0.5s");
          $('.logo').css("opacity","1");
          header_move = false;
        }
        //텍스트이동
        if(st>=about_elena_height*7.4){
          $(".about_elena").stop().animate({top:'50%',opacity: '1'},650);
        } else {
          $(".about_elena").stop().animate({top:'70%',opacity: '0'},650);
        }
    });
    //메인 슬라이드이미지-------------------------------------------------
    var slide_show=$(".slide_img_show");
    var slide_ul=slide_show.find("ul");
    var slide_li=slide_ul.find(".slide_img");
    var slideDot=slide_show.find(".m_dot");
    var dot1=slideDot.find("span");
    var count_img = slide_li.length;
    var dot="";
    var timer="";
    var m_currentIndex=0;
    var aaa=false;

    slide_li.each(function(i){
      $(this).css({left:100*i+"%"});
      dot +='<span class="dot1"></span>';
    });

    slideDot.html(dot);
    gotoSlide(m_currentIndex);
    startTimer();

    function gotoSlide(index){
      if (aaa==false) {
        aaa=true;
        slide_ul.stop().animate({left:-100*index+'%'},750,function(){
              aaa=false;
              m_currentIndex=index;
              undateNav();
            });
      }
    }

    $(".bt_back").click(function(){
      var m_preIndex = (m_currentIndex+(count_img-1))% count_img;
      gotoSlide(m_preIndex);
    });
    $(".bt_next").click(function(){
      var m_nextIndex = (m_currentIndex +1)% count_img;
      gotoSlide(m_nextIndex);
    });
    //버튼, 이미지 활성화
    function undateNav(){slideDot.find("span").removeClass("active").eq(m_currentIndex).addClass("active");}
    //닷메뉴 클릭하면 이동하기
    slideDot.on("click","span",function(){
      if(!$(this).hasClass("active")){
        gotoSlide($(this).index());
      }
    });
    //마우스오버하면 타이머 멈추기
    $(".main_slide").on({
      mouseenter:stopTimer,
      mouseleave:startTimer
    });
    function startTimer(){
      timer= setInterval(function(){
        var auto=(m_currentIndex+1)%count_img;
        gotoSlide(auto);
      },3500);
    }
    function stopTimer(){clearInterval(timer);}

   // content 슬라이드------------------------
    var left_bt=document.getElementsByClassName('left_bt');
    var right_bt=document.getElementsByClassName('right_bt');
    var slide_box=$(".slide_box");
    var slide_ul_02=slide_box.find("ul");
    var slide_li_02=slide_ul_02.find(".slide_li_02");
    var currentIndex=0;
    var slide_count=slide_li_02.length;
    var bbb=false;
    var show_num_02=3;
    var slide_copy_02=$(".slide_li_02:lt("+show_num_02+")").clone();
    var timer_02="";

    slide_ul_02.append(slide_copy_02);

    right_bt[0].addEventListener('click',function(){next_02();});
    left_bt[0].addEventListener('click',function(){back_02();});

    function back_02(){
        if(bbb==false){
            bbb=true;
            if (currentIndex==0) {
            currentIndex=4;slide_ul_02.css("left",-1250*currentIndex+"px");
            }
            currentIndex--;
            slide_ul_02.stop().animate({"left":-1250*currentIndex+"px"},700,function(){
                bbb=false;
            });
        }
    }
    function next_02(){
        if(bbb==false){
          bbb=true;
            if (currentIndex==4) {
              currentIndex=0;slide_ul_02.css("left",currentIndex);
            }
            currentIndex++;
            slide_ul_02.stop().animate({"left":-1250*currentIndex+"px"},700,function(){
              bbb=false;
            });
        }
    }

    // startTimer_02();

    // slide_box.on({
    //   mouseenter:stopTimer_02,
    //   mouseleave:startTimer_02
    // });
    function startTimer_02(){
      timer_02= setInterval(function(){
        next_02();
      },4500);
    }
    function stopTimer_02(){clearInterval(timer_02);}

  //인스타 슬라이드----------------------------------------
  var insta_slide=$(".insta_box > ul");
  var insta_img=insta_slide.find(".insta_img"); //li 클래스이름
  var insta_count=insta_img.length; //슬라이드 갯수(1부터시작)
  var insta_width=insta_img.innerWidth(); //패딩포함한 li넓이
  var insta_left_bt=document.getElementsByClassName('insta_left_bt');
  var insta_right_bt=document.getElementsByClassName('insta_right_bt');
  var show_num=6;//보여지는 이미지 갯수 (총 이미지는 12개)
  var num_insta=0;
  var slide_copy = $(".insta_img:lt("+show_num+")").clone();
  //show_num(6)보다 작은 인덱스를 가진 객체(=lt선택자)를 모두 선택해서 복사
  insta_slide.append(slide_copy);

  function back_inst(){
    if (num_insta==0) {
      num_insta=insta_count;
      insta_slide.css("margin-left",-num_insta*insta_width+"px");
    }
    num_insta--; //insta_count=12, num=11이어야 하기 때문에
    insta_slide.animate({"margin-left":-insta_width *num_insta+"px"},500 );
  }
  function next_inst(){
    if (num_insta==insta_count) {
      num_insta=0;
      insta_slide.css("margin-left",num_insta);
    }
    num_insta++;
    insta_slide.animate({"margin-left":-insta_width *num_insta+"px"},500 );
  }

  insta_left_bt[0].addEventListener('click',function(){back_inst();});
  insta_right_bt[0].addEventListener('click',function(){next_inst();});
});
