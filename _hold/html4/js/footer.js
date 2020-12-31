$(document).ready(function(){

    $('.stieLink > li > a').click(function(e){
        e.preventDefault();
        $('.siteL').hide();
        $(this).next('div').show();
    })
    
    $('.siteMoreBtn').click(function(e){
        e.preventDefault();
        $(this).parent().parent().hide();
    })
})

