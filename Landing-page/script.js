document.getElementById('hamburger').addEventListener('click', function () {
    mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenu.classList.add('active');
  });
  

document.getElementById("close-ham").addEventListener('click',function () {
    mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenu.classList.remove('active');
  })