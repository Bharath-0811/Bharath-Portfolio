
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      form.reset();
      message.innerText = "✅ Message sent successfully!";
      message.style.color = "green";
    }).catch(error => {
      message.innerText = "❌ Failed to send. Please try again.";
      message.style.color = "red";
    });
  });
  
  const toggleBtn = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

