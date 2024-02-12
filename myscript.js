// Get references to the image, message paragraph, and buttons
var image = document.getElementById("myImage");
var message = document.getElementById("message");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");

// Add click event listeners to the buttons
button1.addEventListener("click", function () {
  // Change the image source to image1.jpg when button 1 is clicked
  image.src = "./images/ak yay.gif";
  // Add a message when button 1 is clicked
  message.textContent = "YAYYYY!!!! I LOVE YOU MY BABYYY";
});

button2.addEventListener("click", function () {
  // Change the image source to image2.jpg when button 2 is clicked
  image.src = "./images/heart.gif";
  // Add a message when button 2 is clicked
  message.textContent = "Sorry but No isn't an option!!!!!";
});
