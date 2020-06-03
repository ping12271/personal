// ready 함수
$(function () {

    $(window).on('scroll', function () {
        const scrollTop = $(window).scrollTop();
        const sectionHomeHeight = $('.section-home').innerHeight();
        if(scrollTop > sectionHomeHeight) {
            $('html').addClass('show-header')
        } else {
            $('html').removeClass('show-header')
        }
    })




    // 백탑 버튼 클릭시에 스크롤을 최상단 즉, scrollTop 0으로
    $('.back-top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400)
    })

    // 사이드 메뉴
    $('.btn-menu').on('click', function(){
        $('html').toggleClass('open-side-menu')
    })


})