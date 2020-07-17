/*  TABLE OF CONTENTS
    ---------------------------
    1. Loading / Opening
    2. FullPage Syntax
    3. Countdown
    4. Hover info effect
    5. Portfolio images
    6. Map, Structure & Design
    7. Newsletter
*/

/* ------------------------------------- */
/* 1. Loading / Opening ................ */
/* ------------------------------------- */

$(window).load(function () {
  "use strict";

  setTimeout(function () {
    $(".slideshow-home").addClass("animated-average slideInRight");
  }, 800);

  setTimeout(function () {
    $("#loading").addClass("animated-middle slideOutLeft");
    $("#fp-nav").addClass("animated-middle slideInRight");
    $("#info").addClass("animated-middle slideInRight");
    $(".intro").addClass("animated-middle fadeInRight");
  }, 1000);

  setTimeout(function () {
    $("#loading").addClass("animated-middle slideOutLeft");
  }, 1200);

  setTimeout(function () {
    $("#fp-nav").removeClass("animated-middle slideInRight");
    $("#info").removeClass("animated-middle slideInRight");
  }, 2410);
});

$(document).ready(function () {
  "use strict";

  /* ------------------------------------- */
  /* 2. FullPage Syntax .................. */
  /* ------------------------------------- */

  $("#fullpage").fullpage({
    anchors: ['Lineup-1', 'Lineup-2', 'Interface-3', 'Security-4'],
    navigation: true,
    navigationTooltips: ['Lineup', 'Lineup-2', 'Simple Interface', 'Security'],
    responsiveWidth: 1025,
  });

  if ($(window).width() < 1025) {
    $("#info").insertAfter("#section1");
  }

  $(window).resize(function () {
    if ($(window).width() < 1025) {
      $("#info").insertAfter("#section1");
    } else {
      $("#info").insertAfter("#fullpage");
    }
  });

  /* ------------------------------------- */
  /* 4. Hover info effect ................ */
  /* ------------------------------------- */

  $("#info, #subscribing")
    // Mouse hovering actions
    .on("mouseover", function () {
      $(".section").addClass("hover-off");
    })

    .on("mouseout", function () {
      $(".section").removeClass("hover-off");
    });
});