$(document).ready(function(){
  // 카페 슬라이드 이미지
   var h_slide=document.getElementsByClassName('h_slide');
   var h_l_bt=document.getElementsByClassName('h_l_bt')[0];
   var h_r_bt=document.getElementsByClassName('h_r_bt')[0];
   var h_img_count=0;

   hide_img();
   h_slide[h_img_count].style.display="block";

   h_r_bt.addEventListener('click',function(){
     if(h_img_count<5){
       hide_img();
       h_img_count++;
       h_slide[h_img_count].style.display="block";
     }
     else {
       hide_img();
       h_img_count=0;
       h_slide[h_img_count].style.display="block";
     }
   });

    h_l_bt.addEventListener('click',function(){
      if(h_img_count>0){
       hide_img();
       h_img_count--;
      h_slide[h_img_count].style.display="block";
      }
     else {
       hide_img();
       h_img_count=5;
      h_slide[h_img_count].style.display="block";
     }
   });
     function hide_img() {
       h_slide[0].style.display="none";
       h_slide[1].style.display="none";
       h_slide[2].style.display="none";
       h_slide[3].style.display="none";
       h_slide[4].style.display="none";
       h_slide[5].style.display="none";
     }
});
