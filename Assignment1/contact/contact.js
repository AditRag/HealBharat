const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const themeToggle = document.getElementById("themeToggle");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    showMessage("Please fill in all fields.", "error");
    return;
  }

  if (!validateEmail(email)) {
    showMessage("Please enter a valid email address.", "error");
    return;
  }

  // Simulate successful submission
  showMessage("Your message has been sent successfully!", "success");
  form.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function showMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = `message ${type}`;
}

// Theme Toggle
let darkMode = false;
themeToggle.addEventListener("click", () => {
  darkMode = !darkMode;
  document.body.classList.toggle("dark", darkMode);
  themeToggle.textContent = darkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
});
