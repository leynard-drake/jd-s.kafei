function forgotPassword(){
    alert("Username: admin \n Password: password")
}
function signIn(){
    
    let username = document.getElementById("username-text").value;
    let password = document.getElementById("password-text").value;
    if(username == "admin".trim() && password == "password".trim()){
        alert("Welcome back, "+ username)
        // clear textfields
        document.getElementById("username-text").value="";
        document.getElementById("password-text").value="";
        // punta na sa loggedin na na file
        document.getElementById("logged-in").href="LOGGEDIN_INDEX.html"
    }else if(username == ""|| password==""){
        alert("Please fill in the blank fields.")
    }else{
        alert("Wrong credentials.")
    }
}

function showRegister(){
    event.preventDefault();
    document.getElementById("register-container").style.display="block";
    document.getElementById("login-container").style.display="none";
}
function register(){
    
    let username = document.getElementById("register-username-text").value;
    let password = document.getElementById("register-password-text").value;
    let confirmPassword = document.getElementById("register-confirm-password-text").value;
    if(password != confirmPassword){
        alert("Password did not match")
    }else if(password == "" || username == "" || confirmPassword == ""){
        alert("Please fill in the blank fields")
    }else{
        alert("Glad to have you!, " +username + "\n You will automatically logged in.")
        
        // clear textfields
        document.getElementById("register-username-text").value="";
        document.getElementById("register-password-text").value="";
        document.getElementById("register-confirm-password-text").value="";

        // punta sa logged in na na file
        document.getElementById("singning-in").href="LOGGEDIN_INDEX.html"
    }
}

function goBackSignin(){
    event.preventDefault();
    document.getElementById("register-container").style.display="none";
    document.getElementById("login-container").style.display="block";
}
