window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);

var $html = $("html");
var page = 1;
var lastPage = $("#box").length;

$(window).on("wheel", function (e) {
  // $(function () {
  if ($html.is(":animated")) return;

  if (e.originalEvent.deltaY > 0) {
    if (page == lastPage) return;

    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;

    page--;
  }
  var posTop = (page - 1) * $(window).height();

  $html.animate({ scrollTop: posTop });

  if (page === 4) {
    // console.log(123123);
    $(".cont1").show(2000);
    $(".cont2").show(3000);
    $(".cont3").show(5000);
    $(".cont4").show(4000);
    $(".cont5").show(1000);
    $(".cont6").show(4000);
    $(".cont7").delay(2000).show(5000);
  }
  // });
});

$html.animate({ scrollTop: 0 }, 10);

$(function () {
  const list = [$("#gyeonggi"), $("#gangwon"), $("#gyeongsang"), $("#chungcheong"), $("#jeolla"), $("#jeju")];
  // const bg = ["url(../images/main_section_2/seoulgoong.png)", "url(../images/main_section_2/gangwonsan.png)", "url(../images/main_section_2/gyeongsang.png)", "url(../images/main_section_2/dodam.png)", "url(../images/main_section_2/junjoo.png)", "url(../images/main_section_2/jejunight.png)"];
  // const bg = ["url(http://seoh1999.dothome.co.kr/jujery/images/main_section_2/seoulgoong.png)", "url(http://seoh1999.dothome.co.kr/jujery/images/main_section_2/gangwonsan.png)", "url(http://seoh1999.dothome.co.kr/jujery/images/main_section_2/gyeongsang.png)", "url(http://seoh1999.dothome.co.kr/jujery/images/main_section_2/dodam.png)", "url(http://seoh1999.dothome.co.kr/jujery/images/main_section_2/junjoo.png)", "url(http://seoh1999.dothome.co.kr/jujery/images/main_section_2/jejunight.png)"];
  const bg = ["url(http://Hxxnseo.github.io/images/main_section_2/seoulgoong.png)", "url(http://Hxxnseo.github.io/images/main_section_2/gangwonsan.png)", "url(http://Hxxnseo.github.io/images/main_section_2/gyeongsang.png)", "url(http://Hxxnseo.github.io/images/main_section_2/dodam.png)", "url(http://Hxxnseo.github.io/images/main_section_2/junjoo.png)", "url(http://Hxxnseo.github.io/images/main_section_2/jejunight.png)"];

  $(".section2 li").on({
    mouseenter: function (e) {
      for (let i = 0; i < list.length; i++) {
        list[i].hide();
      }
      console.log($(this).index());
      $(e.target).show();
      $(".pcSec2").css("background-image", bg[$(this).index()]);
      // $(".pcSec2").animate({ background: bg[$(this).index()] }, 1000, "linear");
    },
    mouseleave: e => {
      for (let i = 0; i < list.length; i++) {
        list[i].show();
      }
      $(".pcSec2").css("background-image", "none");
    },
  });

  // $(".mobileMenu").on({
  //   click: function () {
  //     $(".wrapper1").slideDown();
  //   },
  // });

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
});

// $(".wrapper1").slideUp();
