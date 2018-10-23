click = 0
  
  // Initialize Cloud Firestore through Firebase
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