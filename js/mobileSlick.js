var init = {
    autoplay: true,
    infinite: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1 };


    // $(function () {
    // var win = $(window);
    // var slider = $(".brewery_pic");

    // win.on("load resize", function () {
    //     if (win.width() < 768) {
    //     slider.not(".slick-initialized").slick(init);
    // } else if (slider.hasClass("slick-initialized")) {
    //     slider.slick("unslick");
    // }
    // });

    var brewery_slider = $('.brewery_pic');
    brewery_slider.slick({
        autoplay: true,
        autoplaySpeed:2000,
        dots: false,
        variableWidth : true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [
            {
                breakpoint:390,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint:768,
                settings: "unslick"
            }
        ]
    });

    // mobile menu_bar
		$(".beforeMenu").on("click", function () {
			$(".wrapper1").slideDown();
			$(".beforeMenu").hide();
			$(".afterMenu").show();
		});
		
		  $(".afterMenu").on("click", function () {
			$(".wrapper1").slideUp();
			$(".afterMenu").hide();
			$(".beforeMenu").show();
		});
// });