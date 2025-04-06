document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('myModal');
  const openBtn = document.getElementById('openModalBtn');
  const closeBtn = document.querySelector('.btn-close');

  openBtn.onclick = function () {
    modal.style.display = 'block';
  };

  closeBtn.onclick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
});