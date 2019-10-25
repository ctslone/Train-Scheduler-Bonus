// Initialize the FirebaseUI Widget using Firebase.
var firebaseConfig = {
    apiKey: "AIzaSyCsnN2fUQv34EoUy56xJJLir0ISDRF27Q8",
    authDomain: "train-scheduler-2c626.firebaseapp.com",
    databaseURL: "https://train-scheduler-2c626.firebaseio.com",
    projectId: "train-scheduler-2c626",
    storageBucket: "train-scheduler-2c626.appspot.com",
    messagingSenderId: "204190789100",
    appId: "1:204190789100:web:7092d6714b16b6b55524c9"
};
// initializing firebase
firebase.initializeApp(firebaseConfig);
// creating varible to reference the DB
var database = firebase.database();

    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                return true;
            },
            uiShown: function () {
                // The widget is rendered.
                // Hide the loader.
                document.getElementById('loader').style.display = 'none';
            }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: 'main.html',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            // firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: '#',
        // Privacy policy url.
        privacyPolicyUrl: '<your-privacy-policy-url>'
    };
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);


