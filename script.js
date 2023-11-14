// script.js
const video = document.getElementById("video");

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

// Object to keep track of corners pressed
let cornersPressed = {
  topLeft: false,
  topRight: false,
  bottomLeft: false,
  bottomRight: false
};

// Reset corners after a timeout
const resetCorners = () => {
  cornersPressed = {
    topLeft: false,
    topRight: false,
    bottomLeft: false,
    bottomRight: false
  };
};

// Check if all corners have been pressed
const checkCorners = () => {
  if (cornersPressed.topLeft && cornersPressed.topRight && cornersPressed.bottomLeft && cornersPressed.bottomRight) {
    video.hidden = false;
    video.play();

    // Request fullscreen if it is not already in fullscreen mode
    const { documentElement } = document;
    if(documentElement.requestFullscreen) documentElement.requestFullscreen();
    else if(documentElement.mozRequestFullScreen) documentElement.mozRequestFullScreen();
    else if(documentElement.webkitRequestFullscreen) documentElement.webkitRequestFullscreen();
    else if(documentElement.msRequestFullscreen) documentElement.msRequestFullscreen();

    resetCorners();
  }
};

// Time allowed between corner presses
const timeInterval = 5000; // 5 seconds

document.addEventListener('mousedown', function(event) {
  // Get the width and height of the viewport
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Define the size of the corner areas, e.g., 50x50 pixels
  const cornerSize = 80;

  // Get the X and Y coordinates of the click
  const x = event.clientX;
  const y = event.clientY;

  // Check if any corner was clicked and set the corner as pressed
  if (x <= cornerSize && y <= cornerSize) {
    cornersPressed.topLeft = true;
    setTimeout(resetCorners, timeInterval);
  } else if (x >= width - cornerSize && y <= cornerSize) {
    cornersPressed.topRight = true;
    setTimeout(resetCorners, timeInterval);
  } else if (x <= cornerSize && y >= height - cornerSize) {
    cornersPressed.bottomLeft = true;
    setTimeout(resetCorners, timeInterval);
  } else if (x >= width - cornerSize && y >= height - cornerSize) {
    cornersPressed.bottomRight = true;
    setTimeout(resetCorners, timeInterval);
  }

  // Check if all corners have been pressed
  checkCorners();
});

document.addEventListener('DOMContentLoaded', (event) => {
  let userInput = '';
  const targetString = 'Oreo';
  
  document.addEventListener('keypress', (e) => {
    // Append the pressed key to the userInput string
    userInput += e.key;
    
    // Check if the end of userInput matches the target string
    if (userInput.slice(-targetString.length).toLowerCase() === targetString.toLowerCase()) {
      alert('Prerana on top 🥰');
      // Clear userInput if you want to be able to detect the word again
      userInput = '';
    }
    
    // Optional: clear the userInput after a certain time of inactivity
    clearTimeout(userInput.timeoutID);
    userInput.timeoutID = setTimeout(() => {
      userInput = '';
    }, 2000); // Clears userInput after 2 seconds of inactivity
  });
});

window.addEventListener('beforeunload', function (e) {
  // Cancel the event
  e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
  // Chrome requires returnValue to be set
  e.returnValue = 'HEY!';
});

// For exiting fullscreen you can listen for the fullscreenchange event
document.addEventListener('fullscreenchange', function (e) {
  if (!document.fullscreenElement) {
    alert("DON'T YOU WANNA PLAY?");
  }
});
