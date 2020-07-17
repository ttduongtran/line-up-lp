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

$(window).load(function(){
    "use strict";

    setTimeout(function(){

        $(".slideshow-home").addClass("animated-average slideInLeft");

    },800);

    setTimeout(function(){

        $("#loading").addClass("animated-middle slideOutRight");
        $("#fp-nav").addClass("animated-middle slideInLeft");
        $("#info").addClass("animated-middle slideInLeft");
        $(".intro").addClass("animated-middle fadeInLeft");

    },1000);

    setTimeout(function(){

        $("#loading").addClass("animated-middle slideOutRight");

    },1200);

    setTimeout(function(){
        
        $("#fp-nav").removeClass("animated-middle slideInLeft");
        $("#info").removeClass("animated-middle slideInLeft");

    },2410);

});

$(document).ready(function(){
    "use strict";

    // Reveal animations, more informations here : https://scrollrevealjs.org/ 

    var fooReveal = {
      delay    : 200,
      distance : '6rem',
      easing   : 'ease-in-out',
      mobile   : false
    };

    /* ------------------------------------- */
    /* 2. FullPage Syntax .................. */
    /* ------------------------------------- */

    $('#fullpage').fullpage({
        anchors: ['Lineup-1', 'Lineup-2', 'Interface-3', 'Security-4'],
        navigation: true,
        navigationTooltips: ['Lineup', 'Lineup-2', 'Simple Interface', 'Security'],
        responsiveWidth: 1025,
        scrollBar:true,

        afterRender: function(){
            window.sr = ScrollReveal();
            sr.reveal('.foo', fooReveal);
        },

    });

    if ($(window).width() < 1025) {
        $( "#info" ).insertAfter( "#section1" );
    }

     $(window).resize(function() {
        if ($(window).width() < 1025) {
            $( "#info" ).insertAfter( "#section1" );
        }
        else {
            $( "#info" ).insertAfter( "#fullpage" );
        }
    });

    /* ------------------------------------- */
    /* 3. Countdown ........................ */
    /* ------------------------------------- */

    $("#getting-started")
        // Year/Month/Day Hour:Minute:Second
        .countdown("2017/12/24 15:30:30", function(event) {
            $(this).html(
                event.strftime('%D')
                // event.strftime('%D Days %Hh %Mm %Ss')
            );
    });

    /* ------------------------------------- */
    /* 4. Hover info effect ................ */
    /* ------------------------------------- */

    $('#info, #subscribing')

        // Mouse hovering actions
        .on('mouseover', function(){
            $(".section").addClass("hover-off");
        })

        .on('mouseout', function(){
            $(".section").removeClass("hover-off");
        });

    /* ------------------------------------- */
    /* 5. Portfolio images ................. */
    /* ------------------------------------- */

    $('.gallery-link')
        // Background set up
        .each(function(){
        $(this)
        // Add a photo container
        .append('<div class="photo"></div>')
        // Set up a background image for each link based on data-image attribute
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    });

    /* ------------------------------------- */
    /* 6. Map, Structure & Design .......... */
    /* ------------------------------------- */

    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);
    google.maps.event.addDomListener(window, 'resize', init);

    function init() {

        // Basic options for a simple Google Map
        // The latitude and longitude to center the map (always required)
        var center = new google.maps.LatLng(40.68000, -74.00487);
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var isDraggable = $(document).width() > 1024 ? true : false; // If document (your website) is wider than 1024px, isDraggable = true, else isDraggable = false

        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 9,
            scrollwheel: false,
            draggable: isDraggable,
            center: center,
            streetViewControl: true,
            mapTypeControl: true,

            zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        },

        streetViewControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP
        },

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}]
        };

        var map = new google.maps.Map(document.getElementById('map'), mapOptions, center);

        var locations = [
            ['<h6>Bondi Beach, East Coast</h6><p>This is where we are currently, the sun goes down...<br><i class="fa fa-coffee"></i> Visit us, we pay the coffee!</p>', 40.40000, -74.00000, 1],
            ['<h6>Coogee Beach, East Coast</h6><p>Opening Hours<br><i class="fa fa-clock-o"></i> 8:00 to 22:00</p>', 40.60000, -73.900000, 2],
            ['<h6>Manly Beach, East Coast</h6><p>Opening Hours<br><i class="fa fa-clock-o"></i> 6:00 to 14:00</p>', 40.76759, -73.96756, 3],
            ['<h6>Maroubra Beach, East Coast</h6><p>Opening Hours<br><i class="fa fa-clock-o"></i> 12:00 to 23:30</p>', 40.9700171, -73.7176337, 4]
        ];

        var infowindow = new google.maps.InfoWindow();

        var marker, i;
        var image = 'img/logo-map.png';

        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                icon: image
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                };
            })(marker, i));
        }

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
        
    }

    /* ------------------------------------- */
    /* 7. Newsletter ....................... */
    /* ------------------------------------- */

    $("#notifyMe").notifyMe();

    (function() {

        var dlgtrigger = document.querySelector( '[data-dialog]' ),
            somedialog = document.getElementById( dlgtrigger.getAttribute( 'data-dialog' ) ),
            dlg = new DialogFx( somedialog );

        dlgtrigger.addEventListener( 'click', dlg.toggle.bind(dlg) );

    })();
 
});