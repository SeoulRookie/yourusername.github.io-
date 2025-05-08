function submitForm(event) {
    event.preventDefault();
    alert("Thank you! Your message has been submitted.");
  }
  
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
      console.log(`Navigating to: ${link.textContent}`);
    });
  });
  