function sec2pageOn(){
    $(".sec2page").css("display","block");
    $(".sec2page").animate({'opacity':'1'},700)
    $(".secondpage__text").animate({'opacity':'0'},700)
    setTimeout(function() {
        $(".secondpage__text").css("display","none");
    }, 700);
}
function sec2pageOff(){
    setTimeout(function() {
        $(".sec2page").css("display","none");
    }, 700);
    $(".sec2page").animate({'opacity':'0'},700)
    $(".secondpage__text").animate({'opacity':'1'},700)
    $(".secondpage__text").css("display","block");
}