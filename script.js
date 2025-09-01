//  Custom Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default submission

  const name = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Error elements
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const formResult = document.getElementById('formResult');

  // Clear previous errors
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  formResult.textContent = '';

  let valid = true;

  // Validate name
  if (name.length < 2) {
    nameError.textContent = 'Name must be at least 2 characters.';
    valid = false;
  }

  // Validate email with regex
  const emailPattern = /^\S+@\S+\.\S+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = 'Please enter a valid email.';
    valid = false;
  }

  // Validate message
  if (message.length < 10) {
    messageError.textContent = 'Message must be at least 10 characters.';
    valid = false;
  }

  if (valid) {
    formResult.textContent = 'Form submitted successfully!';
    formResult.style.color = 'green';
    document.getElementById('contactForm').reset();
  }
});

//  Interactive Feature 1: Toggle FAQ Answer
document.getElementById('toggleFaq').addEventListener('click', function () {
  const answer = document.getElementById('faqAnswer');
  if (answer.style.display === 'none') {
    answer.style.display = 'block';
    this.textContent = 'Hide Answer';
  } else {
    answer.style.display = 'none';
    this.textContent = 'Show Answer';
  }
});

//  Interactive Feature 2: Live Text Preview
document.getElementById('liveInput').addEventListener('input', function () {
  document.getElementById('livePreview').textContent = this.value;
});

//  Link Alert Interaction
document.getElementById('helpLink').addEventListener('click', function (e) {
  e.preventDefault();
  alert('For help, please email us at support@example.com');
});