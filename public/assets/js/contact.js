function initMap() {
    var contentString =
    '<div class="map-info-window">' +
    '<p><img src="assets/images/logo-dark.png" alt=""></p>' +
    '<p><strong>Mobel - Furniture factory</strong></p>' +
    '<p><i class="fa fa-map-marker"></i> 200 12th Ave, New York, NY 10001, USA</p>' +
    '<p><i class="fa fa-phone"></i> +12 33 444 555</p>' +
    '<p><i class="fa fa-clock-o"></i> 10am - 6pm</p>' +
    '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    //set default pposition
    var myLatLng = { lat: 40.7459772, lng: -74.0545504 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: myLatLng,
        styles: [{ "featureType": "administrative", "elementType": "all", "stylers": [{ "visibility": "on" }, { "saturation": -100 }, { "lightness": 20 }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "visibility": "on" }, { "saturation": -100 }, { "lightness": 40 }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "visibility": "on" }, { "saturation": -10 }, { "lightness": 30 }] }, { "featureType": "landscape.man_made", "elementType": "all", "stylers": [{ "visibility": "simplified" }, { "saturation": -60 }, { "lightness": 10 }] }, { "featureType": "landscape.natural", "elementType": "all", "stylers": [{ "visibility": "simplified" }, { "saturation": -60 }, { "lightness": 60 }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }, { "saturation": -100 }, { "lightness": 60 }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }, { "saturation": -100 }, { "lightness": 60 }] }]
    });
    //set marker
    var image = 'assets/images/map-icon.png';
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Hello World!",
        icon: image
    });
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
}