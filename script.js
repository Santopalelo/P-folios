// ------------------------------
// 1. Smooth Scroll for Nav Links
// ------------------------------
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: "smooth" });
  });
});


// -------------------------------------
// 2. Mobile Menu Toggle (Auto-Creation)
// -------------------------------------
(function setupMobileMenu() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  // Create menu button
  const btn = document.createElement('button');
  btn.textContent = "Menu";
  btn.className = "menu-btn";
  document.body.insertBefore(btn, nav);

  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
})();


// ----------------------------------------
// 3. Project Modal Popup for project-card
// ----------------------------------------
(function projectModal() {
  const cards = document.querySelectorAll('.project-card');

  if (cards.length === 0) return;

  // Create modal elements
  const modalBg = document.createElement('div');
  modalBg.className = 'modal-bg';

  const modalBox = document.createElement('div');
  modalBox.className = 'modal-box';

  const modalTitle = document.createElement('h3');
  const modalDesc = document.createElement('p');
  const closeBtn = document.createElement('button');

  closeBtn.textContent = "Close";
  closeBtn.className = "close-btn";

  modalBox.appendChild(modalTitle);
  modalBox.appendChild(modalDesc);
  modalBox.appendChild(closeBtn);
  modalBg.appendChild(modalBox);
  document.body.appendChild(modalBg);

  // Click card to open modal
  cards.forEach(card => {
    card.style.cursor = "pointer";
    card.addEventListener('click', () => {
      modalTitle.innerText = card.querySelector('h3').innerText;
      modalDesc.innerText = card.querySelector('p').innerText;
      modalBg.classList.add('open');
    });
  });

  // Close modal
  closeBtn.addEventListener('click', () => modalBg.classList.remove('open'));
  modalBg.addEventListener('click', (e) => {
    if (e.target === modalBg) modalBg.classList.remove('open');
  });
})();


// ----------------------------
// 4. Auto-update footer year
// ----------------------------
(function updateYear() {
  const footer = document.querySelector('footer p');
  if (!footer) return;

  const year = new Date().getFullYear();
  footer.innerHTML = `© ${year} Lawrence Onwe. All Rights Reserved.`;
})();


// ----------------------------
// 5. Contact Form Handler
// ----------------------------
(function contactFormHandler() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('name');
  const messageInput = document.getElementById('message');
  const submitBtn = form.querySelector('button[type="submit"]');

  // Form submission handler
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    // Validation
    if (!name || !message) {
      alert('Please fill in all fields');
      return;
    }

    if (name.length < 2) {
      alert('Name must be at least 2 characters long');
      return;
    }

    if (message.length < 10) {
      alert('Message must be at least 10 characters long');
      return;
    }

    // Disable button to prevent multiple submissions
    submitBtn.disabled = true;
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';

    try {
      // Send email using EmailJS (free service)
      // First, sign up at https://www.emailjs.com/ and get your service ID and template ID
      emailjs.init("XHKA6ZgQDPotNXTR-");

      await emailjs.send('service_j3toixv', 'template_vd4scih', {
        from_name: name,
        message: message,
        to_email: 'onwesomtolawrence@gmail.com'
      });

      alert('Email sent successfully! Thank you for reaching out.');
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      // Fallback: Open email client
      const mailtoLink = `mailto:onwesomtolawrence@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
})();


// ----------------------------
// 6. WhatsApp Button Handler
// ----------------------------
(function whatsappHandler() {
  const whatsappBtn = document.getElementById('whatsappBtn');
  if (!whatsappBtn) return;

  const phoneNumber = '2349026094432'; // WhatsApp number without + sign
  const defaultMessage = 'Hi Lawrence, I would like to connect with you!';

  whatsappBtn.addEventListener('click', () => {
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();

    // Create personalized message if name is provided
    let message = defaultMessage;
    if (name && name.length >= 2) {
      message = `Hi Lawrence, I'm ${name} and would like to connect with you!`;
    }

    // Open WhatsApp Web or App
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  });
})();
