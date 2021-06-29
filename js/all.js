$(document).ready(function () {

    // 漢堡選單
    $('.showmenu').on('click',  function(e){
        e.preventDefault();
 
        $("body").toggleClass("menu-show");
    });
    //top
    $('.top').click(function(e){
        e.preventDefault();
        $('html,body').animate({
          scrollTop:0
        },1500);
      });

});