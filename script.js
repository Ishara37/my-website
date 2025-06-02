const body = document.body;
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  // Update button text based on mode
  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "Switch to Light Mode";
  } else {
    toggleBtn.textContent = "Switch to Dark Mode";
  }
});
