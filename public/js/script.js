// ready 함수
$(function () {


    // 메뉴 클릭시에 해당섹션으로 스크롤 이동
    $('.header nav .menu').on('click', function(){
        // this > 내가 클릭이벤트를 적용시킨 dom
        // $(this) this를 $()로 감싸서 this에 해당하는 dom을 jquery 오브젝트로 변환.
        // jquery 오브젝트가 되면, $.fn 내부에 정의된 메서드를 모두 사용가능해진다.

        var menuIndex = $(this).index();

        // index 번쨰의 section dom을 선택해서,
        // 해당 section의 offset.top을 구하고
        // 그 해당 크기만큼 스크롤을 이동시킨다.

        // 해당섹션을 선택 $('.section').eq(menuIndex)
        var sectionOffset = $('.section').eq(menuIndex).offset();
        console.log("@@ sectionOffset", sectionOffset);

        // 해당섹션의 offset top값은?
        var offsetTop = sectionOffset.top;
        console.log("@@ offsetTop", offsetTop);

        // 해당 크기만큼 document를 스크롤 하는방법은?
        $('html, body').animate({
            scrollTop: offsetTop - 60
        }, 600)

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


    // swiper //
    // portfolio - gallery
    var swiper = new Swiper('.gallery-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });

    // testimonial 슬라이드
    var swiper = new Swiper('.testimonial-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //blog 슬라이드
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


})