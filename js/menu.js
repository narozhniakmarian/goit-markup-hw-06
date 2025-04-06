// const openMenuBtn = document.getElementById('openMenuBtn');
// const closeMenuBtn = document.getElementById('closeMenuBtn');
// const mobileMenu = document.getElementById('mobileMenu');

// openMenuBtn.addEventListener('click', () => {
//   mobileMenu.classList.add('active');
// });

// closeMenuBtn.addEventListener('click', () => {
//   mobileMenu.classList.remove('active');
// });




document.addEventListener('DOMContentLoaded', function () {
 const openMenuBtn = document.getElementById('openMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');


  openMenuBtn.onclick = function () {
    mobileMenu.style.display = 'block';
  };

  closeMenuBtn.onclick = function () {
    mobileMenu.style.display = 'none';
  };

//   window.onclick = function (event) {
//     if (event.target === modal) {
//       modal.style.display = 'none';
//     }
//   };
});