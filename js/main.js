$(document).ready(function () {
  const mMenuBtn = $(".m-menu-button");
  const mMenu = $(".m-menu");
  const tab = $(".tab");

  mMenuBtn.on("click", function () {
    mMenu.toggleClass("active");
    $("body").toggleClass("no-scroll");
  });

  tab.on("click", function () {
    tab.removeClass("active");
    $(this).toggleClass("active");
    $(".tabs-content").removeClass("visible");
    let activeTabContent = $(this).attr("data-target");
    $(activeTabContent).toggleClass("visible");
  });

  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    /*breakepoints: {
      992: {
        slidesPerView: 4,
      },
      776: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },*/
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        navigation: {
          nextEl: ".button-next",
        },
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      991: {
        slidesPerView: 4,
      },
    },
  });
});
