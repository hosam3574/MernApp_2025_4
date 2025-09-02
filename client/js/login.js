const { json } = require("express");

var loginForm=document.getElementById('loginForm')
loginForm.addEventListener('submit',async function (event) {

event.preventDefault()

var email=document.getElementById('form2Example1').value;
var password =document.getElementById('form2Example2').value;
var user ={email,password}
try {
    console.log(email,password);
    var res =await fetch("http://127.0.0.1:5004/api/users/login",{

        method:'POST',
        headers:{
            'content-Type':'application/json' 
        },
        body: JSON.stringify({ email: email, password: password}) 
    })


console.log(res)


if(res.status===200){
    alert("login successful");

    //redirect to profile page
    window.location.href="profile.html"

    //save token to local storage

    var data = await res.json();
    localStorage.setItem('token',data.token);
    localStorage.setItem('user',JSON.stringify(data.user));
    
}
else{
    alert("login faild,please check your credenials")
}

} catch (error) {
    console.error('Error during login', error);
alert('Login failed.please try again.');
}



})