// Constants
const SELECTORS = {
  menuToggle: "#menu-toggle",
  navLinks: "#nav-links",
  menuOverlay: "#menu-overlay",
  backToTop: "#back-to-top",
  contactForm: "#contact-form",
  formStatus: "#form-status",
  themeToggle: "#theme-toggle",
};

// DOM Elements
const elements = {
  menuToggle: document.querySelector(SELECTORS.menuToggle),
  navLinks: document.querySelector(SELECTORS.navLinks),
  menuOverlay: document.querySelector(SELECTORS.menuOverlay),
  backToTop: document.querySelector(SELECTORS.backToTop),
  contactForm: document.querySelector(SELECTORS.contactForm),
  formStatus: document.querySelector(SELECTORS.formStatus),
  themeToggle: document.querySelector(SELECTORS.themeToggle),
};

// Theme handling
const theme = {
  init() {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
      this.updateThemeIcon(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const theme = prefersDark ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", theme);
      this.updateThemeIcon(theme);
    }

    // Listen for system theme changes
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
          const theme = e.matches ? "dark" : "light";
          document.documentElement.setAttribute("data-theme", theme);
          this.updateThemeIcon(theme);
        }
      });
  },

  toggle() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    this.updateThemeIcon(newTheme);
  },

  updateThemeIcon(theme) {
    const sunIcon = elements.themeToggle.querySelector(".sun-icon");
    const moonIcon = elements.themeToggle.querySelector(".moon-icon");

    if (theme === "dark") {
      sunIcon.style.display = "none";
      moonIcon.style.display = "block";
    } else {
      sunIcon.style.display = "block";
      moonIcon.style.display = "none";
    }
  },
};

// Initialize theme
theme.init();

// Theme toggle event listener
elements.themeToggle?.addEventListener("click", () => theme.toggle());

// Menu Toggle
elements.menuToggle?.addEventListener("click", () => {
  elements.menuToggle.classList.toggle("active");
  elements.navLinks.classList.toggle("active");
  elements.menuOverlay.classList.toggle("active");
});

// Close Menu When Overlay is Clicked
elements.menuOverlay?.addEventListener("click", () => {
  elements.menuToggle.classList.remove("active");
  elements.navLinks.classList.remove("active");
  elements.menuOverlay.classList.remove("active");
});

// Close Menu When a Link is Clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    elements.menuToggle.classList.remove("active");
    elements.navLinks.classList.remove("active");
    elements.menuOverlay.classList.remove("active");
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
    this.isDeleting = false;
    this.type();
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    this.txt = this.isDeleting
      ? fullTxt.substring(0, this.txt.length - 1)
      : fullTxt.substring(0, this.txt.length + 1);

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = this.isDeleting ? 50 : 100;

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

// Populate content functions
const populateContent = {
  skills: () => {
    const container = document.getElementById("skills-container");
    portfolioData.skills.forEach((skill) => {
      const element = document.createElement("div");
      element.className = "skill-tag";
      element.textContent = skill.name;
      container.appendChild(element);
    });
  },

  experience: () => {
    const container = document.getElementById("experience-container");
    portfolioData.experience.forEach((exp) => {
      const element = document.createElement("div");
      element.className = "experience-item";
      element.innerHTML = `
        <h3>${exp.title} | ${exp.company}</h3>
        <p style="color: var(--gray)">${exp.period}</p>
        <p>${exp.description}</p>
      `;
      container.appendChild(element);
    });
  },

  projects: () => {
    const container = document.getElementById("projects-container");
    portfolioData.projects.forEach((project) => {
      const element = document.createElement("div");
      element.className = "project";
      element.innerHTML = `
        <div class="project-image-container">
          <img src="${project.image}" alt="${
        project.title
      }" class="project-image" loading="lazy">
        </div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p style="color: var(--gray)">Technologies: ${project.technologies.join(
          ", "
        )}</p>
        <a href="${
          project.link
        }" class="project-link" target="_blank">View Project →</a>
      `;
      container.appendChild(element);
    });
  },

  volunteering: () => {
    const container = document.getElementById("volunteering-container");
    portfolioData.volunteering.forEach((volunteering) => {
      const element = document.createElement("div");
      element.className = "volunteering";
      element.innerHTML = `
        <h3>${volunteering.position}</h3>
        <p>${volunteering.place}</p>
        <p style="color: var(--gray)">${volunteering.period}</p>
      `;
      container.appendChild(element);
    });
  },

  courses: () => {
    const container = document.getElementById("courses-container");
    portfolioData.courses.forEach((course) => {
      const element = document.createElement("div");
      element.className = "course";
      element.innerHTML = `
        <h3>${course.name}</h3>
        <p>${course.place}</p>
        <p style="color: var(--gray)">${course.date}</p>
      `;
      container.appendChild(element);
    });
  },
};

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Intersection Observer for animations
const sectionObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        sectionObserver.unobserve(entry.target);
      }
    }),
  { threshold: 0.1 }
);

document
  .querySelectorAll("section")
  .forEach((section) => sectionObserver.observe(section));

// Navbar scroll behavior
let lastScroll = 0;
const navbar = document.getElementById("navbar");

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

// Back to Top Button
window.addEventListener("scroll", () => {
  elements.backToTop.style.display =
    window.pageYOffset > 300 ? "block" : "none";
});

elements.backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Hide Loading Animation
window.addEventListener("load", () => {
  document.getElementById("loading").style.display = "none";
});

// Contact Form
elements.contactForm?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const submitButton = elements.contactForm.querySelector(
    'button[type="submit"]'
  );
  const formData = new FormData(elements.contactForm);
  const data = Object.fromEntries(formData.entries());

  if (!validateForm(data)) return;

  try {
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    elements.formStatus.textContent = "Message sent successfully!";
    elements.formStatus.style.color = "green";
    elements.contactForm.reset();
  } catch (error) {
    elements.formStatus.textContent =
      "Failed to send message. Please try again.";
    elements.formStatus.style.color = "red";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Send Message";
  }
});

// Form validation
function validateForm(data) {
  const { name, email, message } = data;

  if (!name || !email || !message) {
    elements.formStatus.textContent = "Please fill in all fields";
    elements.formStatus.style.color = "red";
    return false;
  }

  if (!isValidEmail(email)) {
    elements.formStatus.textContent = "Please enter a valid email address";
    elements.formStatus.style.color = "red";
    return false;
  }

  return true;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
  const txtElement = document.querySelector(".typewriter");
  if (txtElement) new TypeWriter(txtElement, portfolioData.roles, 1000);

  Object.values(populateContent).forEach((fn) => fn());
});
