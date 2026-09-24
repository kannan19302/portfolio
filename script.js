document.getElementById('year').textContent = new Date().getFullYear();

const menuButton = document.querySelector('.menu-button');
const siteNav = document.getElementById('site-nav');

menuButton.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  });
});

const chapters = [...document.querySelectorAll('.journey-chapter')];
if (chapters.length) document.body.classList.add('has-journey-motion');
const artworks = [...document.querySelectorAll('.stage-art')];
const stageCount = document.getElementById('stage-count');
const stageEra = document.getElementById('stage-era');
const stagePlace = document.getElementById('stage-place');
const stageSubtitle = document.getElementById('stage-subtitle');
const progressFill = document.getElementById('progress-fill');
const storyLabels = [
  { era: 'School years', place: 'Bodinayakanur', subtitle: 'Theni district, Tamil Nadu' },
  { era: '2019 – 2023', place: 'MCET', subtitle: 'College and code' },
  { era: 'Jan – Jun 2023', place: 'Java', subtitle: 'Cognizant internship' },
  { era: 'Sep 2023 – Today', place: 'Cognizant', subtitle: 'Enterprise applications' },
  { era: 'Since Jun 2026', place: 'UniERP', subtitle: 'Personal project' },
];

let activeChapter = -1;
let ticking = false;

function updateJourney() {
  ticking = false;
  if (!chapters.length) return;

  const focusLine = window.innerHeight * (window.innerWidth <= 700 ? 0.72 : 0.52);
  let closest = 0;
  let closestDistance = Infinity;

  chapters.forEach((chapter, index) => {
    const box = chapter.getBoundingClientRect();
    const distance = Math.abs(box.top + box.height / 2 - focusLine);
    if (distance < closestDistance) {
      closest = index;
      closestDistance = distance;
    }
  });

  if (closest !== activeChapter) {
    activeChapter = closest;
    chapters.forEach((chapter, index) => chapter.classList.toggle('is-active', index === closest));
    artworks.forEach((art, index) => art.classList.toggle('is-active', index === closest));
    stageCount.textContent = String(closest + 1).padStart(2, '0');
    stageEra.textContent = storyLabels[closest].era;
    stagePlace.textContent = storyLabels[closest].place;
    stageSubtitle.textContent = storyLabels[closest].subtitle;
  }

  const first = chapters[0].getBoundingClientRect();
  const last = chapters[chapters.length - 1].getBoundingClientRect();
  const start = first.top + first.height / 2;
  const end = last.top + last.height / 2;
  const progress = Math.max(0, Math.min(1, (focusLine - start) / (end - start)));
  progressFill.style.width = (progress * 100).toFixed(1) + '%';
}

function requestJourneyUpdate() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(updateJourney);
  }
}

window.addEventListener('scroll', requestJourneyUpdate, { passive: true });
window.addEventListener('resize', requestJourneyUpdate);
requestJourneyUpdate();

const stage = document.querySelector('.journey-stage');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (stage && !reducedMotion.matches) {
  stage.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    const box = stage.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    stage.style.setProperty('--tilt-x', (-y * 9).toFixed(2) + 'deg');
    stage.style.setProperty('--tilt-y', (x * 9).toFixed(2) + 'deg');
  });
  stage.addEventListener('pointerleave', () => {
    stage.style.setProperty('--tilt-x', '0deg');
    stage.style.setProperty('--tilt-y', '0deg');
  });
}
