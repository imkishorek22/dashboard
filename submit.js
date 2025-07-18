function validate(){
var username=document.getElementById("UserName").value;
var password=document.getElementById("Pass").value;
if( username =="admin" && password == "admin@123" ){
    alert("login Successfull");
    Window.location="dashboard.html";
}
}