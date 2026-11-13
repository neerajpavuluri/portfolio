const typedElement = document.querySelector('.typed');
const phrases = ['useful', 'human', 'alive', 'meaningful'];

if (typedElement) {
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const tick = () => {
    const current = phrases[phraseIndex];
    if (!isDeleting) {
      charIndex++;
      typedElement.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(tick, 1200);
        return;
      }
    } else {
      charIndex--;
      typedElement.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    setTimeout(tick, isDeleting ? 50 : 110);
  };

  setTimeout(tick, 700);
}
