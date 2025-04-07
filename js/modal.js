// document.addEventListener('DOMContentLoaded', function () {
//   const modal = document.getElementById('myModal');
//  **додати id="myModal" до div з класом modal**
//   const openBtn = document.getElementById('openModalBtn');
// **додати id="openModalBtn" до кнопки з класом btn-open**
//   const closeBtn = document.querySelector('.btn-close');

//   openBtn.onclick = function () {
//     modal.style.display = 'block';
//   };

//   closeBtn.onclick = function () {
//     modal.style.display = 'none';
//   };

//   window.onclick = function (event) {
//     if (event.target === modal) {
//       modal.style.display = 'none';
//     }
//   };
// });




(() => {
  const refs = {
   
    openModalBtn: document.querySelector("[data-modal-open]"),
    
    closeModalBtn: document.querySelector("[data-modal-close]"),
    
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
   
    refs.modal.classList.toggle("is-open");
  }
})();