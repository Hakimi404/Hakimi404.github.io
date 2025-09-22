// Text content (EN/DE)
const translations = {
  en: {
    aboutTitle: "About Me",
    aboutText: `I am currently pursuing a degree in "Technische Informatik" (Technical Computer Science) at HAW Hamburg. I am passionate about Machine Learning and Artificial Intelligence, and eager to explore their potential in transforming industries.

I have built a strong foundation in programming, algorithms, and data structures. My interests include neural networks, deep learning, and automation. Beyond academics, I stay updated on tech trends, participate in coding competitions, and collaborate on AI-driven projects.`,
    skillsTitle: "Skills",
    skillsList: [
      { icon: "fa-brands fa-python", text: "Python" },
      { icon: "fa-brands fa-java", text: "Java" },
      { icon: "fa-solid fa-database", text: "SQL & NoSQL" },
      { icon: "fa-solid fa-network-wired", text: "Computer Networking" },
      { icon: "fa-solid fa-cogs", text: "Operating Systems" },
      { icon: "fa-solid fa-project-diagram", text: "Algorithms & Data Structures" },
      { icon: "fa-solid fa-chart-line", text: "Power BI & Power Automate" },
      { icon: "fa-brands fa-aws", text: "AWS" },
      { icon: "fa-solid fa-microchip", text: "Sensors & Image Processing" },
      { icon: "fa-solid fa-calculator", text: "MATLAB" }
    ],
    experienceTitle: "Experience",
    experienceText: "Currently working in IT Management, where I handle daily IT tasks and continuously learn new things. Since the tasks vary from day to day, I am constantly expanding my knowledge and practical IT skills.",
    projectsTitle: "Projects",
    projectsList: [
      { title: "Power BI IT Dashboard", desc: "Data visualization for IT monitoring and ticket evaluation.", link: "https://github.com/hakimi404/powerbi-it-dashboard" },
      { title: "Networking Lab (IPv6 Client-Server)", desc: "TCP client-server application with IPv4 & IPv6 support.", link: "https://github.com/hakimi404/networking-lab-ipv6" },
      { title: "Power Apps Contact Manager", desc: "Three-screen app to manage contacts with PowerApps.", link: "https://github.com/hakimi404/powerapps-contact-manager" }
    ],
    educationTitle: "Education",
    educationText: "Bachelor of Science in Technische Informatik, HAW Hamburg",
    contactText: `📧 <a href="mailto:alhakimi.abdullah123@gmail.com">alhakimi.abdullah123@gmail.com</a> | 🔗 <a href="https://www.linkedin.com/in/abdullah-al-hakimi-848347259/" target="_blank">LinkedIn</a>`
  },
  de: {
    aboutTitle: "Über mich",
    aboutText: `Ich studiere derzeit "Technische Informatik" an der HAW Hamburg. Besonders interessieren mich Maschinelles Lernen und Künstliche Intelligenz, und ich möchte deren Potenzial zur Transformation von Branchen erforschen.

Ich habe ein solides Fundament in Programmierung, Algorithmen und Datenstrukturen aufgebaut. Meine Interessen umfassen neuronale Netze, Deep Learning und Automatisierung. Neben dem Studium informiere ich mich über aktuelle Technologietrends, nehme an Programmierwettbewerben teil und arbeite an KI-Projekten.`,
    skillsTitle: "Fähigkeiten",
    skillsList: [
      { icon: "fa-brands fa-python", text: "Python" },
      { icon: "fa-brands fa-java", text: "Java" },
      { icon: "fa-solid fa-database", text: "SQL & NoSQL" },
      { icon: "fa-solid fa-network-wired", text: "Rechnernetze" },
      { icon: "fa-solid fa-cogs", text: "Betriebssysteme" },
      { icon: "fa-solid fa-project-diagram", text: "Algorithmen & Datenstrukturen" },
      { icon: "fa-solid fa-chart-line", text: "Power BI & Power Automate" },
      { icon: "fa-brands fa-aws", text: "AWS" },
      { icon: "fa-solid fa-microchip", text: "Sensoren & Bildverarbeitung" },
      { icon: "fa-solid fa-calculator", text: "MATLAB" }
    ],
    experienceTitle: "Erfahrung",
    experienceText: "Zurzeit arbeite ich im IT-Management, wo ich tägliche IT-Aufgaben übernehme und ständig Neues lerne. Da die Aufgaben variieren, erweitere ich kontinuierlich mein Wissen und meine praktischen IT-Fähigkeiten.",
    projectsTitle: "Projekte",
    projectsList: [
      { title: "Power BI IT-Dashboard", desc: "Datenvisualisierung für IT-Monitoring und Ticket-Auswertung.", link: "https://github.com/hakimi404/powerbi-it-dashboard" },
      { title: "Netzwerklabor (IPv6 Client-Server)", desc: "TCP-Client-Server-Anwendung mit IPv4 & IPv6.", link: "https://github.com/hakimi404/networking-lab-ipv6" },
      { title: "Power Apps Kontaktmanager", desc: "Dreischirm-App zur Verwaltung von Kontakten mit PowerApps.", link: "https://github.com/hakimi404/powerapps-contact-manager" }
    ],
    educationTitle: "Ausbildung",
    educationText: "Bachelorstudium Technische Informatik, HAW Hamburg",
    contactText: `📧 <a href="mailto:alhakimi.abdullah123@gmail.com">alhakimi.abdullah123@gmail.com</a> | 🔗 <a href="https://www.linkedin.com/in/abdullah-al-hakimi-848347259/" target="_blank">LinkedIn</a>`
  }
};

// Apply translations
function setLanguage(lang) {
  const t = translations[lang];
  document.getElementById("aboutTitle").innerText = t.aboutTitle;
  document.getElementById("aboutText").innerText = t.aboutText;
  document.getElementById("skillsTitle").innerText = t.skillsTitle;

  // Skills
  const skillsGrid = document.getElementById("skillsGrid");
  skillsGrid.innerHTML = "";
  t.skillsList.forEach(skill => {
    let div = document.createElement("div");
    div.className = "skill-card";
    div.innerHTML = `<i class="${skill.icon}"></i><p>${skill.text}</p>`;
    skillsGrid.appendChild(div);
  });

  // Experience
  document.getElementById("experienceTitle").innerText = t.experienceTitle;
  document.getElementById("experienceText").innerText = t.experienceText;

  // Projects
  document.getElementById("projectsTitle").innerText = t.projectsTitle;
  const projectsGrid = document.getElementById("projectsGrid");
  projectsGrid.innerHTML = "";
  t.projectsList.forEach(p => {
    let div = document.createElement("div");
    div.className = "project-card";
    div.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p><a href="${p.link}" target="_blank">View on GitHub</a>`;
    projectsGrid.appendChild(div);
  });

  // Education
  document.getElementById("educationTitle").innerText = t.educationTitle;
  document.getElementById("educationText").innerText = t.educationText;

  // Contact
  document.getElementById("contactText").innerHTML = t.contactText;
}

// Fade-in animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// Default language
document.addEventListener("DOMContentLoaded", () => setLanguage("en"));
