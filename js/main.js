/**
 * Portfolio Main JavaScript
 * Handles theme toggling, navigation, section rendering, effects, and form logic.
 *
 * Sections:
 * 1. DOM Elements
 * 2. Theme Toggle
 * 3. Mobile Menu Toggle
 * 4. Scroll Effects
 * 5. Typewriter Effect
 * 6. Skills Section
 * 7. Experience Section
 * 8. Projects Section
 * 9. Education Section
 * 10. Certifications Section
 * 11. Volunteering Section
 * 12. Contact Form
 * 13. Glossy Effects
 * 14. Utilities
 * 15. Initialization
 */

// ==================== 1. DOM Elements ====================
/**
 * Cache all relevant DOM elements for later use.
 */
const loadingElement = document.getElementById("loading");
const themeToggle = document.getElementById("theme-toggle");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const navLinks = document.getElementById("nav-links");
const backToTopButton = document.getElementById("back-to-top");
const skillsContainer = document.getElementById("skills-container");
const skillsCategories = document.getElementById("skills-categories");
const experienceContainer = document.getElementById("experience-container");
const projectsContainer = document.getElementById("projects-container");
const projectCategories = document.getElementById("project-categories");
const educationContainer = document.getElementById("education-container");
const certificationsContainer = document.getElementById(
  "certifications-container"
);
const certificationsCategories = document.getElementById(
  "certifications-categories"
);
const volunteeringContainer = document.getElementById("volunteering-container");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const typewriterElement = document.querySelector(".typewriter");

// ==================== 2. Theme Toggle ====================
/**
 * Handles dark/light theme toggling and persists user preference.
 */
const savedTheme = localStorage.getItem("theme");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (savedTheme === "dark" || (!savedTheme && prefersDarkScheme.matches)) {
  document.documentElement.setAttribute("data-theme", "dark");
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
  document.documentElement.setAttribute("data-theme", "light");
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

// Theme toggle button click event
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  themeToggle.innerHTML =
    newTheme === "dark"
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
});

// ==================== 3. Mobile Menu Toggle ====================
/**
 * Handles mobile navigation menu open/close and accessibility.
 */
mobileMenuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  const isExpanded = mobileMenuToggle.getAttribute("aria-expanded") === "true";
  mobileMenuToggle.setAttribute("aria-expanded", !isExpanded);
  mobileMenuToggle.innerHTML = isExpanded
    ? '<i class="fas fa-bars"></i>'
    : '<i class="fas fa-times"></i>';
});

// Close mobile menu when a navigation link is clicked
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    mobileMenuToggle.setAttribute("aria-expanded", "false");
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// ==================== 4. Scroll Effects ====================
/**
 * Adds scroll-based effects: header shadow, back-to-top button, and active nav link.
 */
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    backToTopButton.style.display = "flex";
  } else {
    header.classList.remove("scrolled");
    backToTopButton.style.display = "none";
  }
});

