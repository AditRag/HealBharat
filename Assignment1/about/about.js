   const toggleBtn = document.getElementById("themeToggle");
        let darkMode = false;

        toggleBtn.addEventListener("click", () => {
            darkMode = !darkMode;
            document.body.classList.toggle("dark", darkMode);
            toggleBtn.textContent = darkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
        });