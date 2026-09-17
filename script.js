/* ============================
           MOBILE MENU
        ============================ */

function toggleMenu() {
  const nav = document.getElementById("nav");

  nav.classList.toggle("active");
}

/* ============================
           TYPING ANIMATION
        ============================ */

const words = [
  "Medical Student 🩺",
  "Guitarist 🎸",
  "Future Healthcare Professional",
  "Creative Learner",
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const typing = document.getElementById("typing");

  const currentWord = words[wordIndex];

  if (!deleting) {
    typing.textContent = currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {
      deleting = true;

      setTimeout(typeEffect, 1500);

      return;
    }
  } else {
    typing.textContent = currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      deleting = false;

      wordIndex++;

      if (wordIndex === words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

// Show the RS fallback only if the profile image cannot be loaded.
const profileImage = document.querySelector(".profile-inner img");
const profileFallback = document.querySelector(".profile-fallback");

profileImage.addEventListener("load", () => {
  profileFallback.style.display = "none";
});

profileImage.addEventListener("error", () => {
  profileImage.style.display = "none";
  profileFallback.style.display = "flex";
});

if (profileImage.complete && profileImage.naturalWidth > 0) {
  profileFallback.style.display = "none";
}

/* ============================
           CONTACT FORM
        ============================ */

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const message = document.getElementById("message").value.trim();

    const status = document.getElementById("messageStatus");

    if (name && message) {
      const facebookURL =
        "https://www.facebook.com/share/1LnfXcsH1W/?mibextid=wwXIfr";

      // Open the supplied Facebook page.
      window.open(facebookURL, "_blank", "noopener,noreferrer");

      status.textContent =
        "✓ Opening Facebook... Please send your message there.";

      this.reset();
    }
  });

/* ============================
           SCROLL REVEAL
        ============================ */

const cards = document.querySelectorAll(
  ".about-card, .timeline-item, .skill, .card",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.15,
  },
);

cards.forEach((card) => {
  card.style.opacity = "0";

  card.style.transform = "translateY(30px)";

  card.style.transition = "0.7s ease";

  observer.observe(card);
});
