
//메인배너
var num=0;
var currentNum=0;
var visualimgLi;
var visualNumBtnLi;
var visualSid;

visualSid=setInterval(visualBtn_nxt,3000);

function visualRolling(menunum){
    if(menunum!=currentNum){
        visualNumBtnLi[currentNum].className="";
        visualimgLi[currentNum].style.display="none";
        visualNumBtnLi[menunum].className="on";
        visualimgLi[menunum].style.display="block";

        currentNum=menunum;
    }
}

function visualBtn_prev(){
    num--;
    if(num<0){
        num=visualNumBtnLi.length-1;
    }
    visualRolling(num);
}

function visualBtn_nxt(){
    num++;
    if(num>visualNumBtnLi.length-1){
        num=0;
    }
    visualRolling(num);
}

function visualBtn_stop(){
    clearInterval(visualSid);
}

function visualBtn_play(){
    clearInterval(visualSid);
    visualSid=setInterval(visualBtn_nxt,3000);
}

function visual(){
    visualimgLi=document.getElementById('visualimg').getElementsByTagName('li');
    visualNumBtnLi=document.getElementById('visualNumBtn').getElementsByTagName('li');

    for(i=0; i<visualNumBtnLi.length; i++){
        visualNumBtnLi[i].num=i;

        visualNumBtnLi[i].onclick=function(){
            num=this.num;
            visualRolling(num);
            return false;
        }
    }
}



//소셜컨텐츠
function sns(){
    var social=document.getElementById('socialList');
    var socialList=social.getElementsByTagName('li');
    var socialCont;
    var socialPrev;
    var socialNxt;

    for(i=0; i<2; i++){
        socialList[i].num=i;
        socialList[i].onmouseover=function(){
            snsChange(this.num);
        }
    }
    function snsChange(num){
        if(currentNum!=num){
            socialList[currentNum].className="";
            socialList[num].className="socialOn";
        }
        currentNum=num;
        socialCont=socialList[currentNum].getElementsByTagName('div')[1];
        socialPrev=socialList[currentNum].getElementsByTagName('div')[2].getElementsByTagName('a')[0];
        socialNxt=socialList[currentNum].getElementsByTagName('div')[2].getElementsByTagName('a')[1];

        socialPrev.onclick=function(){
            num--;
            if(num<0) num=1;
            socialCont.style.left=-(586*num)+'px';
            return false;
        }

        socialNxt.onclick=function(){
            num++;
            if(num>1) num=0;
            socialCont.style.left=-(586*num)+'px';
            return false;
        }
    }
}

window.onload=function(){
    visual();
    sns();
}



$(document).ready(function(){
    //새소식, 고시공고, 보도자료
    $('.notice ul .noticeTitle:gt(0) .noticeWrap').hide();
    $('.notice ul .noticeTitle h3 .noticeT').click(function(e){
        e.preventDefault();
        if($(this).hasClass('on')==false){
            $('.notice ul .noticeT').removeClass('on');
            $('.notice ul .noticeT').parent().next().hide();

            $(this).addClass('on');
            $(this).parent().next().show();
        }
    })



    //팝업존
    var popupnum=1;
	$('.popupimg li:gt(0)').hide();

    var bannerset=setInterval(function(){set()},2000);

    $('.popup_prev').click(function(e){
        e.preventDefault();
        popupnum--;
        if(popupnum<1){
            popupnum=3;
        }
        $('.count').text(popupnum);
        $('.popupimg li').hide();
        $('.popupimg li:eq('+(popupnum-1)+')').show();
    })

    $('.popup_nxt').click(function(e){
    e.preventDefault();
        popupnum++;
        if(popupnum>3){
            popupnum=1;
        }
        $('.count').text(popupnum);
        $('.popupimg li').hide();
        $('.popupimg li:eq('+(popupnum-1)+')').show();
    })

    $('.popup_stop').click(function(e){
        e.preventDefault();
        clearInterval(bannerset);
    })

    $('.popup_play').click(function(e){
        e.preventDefault();
        clearInterval(bannerset);
        var bannerset=setInterval(function(){set()},2000);
    })

    function set(){
        $('.popup_nxt').trigger('click');
    }


    //구민, 사업자
    $('.userT h3 a:gt(0)').parent().parent().children('.habitantCont').hide();
    $('.userT h3 a').click(function(e){
        e.preventDefault();
        if($(this).hasClass('on')==false){
            $('.userT h3 a').removeClass('on');
            $('.userT h3 a').parent().parent().children('.habitantCont').hide();

            $(this).addClass('on');
            $(this).parent().parent().children('.habitantCont').show();
        }
    })



    //하단 롤링 배너
    var sid;
    function auto(dis){
        if(dis=='prev'){
            $('.bannerList').prepend($('.bannerList li:last'));
            $('.bannerList').css('left','-144px');
            $('.bannerList').animate({left:'0px'},1000);
        }else{
            $('.bannerList').animate({left:'-144px'},1000,function(){
                $('.bannerList').append($('.bannerList li:first'));
                $('.bannerList').css('left','0px');
            })
        }
    }

    sid=setInterval(auto,1500,'next');

    $('.banner_prev').click(function(e){
        e.preventDefault();
        clearInterval(sid);
        if($('.bannerList').is(':animated')==false){
            if($('.banner_play').css('display')=='none'){
                $('.banner_play').css('display','block');
                $('.banner_stop').css('display','none');
            }
            auto('prev');
        }
    })

    $('.banner_nxt').click(function(e){
        e.preventDefault();
        clearInterval(sid);
        if($('.bannerList').is(':animated')==false){
            if($('.banner_play').css('display')=='none'){
                $('.banner_play').css('display','block');
                $('.banner_stop').css('display','none');
            }
            auto('next');
        }
    })

    $('.banner_stop').click(function(e){
        e.preventDefault();
        clearInterval(sid);
        $(this).css('display','none');
        $('.banner_play').css('display','block');
    })

    $('.banner_play').click(function(e){
        e.preventDefault();
        clearInterval(sid);
        sid=setInterval(auto,1500,'next');
        $(this).css('display','none');
        $('.banner_stop').css('display','block');
    })
})
