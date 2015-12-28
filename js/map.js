var myCenter=new google.maps.LatLng(34.8645995,-111.7672585,14.5);

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:13,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map = new google.maps.Map(document.querySelector(".map"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  icon:'../img/marker.png'
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);