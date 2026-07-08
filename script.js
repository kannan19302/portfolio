// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const storedTheme = localStorage.getItem('theme');
const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

if (initialTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
}

themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Typed role rotation
const typedEl = document.getElementById('typed-role');
const roles = ['Full-Stack Java Engineer', 'Spring Boot Developer', 'Enterprise Systems Builder', 'AI-Assisted Product Builder'];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (typedEl && !reduceMotion) {
  let roleIndex = 0;
  let charIndex = roles[0].length;
  let deleting = false;

  const tick = () => {
    const current = roles[roleIndex];
    charIndex += deleting ? -1 : 1;
    typedEl.textContent = current.slice(0, charIndex);

    let delay = deleting ? 40 : 70;

    if (!deleting && charIndex === current.length) {
      delay = 1800;
      deleting = true;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 300;
    }

    setTimeout(tick, delay);
  };

  setTimeout(tick, 1800);
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}
