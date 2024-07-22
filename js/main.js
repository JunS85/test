$(document).ready(function () {
    //gotop
    $(".gotop").hide();
    // 스크롤을 100이상이 되었을때
    // 맨위로가기 버튼이 fadeIn
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".gotop").fadeIn();
        }
        else {
            $(".gotop").fadeOut();
        }
    });
    $(".gotop").click(function () {
        $("html").animate({
            scrollTop: 0
        }, 2000);
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 1900 && $(this).scrollTop() < 3000) {
            $("body").addClass("on")
        } else {
            $("body").removeClass("on")
        }
    });
    /* main_banner */
    const mb = new Swiper(".mb", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        navigation: {//
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
    });

    $(".play").hide();
    $(".pause").click(function () {
        mb.autoplay.stop();
        $(".pause").hide();
        $(".play").show();
    });
    $(".play").click(function () {
        mb.autoplay.start();
        $(".play").hide();
        $(".pause").show();
    });

    /* news */
    const news = new Swiper(".news", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        direction: "vertical",
    });

    /* prd */
    const prd_list = new Swiper(".prd_list", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        slidesPerView: 1.5,
        breakpoints: {
            768: { // 768px 이상에서 보이는 개수
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1400: { // 1024px 이상에서 보이는 개수
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
        spaceBetween: 20,
        scrollbar: {
            el: ".swiper-scrollbar",
            dragSize: 200,
        }
    });
    $(".prd_list li a img:nth-child(2)").hide();
    $(".prd_list li").hover(function () {
        $(this).find("a img:nth-child(2)").stop().fadeToggle();
    });

    /* teaware */
    /*     $(".tab_img li:not(:first-child)").hide();
        $(".tab_btn li:nth-child(1)").click(function () {
            $(this).addClass("on").siblings().removeClass("on");
            $(".tab_img li:nth-child(1)").fadeIn().siblings().fadeOut();
        });
        $(".tab_btn li:nth-child(2)").click(function () {
            $(this).addClass("on").siblings().removeClass("on");
            $(".tab_img li:nth-child(2)").fadeIn().siblings().fadeOut();
        });
        $(".tab_btn li:nth-child(3)").click(function () {
            $(this).addClass("on").siblings().removeClass("on");
            $(".tab_img li:nth-child(3)").fadeIn().siblings().fadeOut();
        });
        $(".tab_btn li:nth-child(4)").click(function () {
            $(this).addClass("on").siblings().removeClass("on");
            $(".tab_img li:nth-child(4)").fadeIn().siblings().fadeOut();
        }); */

    $(".tab_btn li").click(function () {
        let idx = $(this).index(); //.tab_btn li 클릭한 요소 번호 찾기
        $(".tab_img li").eq(idx).fadeIn().siblings().fadeOut();
        $(this).addClass("on").siblings().removeClass("on");
    });

    /* museum */
    $(".museum_list li:nth-child(2)").addClass("active")
    $(".museum_list li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });




});/* ready */