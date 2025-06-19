document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });

  window.openModal = function () {
    document.getElementById('modal').classList.remove('hidden');
  };

  window.closeModal = function () {
    document.getElementById('modal').classList.add('hidden');
  };

  document.getElementById('contact-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all fields before submitting.');
      e.preventDefault();
    }
  });
});
