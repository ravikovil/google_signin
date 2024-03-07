// Function called when the Google Sign-In button is clicked
function customSignIn() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2
    .signIn({ prompt: "consent" })
    .then(function (googleUser) {
      var profile = googleUser.getBasicProfile();
      // alert('ID: ' + profile.getId());
      // alert('Full Name: ' + profile.getName());
      // alert('Given Name: ' + profile.getGivenName());
      // alert('Family Name: ' + profile.getFamilyName());
      // alert('Image URL: ' + profile.getImageUrl());
      // alert('Email: ' + profile.getEmail());
      var accessToken = googleUser.getAuthResponse().access_token;
      alert("Access Token: " + accessToken);

      // window.location.href = "www.google.com";
    })
    .catch(function (error) {
      if (error.error === "popup_closed_by_user") {
        console.log("Sign-in popup was closed by the user.");
      } else {
        console.error(error);
      }
    });
}

// Initialize the Google Sign-In button
// function init() {

// }

// Call the init function on window load
window.onload = function () {
  // init();
  gapi.load("auth2", function () {
    var auth2 = gapi.auth2.init({
      client_id:
        "973379163079-ljuo4kmscrj7lcude03s5guboc382v7q.apps.googleusercontent.com",
      scope: "email",
    });
    auth2.attachClickHandler(
      "custom-signin-button",
      {},
      customSignIn,
      function (error) {
        console.error(error);
      }
    );
  });
};
