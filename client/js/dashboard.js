async function getUserRole() {
    
var token=localStorage.getItem('token');

try {
    

    var res =await fetch("http://127.0.0.1:5004/api/users/checkRole",{

        method:'GET',
        headers:{
            'content-Type':'application/json' ,
            'auth':token
        }

    })

    if(res.status===200){
        var data =await res.json();

      document.getElementById('userRole').innerText="User Role"+data.message;  
   
    }
    else if ( res.status=== 403 ){
        console.log(res)
        alert()
       
  window.location.href="home.html";
  return;
   }

   else{
        console.log(res)

    alert()

     
  window.location.href="login.html";
  return;

   }

} catch (error) {
    console.error('Error Fatching user role ', error);
}

}

getUserRole()