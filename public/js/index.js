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
      
      $("#event_name").append("<span></span><div class='dropdown'><button style='float:right' class='btn  animated--fade-in' type='button' id='dropdownMenuButton ' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><i class='fas fa-ellipsis-v'></i></button><div class='dropdown-menu' aria-labelledby='dropdownMenuButton'><a  styles='font-size:8px;' class='dropdown-item' href='#'>Edit post</a><button styles='font-size:8px;'class='dropdown-item' href='#' >Delete post</button></div></div>");
      $("#event_name").append("<p> HOST ID: "+hostid+"</p>");
      $("#event_name").append("<p> PUBLISHED ON: "+publishDate+"</p>");
      $("#event_name").append("<p> DESCRIPTION:"+description+"</p><hr><hr>");
      
      
    });
    
  });

   function deleteposts(key)
    {
      var deleteRef=firebase.database().ref().child("posts").child(key);

      return deleteRef.remove()
      .then(function(){
         console.log("Remove successfully");
      })
      .catch(function(){
         console.log("error occured");
      });
    }

  var rootuserRef=firebase.database().ref().child("users");
   
  rootuserRef.on("value",snap=>{
    console.log(snap.val());
    snap.forEach(childSnap=>{
       
      var displayName=childSnap.child("displayName").val();
      var email=childSnap.child("email").val();
      var primarySport=childSnap.child("primarySport").val();
      var age=childSnap.child("age").val();
      
      $("#event_user_name").append("<p> NAME:"+displayName+"</p>");
      $("#event_user_name").append("<p> EMAIL: "+email+"</p>");
      $("#event_user_name").append("<p> AGE: "+age+"</p>");
      $("#event_user_name").append("<p> PRIMARY SPORT:"+primarySport+"</p><hr><hr>");
    });
    
  });


  var rootdeleted_postRef=firebase.database().ref().child("deletedPosts");
   
  rootdeleted_postRef.on("value",snap=>{
    console.log(snap.val());
    snap.forEach(childSnap=>{
       
      var postid=childSnap.child("postId").val();
      var hostid=childSnap.child("hostId").val();
      var type=childSnap.child("type").val();
      var description=childSnap.child("description").val();
      var location=childSnap.child("location").val();
      
      $("#event_deleted_posts").append("<span></span><button style='float:right' type='button' class='btn btn-warning'>Restore</button>");      
      $("#event_deleted_posts").append("<p> POST ID:"+postid+ "</p>");      
      $("#event_deleted_posts").append("<p> HOSTID: "+hostid+"</p>");
      $("#event_deleted_posts").append("<p> TYPE: "+type+"</p>");
      $("#event_deleted_posts").append("<p> DESCRIPTION:"+description+"</p>");
      $("#event_deleted_posts").append("<p> LOCATION:"+location+"</p><hr><hr>");
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
