const header = document.querySelector("header");
window.addEventListener("scroll", function () {

    header.classList.toggle("sticky", this.window.scrollY > 100);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open')
};



/* --- Project Modal Logic --- */

const projectData = {
    quasar: {
        title: "QUASAR - Student Collaboration Platform",
        description: "A comprehensive collaboration platform enabling students to create projects, discover teammates, and collaborate in real time with integrated chat, task management, and intelligent AI-powered recommendations. Features include real-time messaging, project boards, and automated team matching.",
        techStack: "React.js, Spring Boot, PostgreSQL, WebSocket, JWT, OAuth2, Python, FastAPI",
        github: "https://github.com/RasuriVIGNESH/QUASAR",
        live: "#",
        images: [
            "./project logo's/Quasar.png",
            // Add more image paths here as needed
        ]
    },
    sewa: {
        title: "SEWA - Sepsis Early Warning Agent",
        description: "A real-time clinical monitoring dashboard to track ICU patient vital signs and sepsis risk levels with rule-based assessment, visual alerts, and trend analytics for early medical intervention. It helps doctors make informed decisions quickly.",
        techStack: "React.js, FastAPI, Tailwind CSS, PostgreSQL, Recharts",
        github: "https://github.com/RasuriVIGNESH/SEWA",
        live: "#",
        images: [
            "https://cdn.apollohospitals.com/mumbai-letstalkhealth/2024/04/icu-1024x498-1.webp"
        ]
    },
    jpmorgan: {
        title: "JPMorgan Chase - Software Engineering Simulation",
        description: "Integrated Kafka into Spring Boot microservice for high-volume transaction processing with validation, persistence using Spring Data JPA, external REST API integration, and comprehensive testing.",
        techStack: "Spring Boot, Apache Kafka, Spring Data JPA, H2 Database, REST API, Maven",
        github: "#",
        live: "#",
        images: [
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop"
        ]
    },
    hivemind: {
        title: "HiveMind - AI Interview Prep",
        description: "HiveMind is a comprehensive platform designed to assist with technical interview preparation. It leverages Artificial Intelligence to generate personalized interview questions based on candidate profiles and job descriptions, and provides AI-driven evaluation of answers.",
        techStack: "React, Vite, Tailwind CSS, Java 17, Spring Boot, Spring Security (JWT), H2 Database, Python, FastAPI, Google Generative AI (Gemini), Pandas",
        github: "#",
        live: "#",
        images: [
            "./project Photos/gate mind/logo.png",
            "./project Photos/gate mind/screening round.png"
        ]
    }
};

const modal = document.getElementById("project-modal");
const closeModalBtn = document.querySelector(".close-modal");
const projectCards = document.querySelectorAll(".project-card");

// Elements to populate
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalTechStack = document.getElementById("modal-tech-stack");
const modalGallery = document.getElementById("modal-gallery");
const modalGithub = document.getElementById("modal-github");
const modalLive = document.getElementById("modal-live");

projectCards.forEach(card => {
    card.addEventListener("click", () => {
        const projectId = card.getAttribute("data-project-id");
        const data = projectData[projectId];

        if (data) {
            modalTitle.textContent = data.title;
            modalDescription.textContent = data.description;
            modalTechStack.textContent = data.techStack;
            modalGithub.href = data.github;
            modalLive.href = data.live;

            // Clear existing images
            modalGallery.innerHTML = "";

            // Populate images
            data.images.forEach(imgSrc => {
                const img = document.createElement("img");
                img.src = imgSrc;
                img.alt = data.title;
                modalGallery.appendChild(img);
            });

            // If no images, show a placeholder or keep empty
            if (data.images.length === 0) {
                const p = document.createElement("p");
                p.textContent = "No images available.";
                p.style.color = "#ccc";
                modalGallery.appendChild(p);
            }

            modal.style.display = "block";
            document.body.style.overflow = "hidden"; // Disable scroll
        }
    });
});

closeModalBtn.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Enable scroll
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};

/* --- Force Stats Update --- */
// Append a timestamp to the stats image URLs to prevent caching
window.addEventListener('load', () => {
    const statImages = document.querySelectorAll('.stat-item img');
    statImages.forEach(img => {
        const currentSrc = img.src;
        // Check if query param exists already
        if (currentSrc.indexOf('?') > -1) {
            img.src = currentSrc + '&t=' + new Date().getTime();
        } else {
            img.src = currentSrc + '?t=' + new Date().getTime();
        }
    });
});
