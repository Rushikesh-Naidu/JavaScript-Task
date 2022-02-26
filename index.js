document.querySelector(".btn").addEventListener("click", function(event){
  event.preventDefault();
  var name = "Name : " + document.querySelector("#firstName").value + " " + document.querySelector("#secondName").value;
  var username = "Username : " + document.querySelector("#username").value;
  var password = "Password: " + document.querySelector("#password").value;

  console.log(name);
  console.log(username);
  console.log(password);
})
