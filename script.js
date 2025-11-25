// Menu toggle mobile
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    if (!expanded) {
      navList.style.display = 'block';
      navList.setAttribute('aria-hidden', 'false');
    } else {
      navList.style.display = '';
      navList.setAttribute('aria-hidden', 'true');
    }
  });
}

// Smooth scroll internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (window.innerWidth <= 560 && navList) {
        navList.style.display = '';
        navList.setAttribute('aria-hidden', 'true');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// Form validation
const contactForm = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    feedback.textContent = '';
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      feedback.textContent = 'Por favor, preencha todos os campos.';
      feedback.style.color = 'crimson';
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      feedback.textContent = 'Email inválido.';
      feedback.style.color = 'crimson';
      return;
    }
    feedback.style.color = 'green';
    feedback.textContent = 'Mensagem enviada (simulação). Obrigada!';
    setTimeout(() => contactForm.reset(), 1200);
  });
}

// set year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();