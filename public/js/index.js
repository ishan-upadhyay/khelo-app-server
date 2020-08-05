var firebaseConfig = 
{
    apiKey: "AIzaSyAxpJ486Tx3BYWDTsyCNLy5C-h62-a5OPg",
    authDomain: "khelod-admin.firebaseapp.com",
    databaseURL: "https://khelod-admin.firebaseio.com",
    projectId: "khelod-admin",
    storageBucket: "khelod-admin.appspot.com",
    messagingSenderId: "46514113739",
    appId: "1:46514113739:web:944737c081bbd984481f4e",
    measurementId: "G-CWV0M22B5K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  firebase.auth.Auth.Persistence.LOCAL;
  

  var rootRef=firebase.database().ref().child("posts");
   
  rootRef.on("value",snap=>{
    console.log(snap.val());
    snap.forEach(childSnap=>{
       
      var hostid=childSnap.child("hostId").val();
      var commentCount=childSnap.child("commentCount").val();
      var description=childSnap.child("description").val();
      var publishDate=childSnap.child("publishDate").val();

      $("#event_name").append("<p> --> HOST ID :"+hostid+"</p>");
      $("#event_name").append("<p> PUBLISHED ON: "+publishDate+"</p>");
      $("#event_name").append("<p> DESCRIPTION :"+description+"</p><hr>");
      
    });
    
  });



  $("#btn-login").click(function()
  {
    var email=$("#exampleInputEmail").val();
    var password=$("#exampleInputPassword").val();

    if(email!=""&&password!=""){
        var result = firebase.auth().signInWithEmailAndPassword(email,password);
        result.catch(function(error)
        {
          var errorCode=error.code;
          var errorMessage=error.message;
          console.log(errorCode);
          console.log(errorMessage);
          window.alert("Message: "+ errorMessage);
        });
    }
    else{
      window.alert("Please fill out all fields.");
    }
  });


  $("#btn-resetPassword").click(function()
  {
    var auth = firebase.auth();
    var email = $("#exampleInputEmail").val();
    if(email != "")
    {
      auth.sendPasswordResetEmail(email).then(function()
      {
        window.alert("Email has been sent to you please check."); 
      }).catch(function(error)
      {
        var errorCode=error.code;
        var errorMessage=error.message;
        console.log(errorCode);
        console.log(errorMessage);
        window.alert("Message: "+ errorMessage);

      });
    }
    else{
      window.alert("Please write your Email.");
    }

  });


 
  $("#btn-logout").click(function()
  {
    firebase.auth().signOut();
  });

