const html = document.documentElement;
const topbar = document.querySelector('.topbar');
const navToggle = document.getElementById('navToggle');
const topNav = document.getElementById('topNav');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const volume = document.getElementById('volume');
const volumeValue = document.getElementById('volumeValue');
const progress = document.getElementById('progress');
const completion = document.getElementById('completion');
const smartToggle = document.getElementById('smartToggle');
const openDialogBtn = document.getElementById('openDialogBtn');
const trendDialog = document.getElementById('trendDialog');

function paintRange(element) {
  const min = Number(element.min || 0);
  const max = Number(element.max || 100);
  const current = Number(element.value);
  const percent = ((current - min) * 100) / (max - min);
  element.style.background = `linear-gradient(90deg, var(--accent) ${percent}%, transparent ${percent}%), var(--surface)`;
}

function setTheme(nextTheme) {
  html.setAttribute('data-theme', nextTheme);
  themeIcon.textContent = nextTheme === 'dark' ? '🌙' : '☀️';
}

function closeMobileNav() {
  topbar.classList.remove('nav-open');
  navToggle.setAttribute('aria-expanded', 'false');
}

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme') || 'light';
  setTheme(current === 'light' ? 'dark' : 'light');
  paintRange(volume);
  paintRange(progress);
  paintRange(completion);
});

volume.addEventListener('input', () => {
  volumeValue.textContent = `${volume.value}%`;
  paintRange(volume);
});

progress.addEventListener('input', () => {
  paintRange(progress);
});

completion.addEventListener('input', () => {
  paintRange(completion);
});

smartToggle.addEventListener('click', () => {
  const isOn = smartToggle.getAttribute('aria-checked') === 'true';
  smartToggle.setAttribute('aria-checked', String(!isOn));
});

openDialogBtn.addEventListener('click', () => {
  trendDialog.showModal();
});

navToggle.addEventListener('click', () => {
  const isOpen = topbar.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

topNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    if (window.matchMedia('(max-width: 960px)').matches) {
      closeMobileNav();
    }
  });
});

setTheme('light');
paintRange(volume);
paintRange(progress);
paintRange(completion);
