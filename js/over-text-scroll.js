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
      }
    );
  };

  
  overCards.forEach((card) => {
    const overText = card.querySelector('.over-text');

    overText.addEventListener('click', () => {
      overText.style.transform = 'translateY(100%)';
    });
  });

  window.addEventListener('scroll', handleScroll);
});




// document.addEventListener('DOMContentLoaded', () => {
//   if (window.innerWidth >= 1158) return;

//   const overCards = document.querySelectorAll('.over-card');

//   const handleScroll = () => {
//     const middle = window.innerHeight / 2;

//     overCards.forEach((card) => {
//       const overText = card.querySelector('.over-text');
//       const rect = card.getBoundingClientRect();

//       const isManuallyHidden = overText.classList.contains('manually-hidden');

//       if (rect.top < middle && rect.bottom > middle) {
//         if (!isManuallyHidden) {
//           overText.style.transform = 'translateY(0)';
//         }
//       } else {
//         if (!isManuallyHidden) {
//           overText.style.transform = 'translateY(100%)';
//         }
//       }
//     });
//   };

//   overCards.forEach((card) => {
//     const overText = card.querySelector('.over-text');

//     overText.addEventListener('click', () => {
//       const computedTransform = getComputedStyle(overText).transform;

//       const matrix = new WebKitCSSMatrix(computedTransform);
//       const currentTranslateY = matrix.m42; 

//       const isVisible = currentTranslateY === 0;

//       if (isVisible) {
//         overText.style.transform = 'translateY(100%)';
//         overText.classList.add('manually-hidden');
//       } else {
//         overText.style.transform = 'translateY(0)';
//         overText.classList.remove('manually-hidden');
//       }
//     });
//   });

//   window.addEventListener('scroll', handleScroll);
// });
