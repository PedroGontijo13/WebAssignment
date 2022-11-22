const img = document.getElementById('title');

// 👇️ Change text color on mouseover
img.addEventListener('mouseover', function handleMouseOver() {
  img.style.color = 'red';
});

// 👇️ Change text color back on mouseout
img.addEventListener('mouseout', function handleMouseOut() {
  img.style.color = 'black';
});