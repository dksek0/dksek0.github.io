$(document).ready(function(){
    //lnb
    $('.left_depth2:gt(0)').hide();
    $('.left_menu > li:eq(0)').addClass('current');
    $('.left_menu > li > a').click(function(e){
        e.preventDefault();
        if($(this).next().css('display')=='none'){
            $('.left_menu > li').removeClass('current');
            $('.left_menu > li > a').next().hide();
            $(this).next().show();
            $(this).parent().addClass('current');
        }
    })
})