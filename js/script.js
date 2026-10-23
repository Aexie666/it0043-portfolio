console.log("JavaScript is connected!");
const menuButton = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");
menuButton.addEventListener("click", function() {
   nav.classList.toggle("hidden");
});
// Dark mode
const darkModeButton = document.getElementById("dark-mode");
darkModeButton.addEventListener("click", function() {
   document.body.classList.toggle("dark");
});
// Dynamic content from array

const projects = [

    { title: "Project 1", description: "My first project." },

    { title: "Project 2", description: "My second project." },

    { title: "Project 3", description: "My third project." }

];

const projectList = document.getElementById("project-list");

projects.forEach(function(project) {

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
<h3>${project.title}</h3>
<p>${project.description}</p>

    `;

    projectList.appendChild(card);

});
 
// Contact form validation

const contactForm = document.getElementById("contact-form");

const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const messageInput = document.getElementById("message");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let valid = true;

    if (nameInput.value.trim() === "") {

        document.getElementById("name-error").textContent = "Name is required.";

        valid = false;

    } else {

        document.getElementById("name-error").textContent = "";

    }

    if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {

        document.getElementById("email-error").textContent = "Enter a valid email.";

        valid = false;

    } else {

        document.getElementById("email-error").textContent = "";

    }

    if (messageInput.value.trim() === "") {

        document.getElementById("message-error").textContent = "Message is required.";

        valid = false;

    } else {

        document.getElementById("message-error").textContent = "";

    }

    if (valid) {

        alert("Form submitted successfully!");

        contactForm.reset();

    }

});
