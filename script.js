// // Initialize AWS Cognito
// AWS.config.region = 'us-east-1';
// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//     IdentityPoolId: 'us-east-1_8bH0b4lza'
// });

// function onSignIn(googleUser) {
//     var id_token = googleUser.getAuthResponse().id_token;

//     // Authenticate with AWS Cognito
//     AWS.config.credentials.params.Logins = {
//         'accounts.google.com': id_token
//     };

//     AWS.config.credentials.refresh((error) => {
//         if (error) {
//             console.error('Error authenticating with AWS Cognito:', error);
//         } else {
//             console.log('Successfully authenticated with AWS Cognito');
//             // Now you can access AWS services
//         }
//     });
// }

// Function called when the Google Sign-In button is clicked
function customSignIn() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then(function (googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId());
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
    }).catch(function(error) {
        if (error.error === "popup_closed_by_user") {
            console.log("Sign-in popup was closed by the user.");
        } else {
            console.error(error);
        }
    });
}

// Initialize the Google Sign-In button
function init() {
    gapi.load('auth2', function() {
        var auth2 = gapi.auth2.init({
            client_id: '973379163079-ljuo4kmscrj7lcude03s5guboc382v7q.apps.googleusercontent.com'
        });
        auth2.attachClickHandler('custom-signin-button', {}, customSignIn, function(error) {
            console.error(error);
        });
    });
}

// Call the init function on window load
window.onload = function() {
    init();
};
