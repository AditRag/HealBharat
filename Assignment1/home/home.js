// theme.js
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("themeToggle");
  const key = "site-theme";

  // apply saved theme or prefer-color-scheme
  const saved = localStorage.getItem(key);
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const startDark = saved ? saved === "dark" : prefersDark;
  document.body.classList.toggle("dark", startDark);
  if (btn) btn.textContent = startDark ? "☀️ Light Mode" : "🌙 Dark Mode";

  if (!btn) return;

  btn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem(key, isDark ? "dark" : "light");
    btn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  });
});
