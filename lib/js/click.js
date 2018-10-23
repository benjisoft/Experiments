click = 0

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