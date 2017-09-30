
function loginWithEmailAndPassword() {
	var email = document.getElementById('emailInput').value;
	var password = document.getElementById('passwordInput').value;

	firebase.auth().signInWithEmailAndPassword(email, password)
	.then(function(user){
		showSuccess("login detail is correct")
	})
	.catch(function(error) {
 	 // Handle Errors here.
  	var errorCode = error.code;
  	var errorMessage = error.message;
  // ...
  	showError("login Failed "+ errorMessage)
	});
	
}

function registerWithEmailAndPassword() {
	var email = document.getElementById('emailInput').value;
	var password = document.getElementById('passwordInput').value;

	//Firebase Auth function called here for personal login system
		firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(function(user){
			var successMessage = "email is "+ email + " password is "+ password
			showSuccess("Done "+ successMessage)
		})
		.catch(function(error) {
  		// Handle Errors here.
  			var errorCode = error.code;
  			var errorMessage = error.message;	
			
  		// ...
  		showError("An Error occured please re-auth "+ errorMessage +" Error Code  "+ errorCode)
	});
	
}

function loginWithGoogle() {
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider)
	.then(function(result) {
	  // This gives you a Google Access Token. You can use it to access the Google API.
	  var token = result.credential.accessToken;
	  // The signed-in user info.
	  var user = result.user;
	  // ...
	  //showSuccess('Login with Google not yet implemented!');
	})
	.catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // The email of the user's account used.
	  var email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  var credential = error.credential;
	  // ...
	});

//Here is for redirection
/*firebase.auth().signInWithRedirect(provider);
	firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.
  var user = result.user;
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});*/
	
}

function loginWithFacebook(){
	var provider = new firebase.auth.FacebookAuthProvider();
// To apply the default browser preference instead of explicitly setting it.
	 firebase.auth().useDeviceLanguage();

	 firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

}

/*function signOutUser() 
	firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	  	showSuccess("You will be signed out soon, don't worry...");
	})
	.catch(function(error) {
	  // An error happened.
	  var errorMessage = error.message;
	  var errorCode = error.Code;

	  	showError("You will be signed out soon, don't worry...");
	});
}
*/
function showError(errorMessage) {
	hideSuccess();
	document.getElementById('errorBox').innerHTML = errorMessage;
	document.getElementById('errorBox').style.display = 'block';
}

function hideError() {
	document.getElementById('errorBox').style.display = 'none';
}

function showSuccess(errorMessage) {
	hideError();
	document.getElementById('successBox').innerHTML = errorMessage;
	document.getElementById('successBox').style.display = 'block';
}

function hideSuccess() {
	document.getElementById('successBox').style.display = 'none';
}