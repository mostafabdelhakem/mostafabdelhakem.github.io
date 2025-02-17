// Toggle Hamburger Menu
document.getElementById("menu-toggle").addEventListener("click", function () {
  this.classList.toggle("active");
  document.getElementById("nav-links").classList.toggle("active");
  document.getElementById("menu-overlay").classList.toggle("active");
});

// Close Menu When Overlay is Clicked
document.getElementById("menu-overlay").addEventListener("click", function () {
  document.getElementById("menu-toggle").classList.remove("active");
  document.getElementById("nav-links").classList.remove("active");
  this.classList.remove("active");
});

// Close Menu When a Link is Clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menu-toggle").classList.remove("active");
    document.getElementById("nav-links").classList.remove("active");
    document.getElementById("menu-overlay").classList.remove("active");
  });
});

// Typewriter effect
class TypeWriter {
  constructor(txtElement, words, wait = 2000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 100;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }
    setTimeout(() => this.type(), typeSpeed);
  }
}
// Init typewriter
document.addEventListener("DOMContentLoaded", () => {
  const txtElement = document.querySelector(".typewriter");
  new TypeWriter(txtElement, portfolioData.roles, 1000);
});

// Populate skills
function populateSkills() {
  const skillsContainer = document.getElementById("skills-container");
  portfolioData.skills.forEach((skill) => {
    const skillElement = document.createElement("div");
    skillElement.className = "skill-tag";
    skillElement.innerHTML = `${skill.name}`;
    skillsContainer.appendChild(skillElement);
  });
}

// Populate experience
function populateExperience() {
  const experienceContainer = document.getElementById("experience-container");
  portfolioData.experience.forEach((exp) => {
    const expElement = document.createElement("div");
    expElement.className = "experience-item";
    expElement.innerHTML = `
            <h3>${exp.title} | ${exp.company}</h3>
            <p style="color: var(--gray)">${exp.period}</p>
            <p>${exp.description}</p>
        `;
    experienceContainer.appendChild(expElement);
  });
}

function populateProjects() {
  const projectsContainer = document.getElementById("projects-container");
  portfolioData.projects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.className = "project";
    projectElement.innerHTML = `
      <div class="project-image-container">
        <img src="${project.image}" alt="${
      project.title
    }" class="project-image">
      </div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p style="color: var(--gray)">Technologies: ${project.technologies.join(
        ", "
      )}</p>
      <a href="${
        project.link
      }" class="project-link" target="_blank" style="text-decoration: none; color: var(--19283e)">View Project →</a>
    `;
    projectsContainer.appendChild(projectElement);
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Populate volunteering
function populateVolunteering() {
  const volunteeringContainer = document.getElementById(
    "volunteering-container"
  );
  portfolioData.volunteering.forEach((volunteering) => {
    const volunteeringElement = document.createElement("div");
    volunteeringElement.className = "volunteering";
    volunteeringElement.innerHTML = `
            <h3>${volunteering.position}</h3>
            <p>${volunteering.place}</p>
            <p style="color: var(--gray)">${volunteering.period}</p>
        `;
    volunteeringContainer.appendChild(volunteeringElement);
  });
}

// Populate courses
function populateCourses() {
  const coursesContainer = document.getElementById("courses-container");
  portfolioData.courses.forEach((course) => {
    const courseElement = document.createElement("div");
    courseElement.className = "course";
    courseElement.innerHTML = `
            <h3>${course.name}</h3>
            <p>${course.place}</p>
            <p style="color: var(--gray)">${course.date}</p>
        `;
    coursesContainer.appendChild(courseElement);
  });
}

// Intersection Observer for section animations
const sectionObserverOptions = {
  threshold: 0.1, // Trigger animation when 10% of the section is visible
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate"); // Add the "animate" class
      observer.unobserve(entry.target); // Stop observing after animation is triggered
    }
  });
}, sectionObserverOptions);

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  sectionObserver.observe(section);
});

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !navbar.classList.contains("scroll-down")) {
    navbar.classList.remove("scroll-up");
    navbar.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    navbar.classList.contains("scroll-down")
  ) {
    navbar.classList.remove("scroll-down");
    navbar.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});

// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
  populateSkills();
  populateExperience();
  populateProjects();
  populateCourses();
  populateVolunteering();
});

// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Hide Loading Animation
window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  loading.style.display = "none";
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const formStatus = document.getElementById("form-status");

    // Simulate form submission
    formStatus.textContent = "Message sent successfully!";
    formStatus.style.color = "green";

    // Clear form after submission
    setTimeout(() => {
      this.reset();
      formStatus.textContent = "";
    }, 2000);
  });
