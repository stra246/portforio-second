$(function() {
    
    

    $('.burger-btn').on('click',function(){
        $('.bars').toggleClass('close');
        $(this).toggleClass('close-bg');
        $('.nav').toggleClass('slide-in');
        $('body').toggleClass('nonscroll');
        $('.burger-musk').fadeToggle(300);
    
      });

    var  $win = $(window),
         $fv = $(".fv"),
         $header = $("header"),
         fvHeight = $fv.outerHeight();
         fixedClass = "fixed";
  
        
  
  $win.on("load scroll",function(){
      var value = $(this).scrollTop();
      if($win.width() > 768){
        if ( value > fvHeight){
          $header.addClass(fixedClass);
          } else {
          $header.removeClass(fixedClass);
          }
      }
  });  
     $('a[href^="#"]').on('click', function () {
    $("section").removeClass('none')
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, 550, "swing");
    return false;
  });
  });
  
  
  
  $('.slider').slick({
      autoplay: true,
      autoplayspeed: 1000,
      fade: true,
      speed:1000,
      cssEase: "linear"
  
  });
