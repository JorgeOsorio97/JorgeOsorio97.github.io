function initMap() {
     var uluru = {lat: 19.56236400564298, lng: -99.25781900000004};
     var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
      });
     var marker = new google.maps.Marker({
         position: uluru,
         map: map
     });
 s}
