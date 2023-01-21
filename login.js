let objPeople=[
  {
    username:"Jawed",
    email:"jawed0216@gmail.com",
    password:"Life@is@race0",
    confirmPassword:"Life@id@race0"
  },
  {
    username:"Jawed1",
    email:"jawed02161@gmail.com",
    password:"Life@is@race01",
    confirmPassword:"Life@id@race01"
  }
]
let username=document.getElementById("username").value
let email=document.getElementById("email").value
let password=document.getElementById("password").value
let confirmPassword=document.getElementById("confirmPassword").value
let btn=document.getElementById("btn")
function LoggedIn(){


  btn.addEventListener("click",()=>{
    if(username==objPeople[i].username && email==objPeople[i].email && password==objPeople[i].password && confirmPassword==objPeople[i].confirmPassword){
      alert("Login Successful");
      return;
      location.href='index.html'
    }else {
      alert("Invalid Credential");
    }

  });
}
