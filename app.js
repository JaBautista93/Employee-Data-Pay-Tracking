

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDAqhfZnvKvpQCLaG5RWfRKj4CJCtVgdGs",
    authDomain: "john-and-charles-project.firebaseapp.com",
    databaseURL: "https://john-and-charles-project.firebaseio.com",
    projectId: "john-and-charles-project",
    storageBucket: "john-and-charles-project.appspot.com",
    messagingSenderId: "87947647399"
  };

  firebase.initializeApp(config);

    // Create a variable to reference the database
    var database = firebase.database();

// Note remember to create these same variables in Firebase!
    var name = "";
    var role = "";
    var startDate = "";
    var monthlyRate= "";

     // Capture Button Click
     $("#add-user").on("click", function(event) {
        // Don't refresh the page!
        event.preventDefault();
  
        // YOUR TASK!!!
   
      // Get inputs
        name = $("#name-input").val().trim();
        role = $("#role-input").val().trim();
        startDate= $("#start-input").val().trim();
        monthlyRate =$("#rate-input").val().trim();
        // Code in the logic for storing and retrieving the most recent user.
        database.ref().push({
          name,
          role,
         startDate,
          monthlyRate,
         dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
  });
  // Firebase is always watching for changes to the data.
    // When changes occurs it will print them to console and html
    database.ref().on("child_added", function(snapshot) {

        // Print the initial data to the console.
        console.log(snapshot.val());
        
        // Log the value of the various properties
        console.log(snapshot.val().name);
        console.log(snapshot.val().role);
        console.log(snapshot.val().startDate);
        console.log(snapshot.val().monthlyRate);
        // Change the HTML
        $("#name-display").text(snapshot.val().name);
        $("#role-display").text(snapshot.val().role);
        $("#start-display").text(snapshot.val().startDate);
        $("#rate-display").text(snapshot.val().monthlyRate);
        // If any errors are experienced, log them to console.
        },function(errorObject) {
              console.log("The read failed: " + errorObject.code);
            });
        