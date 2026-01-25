
const cards = document.querySelectorAll(".card");

cards.forEach((card, i) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";

  setTimeout(() => {
    card.style.transition = "0.6s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, i * 150);
});


cards.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y - rect.height / 2) / 40;
    const rotateY = (x - rect.width / 2) / 40;

    card.style.transform = `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(600px) rotateX(0) rotateY(0)";
  });
});



const heroTitle = document.querySelector(".hero h2");

if (heroTitle) {
  const text = heroTitle.textContent;
  heroTitle.textContent = "";

  let i = 0;

  function type() {
    if (i < text.length) {
      heroTitle.textContent += text.charAt(i);
      i++;
      setTimeout(type, 60);
    }
  }

  type();
}
