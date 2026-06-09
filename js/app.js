const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');

const mobileMenu = document.createElement('div');
mobileMenu.className = 'mobile-menu';

const mobileNavList = document.createElement('ul');
[
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
].forEach(item => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = `./index.html#${item.id}`;
  a.textContent = item.label;
  li.appendChild(a);
  mobileNavList.appendChild(li);
});

const mobileDownload = document.createElement('a');
mobileDownload.href = './cv/Sasha-Lee-du-Toit-CV.html?print=1';
mobileDownload.className = 'nav-cta download-cv-trigger';
mobileDownload.textContent = 'Download CV';

mobileMenu.appendChild(mobileNavList);
mobileMenu.appendChild(mobileDownload);
document.body.appendChild(mobileMenu);

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

const roles = [
  'Multimedia Specialist',
  'Graphic Designer',
  'Illustrator',
  'Visual Content Creator'
];
let roleIdx = 0, charIdx = 0, deleting = false;
const typeEl = document.getElementById('typewriter');

function type() {
  const current = roles[roleIdx];
  typeEl.textContent = deleting
    ? current.substring(0, charIdx - 1)
    : current.substring(0, charIdx + 1);
  deleting ? charIdx-- : charIdx++;
  let delay = deleting ? 55 : 95;
  if (!deleting && charIdx === current.length) { delay = 2800; deleting = true; }
  else if (deleting && charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; delay = 500; }
  setTimeout(type, delay);
}

type();

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up, .timeline-item').forEach(el => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

document.querySelectorAll('img[data-fallback-icon="true"]').forEach(img => {
  img.addEventListener('error', () => {
    img.style.display = 'none';
    const fallbackIcon = img.nextElementSibling;
    if (fallbackIcon) {
      fallbackIcon.style.display = 'block';
    }
  });
});

const copyEmailBtn = document.getElementById('copy-email-btn');

if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', async () => {
    const email = copyEmailBtn.dataset.email || 'sashalee.curlewis@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
    } catch (_) {
      const temp = document.createElement('textarea');
      temp.value = email;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
    }

    const original = copyEmailBtn.textContent;
    copyEmailBtn.textContent = 'Copied!';
    copyEmailBtn.disabled = true;

    setTimeout(() => {
      copyEmailBtn.textContent = original;
      copyEmailBtn.disabled = false;
    }, 1400);
  });
}

document.querySelectorAll('.download-cv-trigger').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const cvUrl = link.getAttribute('href') || 'cv/Sasha-Lee-du-Toit-CV.html?print=1';
    const popup = window.open(cvUrl, '_blank', 'noopener,noreferrer');
    if (!popup) {
      alert('Please allow pop-ups to open the CV print dialog.');
    }
  });
});

