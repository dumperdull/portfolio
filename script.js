// Fade in cards (no transform conflicts)

const cards = document.querySelectorAll(".card");

cards.forEach((card, i) => {
  card.style.opacity = "0";

  setTimeout(() => {
    card.style.transition = "opacity 0.6s ease";
    card.style.opacity = "1";
  }, i * 150);
});


// Typewriter hero title (safe version)

const heroTitle = document.querySelector(".hero h2");

if (heroTitle) {
  const text = heroTitle.innerText;
  heroTitle.innerText = "";

  let index = 0;

  function type() {
    if (index < text.length) {
      heroTitle.innerText += text.charAt(index);
      index++;
      setTimeout(type, 50);
    }
  }

  type();
}
