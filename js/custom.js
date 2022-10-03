$(".clickk").click(function(){
  $(".class_input").toggleClass("adinput")
})

// zoom start

// zooo end

$(".banner_slide").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow:'<i class="fas fa-arrow-right  next"></i>',
  prevArrow:'<i class="fas fa-arrow-left prev"></i>',
  speed: 2000,
  autoplay: true,
  
})

$('.counter').counterUp({
  delay: 10,
  time: 1000
});


$(".mobile_slide").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow:'<i class="fas fa-arrow-right next"></i>',
  prevArrow:'<i class="fas fa-arrow-left prev"></i>',
  speed: 2000,
  autoplay: true,
 
  
})

$(".test_main").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow:'<i class="fas fa-arrow-right next"></i>',
  prevArrow:'<i class="fas fa-arrow-left prev"></i>',
  speed: 2000,
  autoplay: true,
 
})

$('.brand_slick').slick({
  centerMode: true,
  centerPadding: '0',
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow:'<i class="fas fa-arrow-right next"></i>',
  prevArrow:'<i class="fas fa-arrow-left prev"></i>',
  // arrows: false,
  autoplay: true
  
});
