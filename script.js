const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// IMPORTANT: Replace these placeholders in index.html before publishing.
const email = "lakshyarajpal10@gmail.com";
const linkedinUrl = "https://www.linkedin.com/in/lakshya-rajpal-0a06ba337/"; // Paste your full LinkedIn profile URL, or leave blank.
document.getElementById("emailButton").href = `mailto:${email}`;
document.querySelectorAll('a[href="mailto:your.email@gmail.com"]').forEach((link) => {
  link.href = `mailto:${email}`;
});

const linkedinLink = document.getElementById("linkedinLink");
if (linkedinUrl) {
  linkedinLink.href = linkedinUrl;
  linkedinLink.target = "_blank";
  linkedinLink.rel = "noopener noreferrer";
} else {
  linkedinLink.addEventListener("click", (event) => event.preventDefault());
  linkedinLink.title = "Add your LinkedIn profile URL in script.js";
}
