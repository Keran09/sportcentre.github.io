

	//form 
function validateForm() {
	var fname = document.forms["messageForm"]["firstname"].value;
	var lname = document.forms["messageForm"]["lastname"].value;
	var gender = document.forms["messageForm"]["gender"].value;
	var message = document.forms["messageForm"]["message"].value;
	var days = document.forms["messageForm"]["message"].value;
	if (fname == "" || lname == "" || message == "" || days == ""){
					alert("Empty fields found. Please fill the form.");
	}
    else {
		alert("Thank you for the feedback.");
	}
}