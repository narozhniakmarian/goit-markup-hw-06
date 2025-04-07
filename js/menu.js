

// document.addEventListener('DOMContentLoaded', function () {
//   const openMenuBtn = document.getElementById('openMenuBtn');
//   // **Додати id="openMenuBtn до кнопки "Відкрити меню" в HTML**
//   // **Додати id="closeMenuBtn до кнопки "Закрити меню" в HTML**
//   // **Додати id="mobileMenu" до div з класом "mobile-menu" в HTML**
// const closeMenuBtn = document.getElementById('closeMenuBtn');
// const mobileMenu = document.getElementById('mobileMenu');


//   openMenuBtn.onclick = function () {
//     mobileMenu.style.display = 'block';
//   };

//   closeMenuBtn.onclick = function () {
//     mobileMenu.style.display = 'none';
//   };

//   window.onclick = function (event) {
//     if (event.target === modal) {
//       modal.style.display = 'none';
//     }
//   };
// });

(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-menu-open]'),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-menu-close]'),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }
})();