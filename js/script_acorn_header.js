$(document).ready(function(){
  //햄버거 메뉴 호버
  $(".ham").on("click",function(){
    $(".h_nav").addClass("on");
    $(".hover_back").css('display','block');
  });
  $(".h_nav .close").on("click",function(){
    $(".h_nav").removeClass("on");
    $(".hover_back").css('display','none');
  });
  $("nav > ul > li").click(function(){
      $("nav ul ul").hide();
      $(".h_m_color").css('color','#ffffff');
      $(this).find(".h_m_color").css('color','#b82b20');
      $(".h_arrow").removeClass("on");
      $(this).find("ul").toggle();
      $(this).find(".h_arrow").addClass("on");
  });
  //pc형 메뉴 호버
  $(".h_h_menu_li").mouseover(function(){
    $(".hover_back_02").stop().slideDown(200);
    $(".h_hover_subul").css('display','block');
  });
  $(".h_header_pc").mouseleave(function(){
    $(".hover_back_02").stop().slideUp(200);
    $(".h_hover_subul").css('display','none');
  });
});