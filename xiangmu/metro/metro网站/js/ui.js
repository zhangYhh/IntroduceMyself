$(".pp").toggle(function(){
    $(this).next().css("display","block");
    $(this).parent().siblings().find("div").css("display","none");
},
function(){
    $(this).next().css("display","none")
});
