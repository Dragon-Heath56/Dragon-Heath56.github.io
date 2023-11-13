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
