$(document).ready(function(){
    $('.gnbsTitle').mouseenter(function(){
        if($(this).next().css('display')=='none'){
            $('.gnbsub').hide();
            $(this).next().slideDown(200);
            $('.subBg').slideDown(200);
        }
    })

    $('.gnb').mouseleave(function(){
        $('.gnbsub').slideUp(200);
        $('.subBg').slideUp(200);
    })
})
