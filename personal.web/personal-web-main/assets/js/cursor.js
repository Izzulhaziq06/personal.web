// JavaScript to control cursor animation
document.addEventListener('mousemove', function (e) {
    var cursor = document.querySelector('.cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  
  document.addEventListener('mouseenter', function () {
    var cursor = document.querySelector('.cursor');
    cursor.classList.add('active');
  });
  
  document.addEventListener('mouseleave', function () {
    var cursor = document.querySelector('.cursor');
    cursor.classList.remove('active');
  });
  