click = 0

var config = {
	apiKey: "AIzaSyD4SBHplPiwHQ12UxFdxeLyn3uGhy5lN7I",
	authDomain: "experiments-8a805.firebaseapp.com",
	databaseURL: "https://experiments-8a805.firebaseio.com",
	projectId: "experiments-8a805",
	storageBucket: "experiments-8a805.appspot.com",
	messagingSenderId: "764927710135"
};
firebase.initializeApp(config);
var db = firebase.firestore();  
// Disable deprecated features
db.settings({
	timestampsInSnapshots: true
});

function addClick() {
	click += 1
	document.getElementById("clickCount").innerHTML = "You've clicked " + click + " times!"
}

function submitClicks() {
	data = 
	{
		"score": click
	}
	db.collection("scores").doc(userID).set(data);
}