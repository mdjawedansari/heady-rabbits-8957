
  let Name=document.getElementById("username");
  let Email=document.getElementById("email");
  let Pass=document.getElementById("password");
  let Cpass=document.getElementById("confirm-password");






function validate() {
  let username=Name.value.trim();
  let useremail=Email.value.trim();
  let userpass=Pass.value.trim();
  let usercpass=Cpass.value.trim();

  if(username=="Jawed" && useremail=="jawed0216@gmail.com" && userpass=="Life@is@race0" && usercpass=="Life@is@race0"){
    alert("Login Successful");
    location.href='index.html';
  }else {
    alert("Invalid Credential");
  }
}