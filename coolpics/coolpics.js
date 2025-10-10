document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector(".menu");

  // Toggle mobile menu
  menuButton.addEventListener("click", function () {
    menu.classList.toggle("hide");
  });

  // Handle resize to reset menu visibility
  function handleResize() {
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }

  handleResize();
  window.addEventListener("resize", handleResize);

  // Modal viewer setup
  const images = document.querySelectorAll(".gallery img");

  images.forEach(image => {
    image.addEventListener("click", function () {
      // Get the full-size image path
      const smallSrc = image.getAttribute("src");
      const baseName = smallSrc.split("-")[0]; // e.g. "norris"
      const fullSrc = baseName + "-full.jpeg";

      // Create dialog
      const dialog = document.createElement("dialog");
      dialog.classList.add("viewer");

      dialog.innerHTML = `
        <img src="${fullSrc}" alt="${image.alt}">
        <button class="close-viewer">X</button>
      `;

      document.body.appendChild(dialog);
      dialog.showModal();

      // Close button
      dialog.querySelector(".close-viewer").addEventListener("click", () => {
        dialog.close();
        dialog.remove();
      });

      // Close when clicking outside image
      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
          dialog.close();
          dialog.remove();
        }
      });
    });
  });
});