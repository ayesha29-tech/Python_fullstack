alert("Welcome to NRIIT Learning Management System")
let heading = document.getElementById("welcome");
heading.innerHTML = "Welcome Future Software Engineers"
console.log("Heading element: ", heading)
let msg=document.getElementById("message")
msg.innerHTML= "Javascript is fun"
console.log("Message element:", msg)
function showmessage(){
    alert("Welcome to NRIIT Learning Management System")
}
function changeHeading(){
    document.getElementById("welcome").innerHTML = "Welcome Python Fullstack Developers"
}
let heading1=document.querySelector("#welcome");
console.log("Heading element:",heading1)
let button = document.getElementById("btnGreeting");
button.addEventListener("click",function(){
    alert("Welcome to javascript Event Handling");
});
let registerForm=document.getElementById("registerForm");
registerForm.addEventListener("submit", function(event){
    event.preventDefault();
    let name= document.getElementById("name").Value;
    let email=document.getElementById("email").Value;
    let password=document.getElementById("password").Value;
    if (!name || !email || !password){
        alert("Please fill in all fields");
        return;
    }
    alert("Registration successfull!");

    console.log("Name: ",name);
    console.log("Email: ",email);
    console.log("Password: ",password);
})