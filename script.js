// Get the button element
const button = document.getElementById('myButton');

// Add an event listener for clicks
button.addEventListener('click', () => {
  // Change the button's background color
  button.style.backgroundColor = 'red';
  document.getElementById('message').textContent = 'Button clicked!';
});

/// Get the toggle element
const toggle = document.getElementById('toggle');

// Add an event listener for clicks
toggle.addEventListener('click', () => {
  // Toggle the theme (e.g., change background color)
  document.body.classList.toggle('dark-mode');
  document.getElementById('theme-message').textContent = `Theme: ${document.body.classList.contains('dark-mode') ? 'Dark' : 'Light'}`;
});

// Get the form elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Add event listeners for form submission
document.getElementById('submit').addEventListener('click', (e) => {
  e.preventDefault();

  // Validate input fields
  if (!nameInput.value.trim()) {
    alert('Please enter your name!');
    return;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailInput.value)) {
    alert('Invalid email address!');
    return;
  }

  // Validate password (e.g., check length)
  if (passwordInput.value.length < 8) {
    alert('Password must be at least 8 characters long!');
    return;
  }

  // Form is valid, submit it
  console.log('Form submitted successfully!');
});

// Get the error message element
const errorMessage = document.getElementById('error-message');

// Add an event listener for form input changes
nameInput.addEventListener('input', () => {
  if (!nameInput.value.trim()) {
    errorMessage.textContent = 'Please enter your name!';
  } else {
    errorMessage.textContent = '';
  }
});

emailInput.addEventListener('input', () => {
  if (!emailRegex.test(emailInput.value)) {
    errorMessage.textContent = 'Invalid email address!';
  } else {
    errorMessage.textContent = '';
  }
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length < 8) {
    errorMessage.textContent = 'Password must be at least 8 characters long!';
  } else {
    errorMessage.textContent = '';
  }
});

// Get the toggle button element
const faqToggle = document.getElementById('faq-toggle');

// Get the FAQs container element
const faqsContainer = document.querySelector('.faqs');

// Add an event listener to the toggle button
faqToggle.addEventListener('click', () => {
  // Toggle the visibility of the FAQs
  faqsContainer.classList.toggle('hidden');
});