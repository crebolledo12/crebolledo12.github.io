// script.js
const videos = [
  document.getElementById('video0'),
  document.getElementById('video1'),
  document.getElementById('video2')
];

const textBox = document.getElementById('textBox');

let positions = [0, 0, 0];
let currentIndex = 0;
let firstClick = true;

textBox.addEventListener('click', () => {
  if (firstClick) {
    videos.forEach(video => video.muted = false);
    firstClick = false;
  }

  // Save current video position and hide it
  positions[currentIndex] = videos[currentIndex].currentTime;
  videos[currentIndex].pause();
  videos[currentIndex].style.display = 'none';

  // Move to next video in array
  currentIndex = (currentIndex + 1) % videos.length;

  // Show next video and resume
  videos[currentIndex].currentTime = positions[currentIndex];
  videos[currentIndex].style.display = 'block';
  videos[currentIndex].play();
	
	// Ensure all videos are set to loop after metadata is loaded
videos.forEach(video => {
  video.addEventListener('loadedmetadata', () => {
    video.loop = true;
  });
});
