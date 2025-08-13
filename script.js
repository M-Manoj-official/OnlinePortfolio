// Portfolio Data
const portfolioData = {
    about: "Hello, I'm Manoj, a passionate Front-End Developer with expertise in CSS. I enjoy crafting elegant, high-performing user interfaces. I am always eager to learn new technologies and collaborate on innovative projects. My goal is to create seamless digital experiences that delight users and solve real-world problems.",
    profilepic: {
        src: "./assets/1000048398.jpg",
        alt: "A Boy image"
    },

    projects: [
        { title: "Rock Paper Scissor", description: "A Rock paper scisscor game to play with computer", link: "https://share.google/1elWCqiXQkBR0tLpF" },
        { title: "To Do List", description: "Designed a Basic To Do List with JavaScript", link: "https://share.google/AqvSgUjiPcbneNQEf" },
        { title: "Portfolio Website", description: "Personal portfolio website to showcase my skills and projects", link: "https://github.com/M-Manoj-official/OnlinePortfolio" }
    ],

    skills: ["HTML", "CSS", "JavaScript", "UI/UX Design", "Graphic Design", "Bootstrap", "Responsive Design"],

    tools: ["Figma", "Inkscape", "AdobeXD", "Canva", "Picsart", "VS Code", "Git"],

    education: [
        "Bsc. Computer Science - Bharathidasan College (Pursuing)",
        "High School Leaving Certificate - MIGROS K.I.D.S (2023)",
        "Web Development Bootcamp - Udemy (2024)"
    ],

    experience: [
        "Internship at I-Bacus Tech Solutions Pvt. Ltd. (Aug 2025 - Present)",
        "PC Building (2022 - Present)",
        "Freelance Web Designer (2023 - Present)"
    ],

    hobbies: [
        "Photography",
        "Gaming",
        "Blogging about tech trends"
    ]
};

// Function to load About Section
document.getElementById("about-text").textContent = portfolioData.about;

const profilepicture = document.getElementById("profilepic");
profilepicture.src = portfolioData.profilepic.src;
profilepicture.alt = portfolioData.profilepic.alt;

// Function to load Projects
const projectContainer = document.getElementById("project-list");
portfolioData.projects.forEach(project => {
    let projectCard = document.createElement("div");
    projectCard.classList.add("col-md-4", "mb-3");
    projectCard.innerHTML = `
        <div class="card h-100 shadow">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <a href="${project.link}" class="btn btn-project" target="_blank">View Project</a>
            </div>
        </div>
    `;
    projectContainer.appendChild(projectCard);
});

// Function to load Skills
const skillsList = document.getElementById("skills-list");
portfolioData.skills.forEach(skill => {
    let li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});

const toolslist = document.getElementById("tool-list");
portfolioData.tools.forEach(tool => {
    let li = document.createElement("li")
    li.textContent = tool;
    toolslist.appendChild(li);
})

// Function to load Education
const educationList = document.getElementById("education-list");
portfolioData.education.forEach(edu => {
    let li = document.createElement("li");
    li.textContent = edu;
    educationList.appendChild(li);
});

// Function to load Experience
const experienceList = document.getElementById("experience-list");
portfolioData.experience.forEach(exp => {
    let li = document.createElement("li");
    li.textContent = exp;
    experienceList.appendChild(li);
});

const socialLinks = {
    linkedin: "https://www.linkedin.com/in/manoj-m-6a7a81330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/M-Manoj-official",
    email: "mailto:manojm1705@outlook.com",
    instagram: "https://www.instagram.com/itz_m4noj?igsh=NWViY3QwangzMHhs"
};

// Dynamically set the href attributes
document.getElementById("linkedinlink").href = socialLinks.linkedin;
document.getElementById("githublink").href = socialLinks.github;
document.getElementById("emaillink").href = socialLinks.email;
document.getElementById("instalink").href = socialLinks.instagram;

const resumeLink = "https://drive.google.com/file/d/1-FJdqrAULp3C7LBb8qG9jJ5d3y6D__dX/view?usp=drive_link";

document.getElementById("resume").href = resumeLink
