const translations = {
  en: {
    aboutTitle: "About Me",
    aboutText: `I am currently pursuing a degree in "Technische Informatik" (Technical Computer Science) at HAW Hamburg, where I am delving into the fascinating world of technology and computer systems. With a keen interest in machine learning and artificial intelligence (AI), I am passionate about exploring the endless possibilities that these fields offer in revolutionizing various industries.

Throughout my academic journey, I have gained a solid foundation in computer science principles, including programming, algorithms, and data structures. Additionally, I am actively honing my skills in machine learning algorithms, neural networks, and deep learning techniques.

Driven by a desire to contribute to the advancement of AI technology, I am eager to leverage my knowledge and expertise to tackle complex problems and drive innovation in the field.

Outside of my academic pursuits, I enjoy staying updated on the latest developments in technology, participating in coding competitions, and collaborating on projects that push the boundaries of AI. I am also open to networking opportunities and discussions with professionals in the field to broaden my horizons and exchange ideas.`,
    skillsTitle: "Skills",
    skillsList: [
      "Operating Systems",
      "Python, Java",
      "Image Processing, Sensors",
      "Computer Networking",
      "SQL & NoSQL",
      "Algorithms & Data Structures",
      "Microsoft Power Automate, Power BI",
      "AWS, MATLAB"
    ],
    experienceTitle: "Experience",
    experienceText: "Currently working on IT spare parts app, Power BI dashboards for IT monitoring, automation with Power Automate (ServiceNow → Power BI), networking lab projects (IPv4/IPv6), and process documentation templates.",
    educationTitle: "Education",
    educationText: "Bachelor of Science in Technische Informatik, HAW Hamburg",
    contactText: "📧 alhakimi.abdullah123@gmail.com | 🔗 LinkedIn: Abdullah Al-Hakimi"
  },
  de: {
    aboutTitle: "Über mich",
    aboutText: `Ich studiere derzeit "Technische Informatik" an der HAW Hamburg und tauche in die faszinierende Welt der Technologie und Computersysteme ein. Mein besonderes Interesse gilt dem Bereich Machine Learning und Künstliche Intelligenz (KI), deren Möglichkeiten zahlreiche Branchen revolutionieren können.

Während meines Studiums habe ich ein solides Fundament in Informatikprinzipien wie Programmierung, Algorithmen und Datenstrukturen aufgebaut. Zudem vertiefe ich meine Kenntnisse in maschinellen Lernverfahren, neuronalen Netzen und Deep Learning.

Getrieben vom Wunsch, zur Weiterentwicklung der KI-Technologie beizutragen, möchte ich mein Wissen einsetzen, um komplexe Probleme zu lösen und Innovationen voranzutreiben.

Abseits des Studiums informiere ich mich über aktuelle technologische Entwicklungen, nehme an Programmierwettbewerben teil und arbeite an Projekten, die die Grenzen der KI erweitern. Außerdem freue ich mich auf Networking-Möglichkeiten und den Austausch mit Fachleuten.`,
    skillsTitle: "Fähigkeiten",
    skillsList: [
      "Betriebssysteme",
      "Python, Java",
      "Bildverarbeitung, Sensoren",
      "Rechnernetze",
      "SQL & NoSQL",
      "Algorithmen & Datenstrukturen",
      "Microsoft Power Automate, Power BI",
      "AWS, MATLAB"
    ],
    experienceTitle: "Erfahrung",
    experienceText: "Zurzeit arbeite ich an einer IT-Ersatzteil-App, Power-BI-Dashboards für IT-Monitoring, Automatisierungen mit Power Automate (ServiceNow → Power BI), Netzwerklabor-Projekten (IPv4/IPv6) und Prozessdokumentations-Templates.",
    educationTitle: "Ausbildung",
    educationText: "Bachelorstudium Technische Informatik, HAW Hamburg",
    contactText: "📧 alhakimi.abdullah123@gmail.com | 🔗 LinkedIn: Abdullah Al-Hakimi"
  }
};

function setLanguage(lang) {
  const t = translations[lang];
  document.getElementById('aboutTitle').innerText = t.aboutTitle;
  document.getElementById('aboutText').innerText = t.aboutText;
  document.getElementById('skillsTitle').innerText = t.skillsTitle;

  const skillsList = document.getElementById('skillsList');
  skillsList.innerHTML = "";
  t.skillsList.forEach(skill => {
    let li = document.createElement("li");
    li.innerText = skill;
    skillsList.appendChild(li);
  });

  document.getElementById('experienceTitle').innerText = t.experienceTitle;
  document.getElementById('experienceText').innerText = t.experienceText;
  document.getElementById('educationTitle').innerText = t.educationTitle;
  document.getElementById('educationText').innerText = t.educationText;
  document.getElementById('contactText').innerText = t.contactText;
}

// Default: English
setLanguage('en');
