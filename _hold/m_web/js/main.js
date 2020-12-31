$(document).ready(function(){
 //program (bxslider)
    /*메인배너 롤링*/
    $('.visualW').bxSlider({
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
    /*X-STORIES 롤링*/
    $('.gallery').bxSlider({
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

    /*gnb*/
    $('.allMenuBtn').click(function(e){
        e.preventDefault();
        if($('.searchWrap').css('display')=='block') closeSearch();
        
        if($(this).hasClass('on')==false){
            $('.allMenuWrap').slideDown();
            $(this).addClass('on');
            $('.blackBg').css('display', 'block');
            $('.searchBtn').css('display', 'none');
            
            $('.line1').animate({top: '6px'},100);
            $('.line1').css('transform', 'rotate(405deg)');
            
            $('.line2').css('transform', 'rotate(405deg)');
            
            $('.line3').animate({top: '6px'},100);
            $('.line3').css('transform', 'rotate(495deg)');
        }else{
            $('.allMenuWrap').slideUp();
            $(this).removeClass('on');
            closeSearch();
            
            $('.line1').animate({top: '0'},100);
            $('.line1').css('transform', 'rotate(0deg)');
            
            $('.line2').animate({top: '6px'},100);
            $('.line2').css('transform', 'rotate(0deg)');
            
            $('.line3').animate({top: '12px'},100);
            $('.line3').css('transform', 'rotate(0deg)');
        }
    })
    
    /*gnb menu*/
    $('.depth_2').hide();
    $('.depth_1 > li > a').click(function(e){
        e.preventDefault();
        if($(this).next().css('display')=='none'){
            $('.depth_1 > li > a').removeClass('on');
            $('.depth_1 > li > a').next().hide();
            $(this).next().show();
            $(this).addClass('on');
        }
    })
    
    $('.blackBg').click(function(e){
        e.preventDefault();
        $('.allMenuWrap').slideUp();
        closeSearch();

        $('.line1').animate({top: '0'},100);
        $('.line1').css('transform', 'rotate(0deg)');

        $('.line2').animate({top: '6px'},100);
        $('.line2').css('transform', 'rotate(0deg)');

        $('.line3').animate({top: '12px'},100);
        $('.line3').css('transform', 'rotate(0deg)');
    })
    
    /*검색창*/
    $('.searchButton').click(function(e){
        e.preventDefault();
        if($('.searchWrap').css('display')=='none'){
            $('.searchWrap').show();
            $('.blackBg').css('display', 'block');
            $('#search').focus();
        }else{
            $('.searchWrap').hide();
            $('.blackBg').css('display', 'none');
            $('#search').val('');
        }
    })
    
    function closeSearch(){
        $('.searchWrap').hide();
        $('.depth_1 > li > a').removeClass('on');
        $('.depth_1 > li > a').next().hide();
        $('.searchButton').css('display', 'block');
        $('.blackBg').css('display', 'none');
        $('#search').val('');
    }
})