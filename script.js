const body = document.body;
const toggleBtn = document.getElementById("toggleBtn");
const form = document.getElementById("contactForm");
const responseMsg = document.getElementById("responseMsg");

toggleBtn.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  toggleBtn.textContent = body.classList.contains("dark-mode")
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";
});

form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent page reload

  const formData = new FormData(form);

  fetch("https://formspree.io/f/xovwavwp", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json"
    }
  })
    .then((response) => {
      if (response.ok) {
        responseMsg.textContent = "Thank you! Your message has been sent.";
        responseMsg.style.color = "green";
        form.reset(); // clear the form
      } else {
        responseMsg.textContent = "Oops! Something went wrong.";
        responseMsg.style.color = "red";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      responseMsg.textContent = "Error sending message.";
      responseMsg.style.color = "red";
    });
});


