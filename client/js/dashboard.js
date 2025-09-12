const { populate } = require("../../server/models/user");

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

   var usersTable= document.getElementById('userBody');
   async function loadUsers(){
    const token=localStorage.getItem('token');
try {
     var res =await fetch("http://127.0.0.1:5004/api/users/allUsers",{

        method:'GET',
        headers:{
            'content-Type':'application/json' ,
            'auth':token
}
}) 
 if(res.status===200){
        var data =await res.json();
console.log(data)
renderUsers(data)
}else{
console.error('Error fetching users:',res.statusText)
}
}
catch (error) {
    console.error('Error fetching users:',error)
}



}

function renderUsers(users){
    usersTable.innerHTML='';
    users.forEach(user=>{


    
    var row = document.createElement('tr');
    row.innerHTML=`
    <td>${user._id}</td>
     <td>${user.username}</td>
      <td>${user._email}</td>
       <td>${user._role}</td>
       <td>
       <boutton onclick = "deleteUser('${user._id}')">Delete</button>
         <boutton class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick = "showUpdateForm('${user._id}','${user.username}' ,'${user._email}','${user._role}')">Update</button>
       </td>
    `;
    usersTable.appendChild(row);
});

}
loadUsers();

async function deleteUser(userId) {
    const token=localStorage.getItem('token')
    try {
         var res =await fetch(`http://127.0.0.1:5004/api/users/delete/${userId} `,{

   

        method:'DELETE',
        headers:{
            'content-Type':'application/json' ,
            'auth':token
}
 })
  if(res.status===200){
    alert("User deleted successfully");
    loadUsers();
  }
        
 } catch (error) {
         console.error('Error deleting user:',error)
         alert('Failed to delete user . please try again .')
         return;
    }
}


var updateUserData =document.getElementById('updateUserData');
async function showUpdateForm(id,username,email,role) {
    var userName =document.getElementById('userName');
    var userEmail =document.getElementById('userEmail');
    var userRoleInput =document.getElementById('userRoleInput');
    var userIdInput = document.getElementById('userIdInput');

     userIdInput.value=userIdInput;
    userName.value=username;
    userEmail.value=email;
    userRoleInput.value=role;
}


updateUserData.addEventListener('submit',async function (e) {

    e.preventDefault();
     var userName =document.getElementById('userName').value;
    var userEmail =document.getElementById('userEmail').value;
    var userRoleInput =document.getElementById('userRoleInput').value;
    var userIdInput = document.getElementById('userIdInput').value;

    const token=localStorage.getItem('token');
    try {

         var res= await fetch (`http://localhost:5004/api/users/updateById/${updateById}`, {
           
            method :'PUT',
           headers:{ 
            'content-Type':'application/json' ,
            'auth':token
            
           }, 

           body:JSON.stringify({
            username:userName,
            email:userEmail,
            role:userRoleInput
           })
         }) 
        
    } catch (error) {
                 console.error('Error updating user:',error)
         alert('Failed to updating user . please try again .')
         return;
    }

})

var addUserForm = document.getElementById('addUserForm');
addUserForm.addEventListener('submit',async function (e) {
    e.preventDefault();
    
      var userName =document.getElementById('name').value;
    var userEmail =document.getElementById('email').value;
       var userpassword =document.getElementById('password').value;
    var userRole =document.getElementById('role').value;
    const token =localStorage.getItem('token');
    try {
        var res= await fetch("http://localhost:5004/api/users/adminCreate",{
             
            method :'POST',
           headers:{ 
            'content-Type':'application/json' ,
            'auth':token
        },

      body:JSON.stringify({
            username:userName,
            email:userEmail,
            role:userRoleInput
           })

    })

    
    } catch (error) {
        
    }
});