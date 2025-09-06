document.getElementById("theme-toggle").onclick = function () {
  if (document.documentElement.getAttribute("data-theme") === "dark") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
};
