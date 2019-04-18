var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: false, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })        


  $(".uls li").toggle(function(){
    $(this).css("border","1px solid #e4007f");
    $(this).find(".x-imgs").css("display","block");
    $(this).siblings().find(".x-imgs").css("display","none");
    $(this).siblings().css("border","1px solid #ccc")
  },
  function(){
     $(this).css("border","1px solid #ccc");
    $(".x-imgs").css("display","none")
  })
