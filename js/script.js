$.ajax({
  url: 'https://api.github.com/users/87maza',
  dataType: 'json',
  success: function(response) {
  	// console.log(response);
  	var login = document.getElementById('login');
  	login.innerHTML = response.login;
  	var repos = document.getElementById('repocount');
  	repos.innerHTML = response.public_repos;
  }
});

// var map;
// function initMap() {
// map = new google.maps.Map(document.getElementById('map'), {
//   center: {lat: 33.876118, lng: -117.921410},
//   zoom: 11
// });
// }

    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 12,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(33.876118, -117.921410), 
            styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"},{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#76a1b2"},{"visibility":"on"}]}]
        };

        var mapElement = document.getElementById('map');

        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(33.876118, -117.921410),
          map: map,
          title: 'Hero!'
        });
    }
// ripped from CSS-TRICKS.COM! yay scroll spy
$(function() {
  	$('a[href*="#"]:not([href="#"])').click(function() {
  		//selects link element that starts with a # symbol
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      //if locations exists, starts with / 
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	});
});
//sticky nav for smaller screens
var  navi = $("navi");
    mns = "main-nav-scrolled";
    part = $('#particles-js').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > part ) {
    navi.addClass(mns);
  } else {
    navi.removeClass(mns);
  }
});

//analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-78080891-1', 'auto');
  ga('send', 'pageview');
