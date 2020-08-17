 var map;
 var RUSSIA = {
     north: 80,
     south: 10,
     west: 100,
     east: 103,
 };
 var MOSCOW = {
     lat: 55.644466,
     lng: 37.395744
 };

 function initMap() {
     map = new google.maps.Map(document.getElementById('map'), {
         center: MOSCOW,
         gestureHandling: 'auto',
         restriction: {
             latLngBounds: RUSSIA,
             strictBounds: false,
         },
         zoom: 3,
         disableDefaultUI: true,
         mapTypeControl: true,
         mapTypeControlOptions: {
             style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
             mapTypeIds: ['roadmap', 'terrain']
         },
         zoomControl: true,
         zoomControlOptions: {
             position: google.maps.ControlPosition.LEFT_BOTTOM,
             style: google.mapsControlStyle
         },

     });


     // add var icon for new size
     var icon = {
         url: "../img/logo-mini.png", // url
         scaledSize: new google.maps.Size(29, 25), // size
     };

     // The marker, positioned at Uluru
     var marker = new google.maps.Marker({
         position: MOSCOW,
         map: map,
         icon: icon,
     });


     var InfoWindow = new google.maps.InfoWindow({
         content: '<h1> marker0<h1>'
     });
     marker.addListener('click', function () {
         InfoWindow.open(map, marker);
     });



     var marker1 = new google.maps.Marker({
         position: {
             lat: 45,
             lng: 30
         },
         map: map,
         icon: icon,

     });
     var InfoWindow1 = new google.maps.InfoWindow({
         content: '<h1>marker1<h1>'
     });
     marker1.addListener('click', function () {
         InfoWindow1.open(map, marker1);
     });
     var marker2 = new google.maps.Marker({
         position: {
             lat: 34,
             lng: 56
         },
         map: map,
         icon: icon,
     });
     var InfoWindow2 = new google.maps.InfoWindow({
         content: '<h1> marker2<h1>'
     });
     marker2.addListener('click', function () {
         InfoWindow2.open(map, marker2);
     });
     var marker3 = new google.maps.Marker({
         position: {
             lat: 74,
             lng: 56
         },
         map: map,
         icon: icon,
     });
     var InfoWindow3 = new google.maps.InfoWindow({
         content: '<h1>marker3<h2>'
     });
     marker3.addListener('click', function () {
         InfoWindow3.open(map, marker3);
     });

     var marker4 = new google.maps.Marker({
         position: {
             lat: 33,
             lng: 85
         },
         map: map,
         icon: icon,
     });
     var InfoWindow4 = new google.maps.InfoWindow({
         content: '<h1>marker4<h1>'
     });
     marker4.addListener('click', function () {
         InfoWindow4.open(map, marker4);
     })

     var marker5 = new google.maps.Marker({
         position: {
             lat: 38,
             lng: 71
         },
         map: map,
         icon: icon,
     });
     var InfoWindow5 = new google.maps.InfoWindow({
         content: '<h1>marker5<h2>'
     });
     marker5.addListener('click', function () {
         InfoWindow5.open(map, marker5);
     });

     var marker6 = new google.maps.Marker({
         position: {
             lat: 23,
             lng: 45
         },
         map: map,
         icon: icon,
     });
     var InfoWindow6 = new google.maps.InfoWindow({
         content: '<h1>marker6 <h1><html>lorem8</html>'
     });
     marker6.addListener('click', function () {
         InfoWindow6.open(map, marker6);
     });


     var marker7 = new google.maps.Marker({
         position: {
             lat: 45,
             lng: 83
         },
         map: map,
         icon: icon,
     });
     var InfoWindow7 = new google.maps.InfoWindow({
         content: '<h1>marker4<br/>Hello, how are you</h1'
     });


     marker7.addListener('click', function () {
         InfoWindow7.open(map, marker7);

     });




 }
