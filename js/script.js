console.log("JS CONNECTED");


// Pop Up (Home Section)
window.onload = function() {
  let visitorName = prompt("Please enter your name:");

  if (visitorName && visitorName.trim() !== "") {
    document.getElementById("welcomeText").innerText =
      "Hi " + visitorName + "! Welcome to My Website!";
  } else {
    document.getElementById("welcomeText").innerText =
      "Hi Guest! Welcome to My Website!";
  }
};

// Message Form
document.getElementById("messageForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("messageInput").value;

  document.getElementById("resultName").innerText = name;
  document.getElementById("resultEmail").innerText = email;
  document.getElementById("resultMessage").innerText = message;

  document.getElementById("messageResult").classList.remove("hidden");

  document.getElementById("messageResult").scrollIntoView({ behavior: "smooth" });

});