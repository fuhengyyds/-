function fun(){
    alert("对不起，您的网页尚不支持搜索功能!")
}
function returnTop(){
    document.getElementsByClassName('return-top')[0].style.transition = 'all 2s';
}
window.onscroll = function () {
    var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var node = document.getElementsByClassName("top-hidden");
    if (top > 180) {
        node[0].style.display = 'block';
    }else{
        node[0].style.display = 'none';
    }
}