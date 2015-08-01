window.onload = function (){

    var latLng = new google.maps.LatLng(-23.5854465, -46.677071399999996);

    var map = new google.maps.Map(document.querySelector('.mapContainer'),{
        zoom: 300,
        center: latLng
    });

    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
    title: 'here !!!'

    });



};