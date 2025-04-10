document.addEventListener('DOMContentLoaded', () => {
  
  if (window.innerWidth >= 1158) return;

  const overCards = document.querySelectorAll('.over-card');

  const handleScroll = () => {
    const middle = window.innerHeight / 2;

    overCards.forEach((card) => {
      const overText = card.querySelector('.over-text');
      const rect = card.getBoundingClientRect();

      if (rect.top < middle && rect.bottom > middle) {
        overText.style.transform = 'translateY(0)';
      } else {
        overText.style.transform = 'translateY(100%)';
      }
    });
  };

  
  overCards.forEach((card) => {
    const overText = card.querySelector('.over-text');

    overText.addEventListener('click', () => {
      overText.style.transform = 'translateY(100%)';
    });
  });

  window.addEventListener('scroll', handleScroll);
});
