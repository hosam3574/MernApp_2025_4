async function profileLoad(){
var token=localStorage.getItem('token');
if(!token){
    alert("Not Login,please login");
    window.location.href="login.html";
    return;

}
try {

    var res =await fetch("http://127.0.0.1:5004/api/users/login",{

        method:'GET',
        headers:{
            'content-Type':'application/json' ,
            'auth':token
        }
        
    })

console.log(res)

if(res.status===200){
    
  
  var data = await res.json();

  document.getElementById('username').innerText=data.username;
    document.getElementById('email').innerText=data.email;
      document.getElementById('role').innerText=data.role;
}
  
       

else{
    alert("Failed to load profile . please try again")
    window.location.href="login.html"
    return;
}

}
catch (error) {
    console.error('Error loading profile',error);
    alert('Failed to load profile . please try again.')
    
}

}


profileLoad();

var logout = document.getElementById('logout')
logout.addEventListener('click',function () {})