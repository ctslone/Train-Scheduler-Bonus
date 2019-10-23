$(document).ready(function () {
    // adding FB to the app
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

    // initial variables that will be user input
    var trainName = "";
    var destination = "";
    var frequency = "";
    var firstTime = "";

    // creating an on click event listener for the choo choo button
    $("#choo-choo-btn").on("click", function (form) {
        form.preventDefault();
        // re-declaring the variables to the user input
        trainName = $("#train-name-input").val().trim();
            // console.log(trainName);
        destination = $("#destination-input").val().trim();
            // console.log(destination);
        frequency = $("#frequency-input").val().trim();
            // console.log(frequency);
        firstTime = $("#first-time-input").val().trim();
            // console.log(firstTime);
        // console.log("These are the variables:" + trainName, destination, frequency, nextArrival, minsAway)

        // creating new child for the variables in firebase
        database.ref().push({
            trainName: trainName,
            destination: destination,
            frequency: frequency,
            firstTime: firstTime,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
    })

        // listener for adding a child to the DB
        database.ref().on("child_added", function(snapshot) {
            // creating a varible that holds a snapshot of the data at that moment (hence snapshot)
            var sv = snapshot.val();

            // checking
            console.log("snapshot: " + sv.trainName);
            console.log("snapshot: " + sv.destination);
            console.log("snapshot: " + sv.frequency);
            console.log("snapshot: " + sv.firstTime);
            console.log("snapshot: " + sv.dateAdded);

            var currentTime = moment();
            var firstTrain = moment(sv.firstTime, "HH:mm").subtract(1, "years");
                console.log("First Train: "+firstTrain)
            var diffTime = moment().diff(moment(firstTrain), "minutes");
                console.log("Difference in time is: " + diffTime);
            var remainTime = diffTime % sv.frequency;
                console.log("Remainder minutes: "+remainTime);
            var timeTillNext = sv.frequency - remainTime;
                console.log("Time till next train: "+timeTillNext);
            var nextArrival = moment().add(timeTillNext, "minutes")

            var nameTd = $("<td>").text(sv.trainName);
            var destinationTd = $("<td>").text(sv.destination);
            var frequencyTd = $("<td>").text(sv.frequency);
            var nextArrivalTd = $("<td>").text(timeTillNext);
            var minutesAwayTd = $("<td>").text(moment(nextArrival).format("h:mm a"));

            var tR = $("<tr>");
            var editBtns = $("<button type='button' id='del-btn' class='edit-btn btn btn-secondary btn-sm'>Delete</button>")
            tR.append(nameTd, destinationTd, frequencyTd, minutesAwayTd, nextArrivalTd, editBtns)
            $("#train-table").prepend(tR);
            // console.log("appended")
            
            // playing a sweet train sound when the user adds a train!
            trainHorn();

            // $("#del-btn").on("click", function() {
            //     console.log("delet btn");
            //     (this).closest("tr").remove();
            //     // ref.child(this).removeValue();

            // })
        })

        

        



// FUNCTIONS

function trainHorn(horn) {
    var horn = document.createElement("audio");
    horn.src = "media/horn.mp3"
    horn.play();
}








})