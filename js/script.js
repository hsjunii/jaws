// script.js
$(function() {

    // 2단계 메뉴 닫기
    $('.depth2').hide();

    // 2단계 메뉴 hover
    $('.depth1 > li').not('.depth1 > li:last').hover(
        //마우스 올라갔을때 (전체가 다열림 )
        function() {
            $('.depth2').stop().slideDown();
        },

        // 마우스 나갔을때
        function () {
            $('.depth2').stop().slideUp(); 
        }
        /* 2단계 메뉴가 전체가 아닌 홀로 동작 되게 할때는 
            function(){ 
                $(this).find('.depth2).stop.slideDown();} */
    );
});