var index = 0;
var timer = null;


function changeImage(a){
    $(".img li").eq(a).fadeIn().siblings().fadeOut();
    $(".dot>div").eq(a).addClass("active").siblings().removeClass("active");
}


function autodisplay(){
   timer = setInterval(function(){
    index++;
    if(index === 5){
        index = 0;
    }
    changeImage(index);
   },3000)
}


autodisplay();
$(".change .pre").click(function(){
    clearInterval(timer);
    index--;
    if(index === -1){
        index = 4;
    }
    changeImage(index);
    autodisplay();
})


$(".change .next").click(function(){
    clearInterval(timer);
    index++;
    if(index === 5){
        index = 0;
    }
    changeImage(index);
    autodisplay();
})


$(".dot div").click(function(){
    clearInterval(timer);
    index = $(this).index();
    changeImage(index);
    autodisplay();
})