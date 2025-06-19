// Responsive navbar toggle
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Modal interactivity
window.openModal = () => {
  document.getElementById('modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

window.closeModal = () => {
  document.getElementById('modal').classList.add('hidden');
  document.body.style.overflow = '';
};

// Form validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    e.preventDefault();
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    alert('Please enter a valid email address.');
    e.preventDefault();
    return;
  }

  alert('Message sent successfully!');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Auto close modal on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

