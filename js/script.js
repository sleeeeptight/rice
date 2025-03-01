// 서브메뉴 한개씩 나오는 코드

$("nav > ul > li").mouseover(function(){
    $(this).find("ul.sub").stop().slideDown(200);
 });
 $("nav > ul > li").mouseout(function(){
    $(this).find("ul.sub").stop().slideUp(200);
 });


// 메뉴전체

// $("nav > ul > li").mouseover(function (){
//    $("ul.sub").stop().slideDown(200);
// });
// $("nav > ul > li").mouseout(function () {
//    $("ul.sub").stop().slideUp(200);
// });



// 

// $("nav > ul > li").mouseover(function (){
//    $(".nav_bg,ul.sub").stop().slideDown(200);
// });
// $("nav > ul > li").mouseout(function () {
//    $(".nav_bg,ul.sub").stop().slideUp(200);
// });







//  햄버거메뉴

// $(function(){
//    var pull=$('#pull');
//        menu=$('nav ul');
//        menuHeight=menu.height();   	      
// $(pull).on('click', function(e){
//    e.preventDefault();
//    menu.slideToggle();   	      	
// });
// $(window).resize(function(){
//    var w=$(window).width();
//    if(w>600 && menu.is(':hidden'))
//        {menu.removeAttr('style');}
// });
// });


// 탭

$(".notice_box h2").click(function () {
   $(".notice_box h2,.notice_box ul").removeClass("on");
   $(this).addClass("on");
   $(this).next("ul").addClass("on");
});








if( 'ontouchstart' in window ){ var click = 'touchstart'; }
else { var click = 'click'; }


$('div.burger').on(click, function(){

    if( !$(this).hasClass('open') ){ openMenu(); } 
    else { closeMenu(); }

});


$('div.menu ul li a').on(click, function(e){
  e.preventDefault();
  closeMenu();
});   


function openMenu(){
  
  $('div.circle').addClass('expand');
        
  $('div.burger').addClass('open'); 
  $('div.x, div.y, div.z').addClass('collapse');
  $('.menu li').addClass('animate');
  
  setTimeout(function(){ 
    $('div.y').hide(); 
    $('div.x').addClass('rotate30'); 
    $('div.z').addClass('rotate150'); 
  }, 70);
  setTimeout(function(){
    $('div.x').addClass('rotate45'); 
    $('div.z').addClass('rotate135');  
  }, 120);
  
  

}

function closeMenu(){

  $('div.burger').removeClass('open');  
  $('div.x').removeClass('rotate45').addClass('rotate30'); 
  $('div.z').removeClass('rotate135').addClass('rotate150');        
  $('div.circle').removeClass('expand');
  $('.menu li').removeClass('animate');
  
  setTimeout(function(){      
    $('div.x').removeClass('rotate30'); 
    $('div.z').removeClass('rotate150');      
  }, 50);
  setTimeout(function(){
    $('div.y').show(); 
    $('div.x, div.y, div.z').removeClass('collapse');
  }, 70);                         
  
}