var didScroll;

var home;
var game;
var info;
var thisScrollY;

$(function(){
    // 스크롤 알림
    $(window).scroll(function(event){
        didScroll = true;
    });

    // hasScrolled를 실행하고 didScroll상태를 재설정
    setInterval(function(){
        HeaderAnim();
    
    }, 100);

    
   
    // 이미지 사이즈 창 크기에 맞춰 적용
    $(document).ready(function(){ 
        $('.cover').css('width', $(window).width()); 
        $('.cover').css('height', $(window).height()); 
        $(window).resize(function() { 
            $('.cover').css('width', $(window).width()); 
            $('.cover').css('height', $(window).height()); 
        }); 
    });
    
    $('#list_h > li ul > li').mouseenter(function(){
       $(this).children('a').children('img').stop().fadeIn(300);
    });
    $('#list_h > li ul > li').mouseleave(function(){
       $(this).children('a').children('img').stop().fadeOut(300);
    });
});


    
function HeaderAnim(){
    
    home = $('.cover').offset().top;

    game = $('.Game').offset().top;

    info = $('footer').offset().top;

    thisScrollY = GetScroll();
    
    if(home <= thisScrollY && game > thisScrollY){
        $('header ul > li').eq(0).children('a').css('color','orange');
        $('header ul > li').eq(1).children('a').css('color','lightgray');
        $('header ul > li').eq(2).children('a').css('color','lightgray');
    }
    else if(game <= thisScrollY && info > thisScrollY){
        $('header ul > li').eq(1).children('a').css('color','orange');
        $('header ul > li').eq(0).children('a').css('color','lightgray');
        $('header ul > li').eq(2).children('a').css('color','lightgray');
    } 
    else if(info <= thisScrollY){
        $('header ul > li').eq(2).children('a').css('color','orange');
        $('header ul > li').eq(0).children('a').css('color','lightgray');
        $('header ul > li').eq(1).children('a').css('color','lightgray');
    }
    
}

function GetScroll(){
    return $('header').offset().top + 61;
}