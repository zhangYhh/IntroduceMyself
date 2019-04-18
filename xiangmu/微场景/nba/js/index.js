$("audio").load(()=>this.play())
    $(".music").click(function(){
        let audio=document.getElementById("muc");
        if(audio.paused){
            audio.play();
        }else{
            audio.pause();
        }
        
    })



var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    on:{
        init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
        }, 
        slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
        } 
    }
    })  
    

    $(".touch").click(function(){
        $(".glf-l").css("display","block");
        $(".back1").css("display","block");
        $(".nexx1").css("display","block");
        $(".san1").css("display","block");
    })


    $(".joy-china").click(function(){
        $(".big-black").css("display","block");
    })




    // var swiper = new Swiper('.swiper-container', {
    //     pagination: '.swiper-pagination',
    //     slidesPerView: 'auto',
    //     centeredSlides: true,
    //     paginationClickable: true,
    //     paginationBulletRender: function (swiper, index, className) {
    //         return '<span class="spanSame span' + (index + 1) + '">' + (index + 1) + '</span>';
    //     },
    // });
    
    // $(".swiper-pagination").on("click","span",function(){
    //     var index = $(this).index();
    //     swiper.slideTo(index);
    // })





 