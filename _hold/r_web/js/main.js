$(document).ready(function(){
 
    /*web*/
    /*header*/
    /*gnb*/
    $('.gnbBg').hide();
    $('.gnbDep_1 > li > a').mouseenter(function(){
        if($('.searchWrap').css('display')=='block') $('.searchWrap').css('display','none');
        $('.gnbDep_2').show();
        $('.gnbBg').show();
        gnbOn();
    })

    $('.gnb').mouseleave(function(){
        $('.gnbDep_2').hide();
        $('.gnbBg').hide();
        gnbOff();
    })
    
    function gnbOn(){
        $('.blackBg').css('display','block');
    }
    
    function gnbOff(){
        $('.blackBg').css('display','none');
    }


    /*검색버튼*/
    $('.searchButton').click(function(e){
        e.preventDefault();
        if($('.searchWrap').css('display')=='none'){
            $('.searchWrap').css('display','block');
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
        $('.searchWrap').css('display','none');
        gnbOff();
        $('#search').val('');
    }
    
    
    /*container*/
    //program (bxslider)
    /*메인배너 롤링*/
     $('.visual').bxSlider({
         mode: 'horizontal',
         auto: true,
         speed: 500,
         pause: 4000,
         controls: true,
         pager: true,
         infiniteLoop: true,
         tickerHover: true,
         touchEnabled: true,
         useCSS: false,
         moveSlides: 1
     })
    
    
    
    /*tablet 1024*/
    /*lnb*/
    $('.allMenuBtn').click(function(e){
        e.preventDefault();
        if($('.searchWrap').css('display')=='block') closeSearch();
        
        if($(this).hasClass('on')==false){
            $('.lnb').slideDown();
            $(this).addClass('on');
            $('.blackBg').css('display', 'block');
            $('.headerfrm').css('display', 'none');
            
            $('.line1').animate({top: '8px'},100);
            $('.line1').css('transform', 'rotate(405deg)');
            
            $('.line2').css('transform', 'rotate(405deg)');
            
            $('.line3').animate({top: '8px'},100);
            $('.line3').css('transform', 'rotate(495deg)');
        }else{
            $('.lnb').slideUp();
            $(this).removeClass('on');
            closeSearch();
            
            $('.line1').animate({top: '0'},100);
            $('.line1').css('transform', 'rotate(0deg)');
            
            $('.line2').animate({top: '8px'},100);
            $('.line2').css('transform', 'rotate(0deg)');
            
            $('.line3').animate({top: '16px'},100);
            $('.line3').css('transform', 'rotate(0deg)');
        }
    })
    

    /*lnb menu*/
    $('.lnbDep_2').hide();
    $('.lnbMenu > li > a').click(function(e){
        e.preventDefault();
        if($(this).next().css('display')=='none'){
            $('.lnbMenu > li > a').removeClass('on');
            $('.lnbMenu > li > a').next().hide();
            $(this).next().show();
            $(this).addClass('on');
        }
    })
    
    $('.blackBg').click(function(e){
        e.preventDefault();
        $('.lnb').slideUp();
        closeSearch();

        $('.line1').animate({top: '0'},100);
        $('.line1').css('transform', 'rotate(0deg)');

        $('.line2').animate({top: '8px'},100);
        $('.line2').css('transform', 'rotate(0deg)');

        $('.line3').animate({top: '16px'},100);
        $('.line3').css('transform', 'rotate(0deg)');
    })
    
    /*검색창*/
    $('.searchButton').click(function(e){
        e.preventDefault();
        if($('.searchWrap').css('display')=='block'){
            $('.searchWrap').show();
            $('.blackBg').css('display', 'block');
            $('#search').focus();
        }else{
            $('.searchWrap').hide();
            $('.blackBg').css('display', 'none');
        }
        
    })
    
    function closeSearch(){
        $('.searchWrap').hide();
        $('.lnbMenu > li > a').removeClass('on');
        $('.lnbMenu > li > a').next().hide();
        $('.headerfrm').css('display', 'block');
        $('.blackBg').css('display', 'none');
        $('#search').val('');
    }
    
    /*web*/
})
