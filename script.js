const phrases = ['useful things', 'small experiments', 'new ideas', 'better questions'];
const typed = document.querySelector('.typed');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (typed && !reduceMotion) {
  let phraseIndex = 0;
  let characterIndex = phrases[0].length;
  let deleting = true;

  function typeNext() {
    const phrase = phrases[phraseIndex];
    characterIndex += deleting ? -1 : 1;
    typed.textContent = phrase.slice(0, characterIndex);

    let delay = deleting ? 55 : 95;
    if (deleting && characterIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 350;
    } else if (!deleting && characterIndex === phrases[phraseIndex].length) {
      deleting = true;
      delay = 1500;
    }
    window.setTimeout(typeNext, delay);
  }

  window.setTimeout(typeNext, 1800);
}
