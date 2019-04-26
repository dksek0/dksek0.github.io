var timeout;
var st;


$(document).ready(function(){
    /*header*/
    /*gnb*/
    $('.dep1 > li > a').mouseenter(function(){
        clearTimeout(timeout);
        if($('.searchBox').css('display')=='block') $('.searchBox').css('display','none');
        $('.subWrap').show();
        $('.menuBg').show();
        gnbOn();
    })

    $('.gnb').mouseleave(function(){
        timeout=setTimeout(function(){
            $('.subWrap').hide();
            $('.menuBg').hide();
            gnbOff();
        },200);
    })
    
    function gnbOn(){
        $('.blackBg').css('display','block');
        $('.headerWrap').css('background','rgba(255,255,255,1)');
    }
    
    function gnbOff(){
        $('.blackBg').css('display','none');
        $('.headerWrap').css('background','rgba(255,255,255,0.7)');
    }


    /*검색버튼*/
    $('.topSearchBtn').click(function(e){
        e.preventDefault();
        if($('.searchBox').css('display')=='none'){
            $('.searchBox').css('display','block');
            $('#search').focus();
            gnbOn();
        }else{
            searchClose();
        }
    })

    $('.closeBtn').click(function(e){
        e.preventDefault();
        searchClose();
    })
    
    $('.blackBg').click(function(){
        searchClose();
    })
    
    function searchClose(){
        $('.searchBox').css('display','none');
        gnbOff();
        $('#search').val('');
    }
    
    
    /*gnb fixed*/
    var navOffset=$('#container').offset().top
    $(window).scroll(function(){
        var scrollpos=$(window).scrollTop();
        if(scrollpos>=navOffset){
            $('.headerWrap').addClass('fixed');
            $('.menuBg').addClass('fixed').css('top','100px');
            $('.headerWrap').css('background','rgba(255,255,255,0.7)');
        }else{
            $('.headerWrap').removeClass('fixed');
            $('.menuBg').removeClass('fixed');
            $('.headerWrap').css('background','rgba(255,255,255,1)');
        }
    })
    
    
    
    /*container*/
    /*메인배너*/
    var num=1;
    var selectNum=0;
    var visualList=$('.visual li').length;
    
    st=setInterval(auto,2000);
    
    $('.visual li:gt(0)').hide();
    
    function auto(operator){
        if(operator=='next'){
            num++;
            if(num>visualList){
                num=1;
            }
        }else{
            num--;
            if(num<1){
                num=visualList;
            }
        }
        $('.visual li').fadeOut();
        $('.visualBtn a').removeClass('on');
        $('.visual li:eq('+(num-1)+')').fadeIn();
        $('.visualBtn a:eq('+(num-1)+')').addClass('on');
    }
    
    $('.visualBtnLeft').click(function(){
        clearInterval(st);
        st=setInterval(auto,2000,'prev');
        auto('prev');
    })
    
    $('.visualBtnRight').click(function(){
        clearInterval(st);
        st=setInterval(auto,2000,'next');
        auto('next');
    })
    
    $('.visualBtn a').click(function(){
        clearInterval(st);
        st=setInterval(auto,2000);
        
        selectNum=($(this).index());
        $('.visual li').fadeOut();
        $('.visualBtn a').removeClass('on');
        $('.visual li').eq(selectNum).fadeIn();
        $(this).addClass('on');
        return false;
    })
    
    
    
    /*제품소개 로고 scroll transform*/
    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop();
        if(scrollTop > $('.cont1').offset().top-$(window).height()/4){
            $('.philaLogo').css({
                'opacity': '1',
                'transform': 'translateX(0)'
            })
            $('.philaText').css({
                'opacity': '1',
                'transform': 'translateX(0)'
            })
        }else{
            $('.philaLogo').css({
                'opacity': '0',
                'transform': 'translateX(800px)'
            })
            $('.philaText').css({
                'opacity': '0',
                'transform': 'translateX(-800px)'
            })
        }
    })
//       $(window).scroll(function(){
//      var scrollpos=$(window).scrollTop();
//
//      // history - 박스
//      if(scrollpos > $('.historywrap').offset().top-($(window).height()/2)){
//         $('.history_box').css({
//            'opacity' : '1',
//            'transform' : 'translateY(0px)'
//         })
//      }
//      else{
//         $('.history_box').css({
//            'opacity' : '0',
//            'transform' : 'translateY(140px)'
//         })
//      }
    
    /*대표제품*/

    $('.moreBtnL').click(function(e){
        e.preventDefault();
        if($('.bpList').is(':animated')==false){
            $('.bpList').prepend($('.bpList li:last'));
            $('.bpList').css('left','-380px');
            $('.bpList').animate({left:'0'},700);
        }
    })

    $('.moreBtnR').click(function(e){
        e.preventDefault();
        if($('.bpList').is(':animated')==false){
            $('.bpList').animate({left:'-380px'},700,function(){
                $('.bpList').append($('.bpList li:first'));
                $('.bpList').css('left','0px');
            })
        }
    })
})