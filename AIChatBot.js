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

// User Profile Menu
const userProfileBtn = document.getElementById("user-profile-btn");
const userProfileMenu = document.getElementById("user-profile-menu");

// Toggle user profile menu visibility
userProfileBtn.addEventListener("click", () => {
  userProfileMenu.style.display = userProfileMenu.style.display === "block" ? "none" : "block";
});

// Hide the user profile menu when clicking outside of it
document.addEventListener("click", (event) => {
  if (!userProfileBtn.contains(event.target) && !userProfileMenu.contains(event.target)) {
    userProfileMenu.style.display = "none";
  }
});

