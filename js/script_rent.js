$(document).ready(function(){
   // 대관서비스 바로가기
   var h_start_rent=document.getElementsByClassName('h_start_rent')[0];
   var position=$(h_start_rent).offset();
   $('html,body').stop().animate({scrollTop:position.top},500);
 });
