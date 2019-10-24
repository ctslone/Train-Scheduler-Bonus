var app_firebase = {};
(function() {

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

app_firebase = firebase;
})()