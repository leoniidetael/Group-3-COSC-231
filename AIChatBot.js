const fab = document.getElementById("fab");
const menu = document.getElementById("fab-menu");

// Toggle menu visibility when the FAB is clicked
fab.addEventListener("click", () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Hide the menu when clicking outside of it
document.addEventListener("click", (event) => {
  if (!fab.contains(event.target) && !menu.contains(event.target)) {
    menu.style.display = "none";
  }
});

