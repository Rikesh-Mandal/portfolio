function togglemenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

fetch("./assets/about.txt")
  .then((response) => response.text())
  .then((text) => {
    document.getElementById("about-text").innerText = text;
  })
  .catch((err) => {
    console.error("Error loading About Me:", err);
  });