// Back to top button click event
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Highlight active nav link based on scroll position
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav-link[href*=${sectionId}]`)
        .classList.add("active");
    } else {
      document
        .querySelector(`.nav-link[href*=${sectionId}]`)
        .classList.remove("active");
    }
  });
});

// ==================== 5. Typewriter Effect ====================
/**
 * Animates the typewriter effect for the roles in the hero section.
 */
function typewriterEffect() {
  if (!typewriterElement) return;
  const roles = portfolioData.roles;
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 70;

  function type() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      typewriterElement.innerHTML = `<span class="txt">${currentRole.substring(
        0,
        charIndex
      )}</span>`;
      charIndex--;
      typingSpeed = 50;
      if (charIndex < 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 200;
      }
    } else {
      typewriterElement.innerHTML = `<span class="txt">${currentRole.substring(
        0,
        charIndex
      )}</span>`;
      charIndex++;
      if (charIndex > currentRole.length) {
        isDeleting = true;
        typingSpeed = 100;
      }
    }
    setTimeout(type, typingSpeed);
  }
  setTimeout(type, 500);
}

// ==================== 6. Skills Section ====================
/**
 * Renders the skills section with category filtering.
 */
function renderSkills() {
  if (!skillsContainer || !skillsCategories) return;
  const categories = [
    ...new Set(portfolioData.skills.map((skill) => skill.category)),
  ];
  skillsCategories.innerHTML = `
    <button class="category-btn active" data-category="all">All</button>
    ${categories
      .map(
        (category) => `
      <button class="category-btn" data-category="${category}">
        ${category.charAt(0).toUpperCase() + category.slice(1)}
      </button>
    `
      )
      .join("")}
  `;
  renderSkillsByCategory("all");
  document
    .querySelectorAll("#skills-categories .category-btn")
    .forEach((button) => {
      button.addEventListener("click", () => {
        document
          .querySelectorAll("#skills-categories .category-btn")
          .forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        renderSkillsByCategory(button.dataset.category);
      });
    });
}

/**
 * Renders skills filtered by category.
 * @param {string} category - The selected category.
 */
function renderSkillsByCategory(category) {
  const filteredSkills =
    category === "all"
      ? portfolioData.skills
      : portfolioData.skills.filter((skill) => skill.category === category);
  skillsContainer.innerHTML = filteredSkills
    .map((skill) => `<div class="skill-tag">${skill.name}</div>`)
    .join("");
}

// ==================== 7. Experience Section ====================
/**
 * Renders the work experience section.
 */
function renderExperience() {
  if (!experienceContainer) return;
  experienceContainer.innerHTML = portfolioData.experience
    .map(
      (job) => `
    <div class="card">
      <div class="card-content">
        <h3 class="card-title">${job.title}</h3>
        <div class="card-subtitle">${job.company} | ${job.period}</div>
        <p class="card-text">${job.description}</p>
      </div>
    </div>
  `
    )
    .join("");
}

// ==================== 8. Projects Section ====================
/**
 * Renders the projects section with category filtering.
 */
function renderProjects() {
  if (!projectsContainer || !projectCategories) return;
  const categories = [
    ...new Set(portfolioData.projects.map((project) => project.category)),
  ];
  projectCategories.innerHTML = `
    <button class="category-btn active" data-category="all">All</button>
    ${categories
      .map(
        (category) => `
      <button class="category-btn" data-category="${category}">
        ${category}
      </button>
    `
      )
      .join("")}
  `;
  renderProjectsByCategory("all");
  document
    .querySelectorAll("#project-categories .category-btn")
    .forEach((button) => {
      button.addEventListener("click", () => {
        document
          .querySelectorAll("#project-categories .category-btn")
          .forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        renderProjectsByCategory(button.dataset.category);
      });
    });
}

/**
 * Renders projects filtered by category.
 * @param {string} category - The selected category.
 */
function renderProjectsByCategory(category) {
  const filteredProjects =
    category === "all"
      ? portfolioData.projects
      : portfolioData.projects.filter(
          (project) => project.category === category
        );
  projectsContainer.innerHTML = filteredProjects
    .map(
      (project) => `
    <div class="project-card">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.technologies
            .map((tech) => `<span class="tech-tag">${tech}</span>`)
            .join("")}
        </div>
        <div class="project-buttons">
          ${
            project.liveLink
              ? `<a href="${project.liveLink}" class="btn-demo" target="_blank" rel="noopener noreferrer">
                  <i class="fas fa-external-link-alt"></i> View Demo
                </a>`
              : ""
          }
          ${
            project.githubLink
              ? `<a href="${project.githubLink}" class="btn-code" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-github"></i> View Code
                </a>`
              : ""
          }
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

// ==================== 9. Education Section ====================
/**
 * Renders the education section.
 */
function renderEducation() {
  if (!educationContainer) return;
  educationContainer.innerHTML = portfolioData.education
    .map(
      (edu) => `
    <div class="card">
      <div class="card-content">
        <h3 class="card-title">${edu.degree}</h3>
        <div class="card-subtitle">${edu.institution} | ${edu.period}</div>
        <p class="card-text">
          <strong>Location:</strong> ${edu.location}<br>
          <strong>Grade:</strong> ${edu.grade}
        </p>
      </div>
    </div>
  `
    )
    .join("");
}

// ==================== 10. Certifications Section ====================
/**
 * Renders the certifications section with category filtering.
 */
function renderCertifications() {
  if (!certificationsContainer || !certificationsCategories) return;
  const categories = [
    ...new Set(portfolioData.certifications.map((cert) => cert.category)),
  ];
  certificationsCategories.innerHTML = `
    <button class="category-btn active" data-category="all">All</button>
    ${categories
      .map(
        (category) => `
      <button class="category-btn" data-category="${category}">
        ${category.charAt(0).toUpperCase() + category.slice(1)}
      </button>
    `
      )
      .join("")}
  `;
  renderCertificationsByCategory("all");
  document
    .querySelectorAll("#certifications-categories .category-btn")
    .forEach((button) => {
      button.addEventListener("click", () => {
        document
          .querySelectorAll("#certifications-categories .category-btn")
          .forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        renderCertificationsByCategory(button.dataset.category);
      });
    });
}

/**
 * Renders certifications filtered by category.
 * @param {string} category - The selected category.
 */
