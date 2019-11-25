/*
Name: Rameel Zahid
Assignment: 08
Purpose: This program will aloow the submit button to work on the contact form.
 */

"use strict"


function validEmail(email) {
    
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function clearForm() {
	   
	$("#name").val("");
	$("#email").val("");
	$("#subject").val("");
	$("#message").val("");
	
}

function validate() {
	
	var msg = "";
	var valid = true;

	var email = $("#email").val();	
	var message = $("#message").val();
	var subject = $("#subject").val();
	var name = $("#name").val();



    var em = email.trim();
	var mg = message.trim();
	var sub = subject.trim();
	var nm = name.trim();

	if (mg=="") {
		msg+="Message can't be empty <br>";
		valid=false;
	}
	if (sub=="") {
		msg+="Subject can't be empty <br>";
		valid=false;
	}
	if (nm=="") {
		msg+="Name can't be empty <br>";
		valid=false;
	}	
	
	var msgArea = $("#msg");
		
	var ret = validEmail(em);
	
	if(ret==false){
		msg+="Invalid Email <br>"; 
		valid=false;

	}

	$("#msg").html(msg);
	
	return valid;
	
}




$("#contactSubmit").click(function () {
	
    var valid = validate();
	
	if(valid == true) {
		
		
	
	}
	
    return false;
});


$( document ).ready(function() {

});

