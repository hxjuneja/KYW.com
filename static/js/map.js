


    
     var map;
     var geocoder;
     var marker = null;
     function initialize() {
       geocoder = new google.maps.Geocoder();
       var myLatlng = new google.maps.LatLng(0,0);
       var mapOptions = {
       zoom: 1,
       center: myLatlng,
       mapTypeId: google.maps.MapTypeId.ROADMAP
      }
     map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

     google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
        }); 
     }
  
       //;;  document.getElementById("pp").innerHTML="anything";
     
    function placeMarker(location) {
     if(marker)
      {
        marker.setMap(null);   
      }
     marker = new google.maps.Marker({
      position: location,
      map: map
       });
     
            
   
      // geo coding function 

      var ll = marker.getPosition();
      geocoder.geocode({'latLng': ll}, function(results, status) {
         if (status == google.maps.GeocoderStatus.OK) {
             if (results[1]) {
             var n = results[1].formatted_address;
                 //document.getElementById("p").innerHTML=str;
              n = n.split(",");
             map.setZoom(1);
             document.getElementById("pp").innerHTML= n[n.length-1];               
             var st =n[n.length-1];
                 showdata(st);
                 
             }
         }
        else {
            document.getElementById("pp").innerHTML ="not a country";
           marker.setMap(null);
         }
     });

  }