function renderCertificationsByCategory(category) {
  const filteredCertifications =
    category === "all"
      ? portfolioData.certifications
      : portfolioData.certifications.filter(
          (cert) => cert.category === category
        );
  certificationsContainer.innerHTML = filteredCertifications
    .map(
      (cert) => `
    <div class="card">
      <div class="card-content">
        <h3 class="card-title">${cert.title}</h3>
        <div class="card-subtitle">${cert.issuer} | ${cert.date}</div>
        <p class="card-text">${cert.description}</p>
        <a href="${cert.credentialUrl}" class="card-link" target="_blank" rel="noopener noreferrer">
          View Credential <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  `
    )
    .join("");
}

// ==================== 11. Volunteering Section ====================
/**
 * Renders the volunteering section.
 */
function renderVolunteering() {
  if (!volunteeringContainer) return;
  volunteeringContainer.innerHTML = portfolioData.volunteering
    .map(
      (vol) => `
    <div class="card">
      <div class="card-content">
        <h3 class="card-title">${vol.title}</h3>
        <div class="card-subtitle">${vol.organization} | ${vol.period}</div>
        <p class="card-text">${vol.description}</p>
      </div>
    </div>
  `
    )
    .join("");
}

// ==================== 12. Contact Form ====================
/**
 * Sets up the contact form with validation and simulated submission.
 */
function setupContactForm() {
  if (!contactForm) return;
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if (!name || !email || !message) {
      formStatus.textContent = "Please fill in all fields.";
      formStatus.style.color = "red";
      return;
    }
    formStatus.textContent = "Sending message...";
    formStatus.style.color = "var(--text)";
    setTimeout(() => {
      formStatus.textContent =
        "Message sent successfully! I will get back to you soon.";
      formStatus.style.color = "var(--primary)";
      contactForm.reset();
    }, 1500);
  });
}

// ==================== 13. Glossy Effects ====================
/**
 * Adds glossy visual effects and floating elements to sections.
 */
function addGlossyEffects() {
  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("glossy-section");
    if (["about", "projects", "contact"].includes(section.id)) {
      const floatingElement1 = document.createElement("div");
      floatingElement1.classList.add("floating-element", "floating-element-1");
      section.appendChild(floatingElement1);
      const floatingElement2 = document.createElement("div");
      floatingElement2.classList.add("floating-element", "floating-element-2");
      section.appendChild(floatingElement2);
    }
  });
  const root = document.documentElement;
  const primaryColor = getComputedStyle(root)
    .getPropertyValue("--primary")
    .trim();
  const secondaryColor = getComputedStyle(root)
    .getPropertyValue("--secondary")
    .trim();
  const accentColor = getComputedStyle(root)
    .getPropertyValue("--accent")
    .trim();
  const primaryRGB = hslToRgb(primaryColor);
  const secondaryRGB = hslToRgb(secondaryColor);
  const accentRGB = hslToRgb(accentColor);
  root.style.setProperty("--primary-rgb", primaryRGB);
  root.style.setProperty("--secondary-rgb", secondaryRGB);
  root.style.setProperty("--accent-rgb", accentRGB);
}

// ==================== 14. Utilities ====================
/**
 * Converts an HSL color string to an RGB string for CSS.
 * @param {string} hslStr - HSL color string (e.g., "hsl(210, 50%, 60%)")
 * @returns {string} - RGB string (e.g., "102, 153, 204")
 */
function hslToRgb(hslStr) {
  let r = 0,
    g = 128,
    b = 128;
  try {
    const hslMatch = hslStr.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
    if (hslMatch) {
      const h = parseInt(hslMatch[1]) / 360;
      const s = parseInt(hslMatch[2]) / 100;
      const l = parseInt(hslMatch[3]) / 100;
      if (s === 0) {
        r = g = b = l;
      } else {
        const hue2rgb = (p, q, t) => {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p + (q - p) * 6 * t;
          if (t < 1 / 2) return q;
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
          return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }
      r = Math.round(r * 255);
      g = Math.round(g * 255);
      b = Math.round(b * 255);
    }
  } catch (e) {
    console.error("Error parsing HSL color:", e);
  }
  return `${r}, ${g}, ${b}`;
}

// ==================== 15. Initialization ====================
/**
 * Initializes all sections and effects after DOM is loaded.
 */
document.addEventListener("DOMContentLoaded", () => {
  // Hide loading screen after content is loaded
  setTimeout(() => {
    loadingElement.style.opacity = "0";
    setTimeout(() => {
      loadingElement.style.display = "none";
    }, 500);
  }, 1000);

  // Initialize all sections and effects
  typewriterEffect();
  renderSkills();
  renderExperience();
  renderProjects();
  renderEducation();
  renderCertifications();
  renderVolunteering();
  setupContactForm();
  addGlossyEffects();
});
