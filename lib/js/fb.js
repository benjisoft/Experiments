if (window.location.href = "https://exp-fb.herokuapp.com/home.html") {
	document.getElementById("#pic1").src= "http://graph.facebook.com/"+ userID + "/picture?type=square"
	console.log("Image: " + http://graph.facebook.com/"+ userID + "/picture?type=square")
}

function statusChangeCallback(response) {
	console.log('statusChangeCallback');
	console.log(response);
	// Logs details of person
	if (response.status === 'connected') {
		// Logged into your app and Facebook.
		testAPI();
		if (window.location.href != "https://exp-fb.herokuapp.com/home.html") {
			window.location.href = "https://exp-fb.herokuapp.com/home.html"
		}
	} else {
		// The person is not logged into your app or we are unable to tell.
		document.getElementById('status').innerHTML = 'Please log ' +
			'into this app.';
	}
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
	FB.getLoginStatus(function (response) {
		statusChangeCallback(response);
		console.log("CLS, " + response)
	});
}

window.fbAsyncInit = function () {
	FB.init({
		appId: '261694544507785',
		cookie: true, // enable cookies to allow the server to access 
		// the session
		xfbml: true, // parse social plugins on this page
		version: 'v2.8' // use graph api version 2.8
	});

	// Checks if person is logged in

	FB.getLoginStatus(function (response) {
		statusChangeCallback(response);
		console.log("GLS, " + response)
		userID = response.authResponse.userID
	});

};

// Load the SDK asynchronously
(function (d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s);
	js.id = id;
	js.src = "https://connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
	console.log('Welcome!  Fetching your information.... ');
	FB.api('/me', function (response) {
		console.log('Successful login for: ' + response.name);
		document.getElementById('status').innerHTML =
			'Thanks for logging in, ' + response.name + '!';
	});
}