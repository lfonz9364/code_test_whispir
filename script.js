$(document).ready(function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: new google.maps.LatLng(-37.814, 144.96332),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    // HTML5 Geolocation
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(pos.lat, pos.lng),
          map: map
        });
        map.setZoom(15);
        map.setCenter(pos);
      });
    }
});

// Validate user inputs
function dataValidation() {
  var inputs = $(".data-input"),
      message = $("h1");
      empty = false ;

  $(inputs).each(function(i,input){
    if(input.children[0].value == "") {
      input.children[1].textContent = "Please complete this mandatory field.";
      return empty = true;
    } else {
      input.children[1].textContent = "";
    }
  });

  if (!empty) {
    return message.text("Thank you for submitting your feedback.");
  } else {
    return message.text("Your feedback is valuable for your company.");
  }
};

// Validate User Email
function emailValidation() {
  var email = $('input[type="email"]');
  var emailText = email.val();
  var emailLabel = email.next();

  if(emailText.match(/([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/g)){
    return emailLabel.text("");
  } else {
    return emailLabel.text("Email must be formatted correctly.");
  }
};
