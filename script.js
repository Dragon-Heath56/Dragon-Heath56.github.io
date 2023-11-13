// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const raccoonImage = document.getElementById('raccoonImage');
    raccoonImage.addEventListener('click', () => {
      raccoonImage.style.filter = 'hue-rotate(90deg)';
    });
  });
  