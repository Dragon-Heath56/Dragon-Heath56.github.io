// script.js

document.addEventListener('DOMContentLoaded', (event) => {
  const raccoonImage = document.getElementById('raccoonImage');
  let hueRotation = 0; // Starting hue rotation value

  raccoonImage.addEventListener('click', () => {
    hueRotation += 90; // Increase hue rotation by 90 degrees on each click
    if (hueRotation >= 360) { // If hue rotation completes a full circle,
      hueRotation = 0; // reset it to start over.
    }
    raccoonImage.style.filter = `hue-rotate(${hueRotation}deg)`;
  });
});

document.addEventListener('keydown', function(event) {
  // Check if Ctrl and Alt are pressed along with the 'L' key
  if (event.ctrlKey && event.altKey && event.key === 'l') {
    // Prevent the default action to avoid triggering any browser shortcuts
    event.preventDefault();

    // Your login code here, for example, showing a login prompt
    var username = window.prompt("Username:", "");
    var password = window.prompt("Password:", "");

    if(username === "Raccoon" && password === "Panda") {
      alert("I'm still broken inside. I hate you for what you've done to me.");
    } else {
      alert("Wrong. You aren't the person meant to be logging in either.");
    }

    // You might want to send this information to your server
    // Use AJAX or a form submission to do this securely
  }
});

