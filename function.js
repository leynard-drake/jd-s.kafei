function clicked(){
    alert("Gumagana");
}
function loggedOut(){
    alert("Successfully logged out. You will direct to home page.");
}

function sendMessageEmail(){
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let emailAddress = document.getElementById("email-address").value;
    let message = document.getElementById("message").value;

    alert("Thank you for contacting us. \n \n"
        + "Name: " + firstName +" "+ lastName + "\n" 
        + "Email address: " + emailAddress+ "\n" 
        +"Message: " + message
    );
    document.getElementById("first-name").value ="";
    document.getElementById("last-name").value="";
    document.getElementById("email-address").value="";
    document.getElementById("message").value="";
}