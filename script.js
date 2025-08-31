const jobData = [
  {
    role: "Frontend Developer",
    company: "TechieSoft",
    skills: ["html", "css", "javascript", "react", "ui"],
    description: "Build and maintain user interfaces for web applications.",
    location: "Hyderabad",
    applyDate: "2025-07-27",
    closeDate: "2025-08-15",
    contact: "hr@techiesoft.com"
  },
  {
    role: "Backend Developer",
    company: "DataHub",
    skills: ["nodejs", "express", "mongodb", "javascript"],
    description: "Develop server-side logic and APIs.",
    location: "Bangalore",
    applyDate: "2025-07-25",
    closeDate: "2025-08-10",
    contact: "jobs@datahub.com"
  },
  
    
  {
    role: "DevOps Engineer",
    company: "CloudNet",
    skills: ["aws", "docker", "jenkins", "linux"],
    description: "Automate and streamline deployment processes.",
    location: "Delhi",
    applyDate: "2025-07-22",
    closeDate: "2025-08-18",
    contact: "devops@cloudnet.com"
  },
  // 45 more jobs (examples below, add more as needed)
  {
    role: "Mobile App Developer",
    company: "Appify",
    skills: ["flutter", "dart", "android", "ios"],
    description: "Develop cross-platform mobile applications.",
    location: "Mumbai",
    applyDate: "2025-07-21",
    closeDate: "2025-08-14",
    contact: "jobs@appify.com"
  },
  {
    role: "Machine Learning Engineer",
    company: "AIWorks",
    skills: ["python", "tensorflow", "pandas", "scikit-learn"],
    description: "Build and deploy ML models.",
    location: "Bangalore",
    applyDate: "2025-07-23",
    closeDate: "2025-08-20",
    contact: "ml@aiworks.com"
  },
  
  
  {
    role: "Business Analyst",
    company: "BizSolutions",
    skills: ["excel", "sql", "analysis", "communication"],
    description: "Bridge business needs and technical solutions.",
    location: "Mumbai",
    applyDate: "2025-07-29",
    closeDate: "2025-08-19",
    contact: "ba@bizsolutions.com"
  },
  {
    role: "Network Engineer",
    company: "NetConnect",
    skills: ["network", "cisco", "linux", "firewall"],
    description: "Maintain and troubleshoot network systems.",
    location: "Hyderabad",
    applyDate: "2025-07-30",
    closeDate: "2025-08-21",
    contact: "network@netconnect.com"
  },
  {
    role: "Product Manager",
    company: "Prodify",
    skills: ["management", "agile", "scrum", "communication"],
    description: "Lead product development teams.",
    location: "Bangalore",
    applyDate: "2025-07-31",
    closeDate: "2025-08-23",
    contact: "pm@prodify.com"
  },
  
  {
    role: "AI Researcher",
    company: "AIWorks",
    skills: ["python", "research", "deep learning", "nlp"],
    description: "Research and develop AI solutions.",
    location: "Delhi",
    applyDate: "2025-08-02",
    closeDate: "2025-08-25",
    contact: "research@aiworks.com"
  },
  {
    role: "Web Designer",
    company: "Webify",
    skills: ["html", "css", "photoshop", "ui"],
    description: "Design and build modern websites.",
    location: "Chennai",
    applyDate: "2025-08-03",
    closeDate: "2025-08-26",
    contact: "web@webify.com"
  },
  {
    role: "System Administrator",
    company: "SysAdminPro",
    skills: ["linux", "windows", "network", "security"],
    description: "Maintain IT systems and servers.",
    location: "Mumbai",
    applyDate: "2025-08-04",
    closeDate: "2025-08-27",
    contact: "sysadmin@sysadminpro.com"
  },
  
  
  {
    role: "IT Support Specialist",
    company: "Supportify",
    skills: ["support", "troubleshooting", "windows", "communication"],
    description: "Provide IT support to clients.",
    location: "Chennai",
    applyDate: "2025-08-09",
    closeDate: "2025-09-01",
    contact: "support@supportify.com"
  },
  
  {
    role: "SAP Consultant",
    company: "SAPify",
    skills: ["sap", "consulting", "sql", "business"],
    description: "Implement and support SAP solutions.",
    location: "Hyderabad",
    applyDate: "2025-08-11",
    closeDate: "2025-09-03",
    contact: "sap@sapify.com"
  },
  {
    role: "Blockchain Developer",
    company: "BlockTech",
    skills: ["blockchain", "solidity", "ethereum", "javascript"],
    description: "Develop blockchain applications.",
    location: "Bangalore",
    applyDate: "2025-08-12",
    closeDate: "2025-09-04",
    contact: "blockchain@blocktech.com"
  },
  {
    role: "HR Manager",
    company: "PeoplePro",
    skills: ["hr", "management", "communication", "recruitment"],
    description: "Manage HR operations and recruitment.",
    location: "Pune",
    applyDate: "2025-08-13",
    closeDate: "2025-09-05",
    contact: "hr@peoplepro.com"
  },
  
  {
    role: "React Native Developer",
    company: "Reactify",
    skills: ["react native", "javascript", "android", "ios"],
    description: "Build mobile apps using React Native.",
    location: "Mumbai",
    applyDate: "2025-08-16",
    closeDate: "2025-09-08",
    contact: "rn@reactify.com"
  },
  {
    role: "Python Developer",
    company: "PyTech",
    skills: ["python", "django", "flask", "sql"],
    description: "Develop backend applications in Python.",
    location: "Hyderabad",
    applyDate: "2025-08-17",
    closeDate: "2025-09-09",
    contact: "python@pytech.com"
  },
  {
    role: "Java Developer",
    company: "JavaWorks",
    skills: ["java", "spring", "hibernate", "sql"],
    description: "Develop enterprise applications in Java.",
    location: "Bangalore",
    applyDate: "2025-08-18",
    closeDate: "2025-09-10",
    contact: "java@javaworks.com"
  },
  {
    role: "PHP Developer",
    company: "PHPify",
    skills: ["php", "laravel", "mysql", "javascript"],
    description: "Build web applications using PHP.",
    location: "Pune",
    applyDate: "2025-08-19",
    closeDate: "2025-09-11",
    contact: "php@phpify.com"
  },
 
  {
    role: "Go Developer",
    company: "GoLangPro",
    skills: ["go", "microservices", "docker", "sql"],
    description: "Build scalable backend services.",
    location: "Mumbai",
    applyDate: "2025-08-22",
    closeDate: "2025-09-14",
    contact: "go@golangpro.com"
  },
 
  {
    role: "Kotlin Developer",
    company: "KotlinWorks",
    skills: ["kotlin", "android", "java", "ui"],
    description: "Develop Android apps using Kotlin.",
    location: "Bangalore",
    applyDate: "2025-08-24",
    closeDate: "2025-09-16",
    contact: "kotlin@kotlinworks.com"
  },
  {
    role: "iOS Developer",
    company: "iOSify",
    skills: ["swift", "ios", "ui", "objective-c"],
    description: "Build iOS applications.",
    location: "Pune",
    applyDate: "2025-08-25",
    closeDate: "2025-09-17",
    contact: "ios@iosify.com"
  },
  
  {
    role: "Game Developer",
    company: "Gameify",
    skills: ["unity", "c#", "game design", "graphics"],
    description: "Develop interactive games.",
    location: "Mumbai",
    applyDate: "2025-08-28",
    closeDate: "2025-09-20",
    contact: "games@gameify.com"
  },
  {
    role: "AR/VR Developer",
    company: "VirtualPro",
    skills: ["unity", "c#", "ar", "vr"],
    description: "Create AR/VR experiences.",
    location: "Hyderabad",
    applyDate: "2025-08-29",
    closeDate: "2025-09-21",
    contact: "arvr@virtualpro.com"
  },
  {
    role: "Technical Support Engineer",
    company: "TechSupport",
    skills: ["support", "windows", "linux", "troubleshooting"],
    description: "Provide technical support to clients.",
    location: "Bangalore",
    applyDate: "2025-08-30",
    closeDate: "2025-09-22",
    contact: "support@techsupport.com"
  },
  {
    role: "IT Consultant",
    company: "Consultify",
    skills: ["consulting", "management", "sql", "communication"],
    description: "Advise clients on IT solutions.",
    location: "Pune",
    applyDate: "2025-08-31",
    closeDate: "2025-09-23",
    contact: "consult@consultify.com"
  },
  {
    role: "Cloud Engineer",
    company: "Cloudify",
    skills: ["aws", "azure", "gcp", "devops"],
    description: "Deploy and manage cloud infrastructure.",
    location: "Delhi",
    applyDate: "2025-09-01",
    closeDate: "2025-09-24",
    contact: "cloud@cloudify.com"
  },
  {
    role: "Data Scientist",
    company: "DataSciencePro",
    skills: ["python", "machine learning", "statistics", "sql"],
    description: "Analyze data and build predictive models.",
    location: "Chennai",
    applyDate: "2025-09-02",
    closeDate: "2025-09-25",
    contact: "ds@datasciencepro.com"
  },
  {
    role: "IT Project Manager",
    company: "Projectify",
    skills: ["management", "agile", "scrum", "communication"],
    description: "Manage IT projects and teams.",
    location: "Mumbai",
    applyDate: "2025-09-03",
    closeDate: "2025-09-26",
    contact: "pm@projectify.com"
  },
  {
    role: "SEO Specialist",
    company: "SEOPro",
    skills: ["seo", "analytics", "content", "marketing"],
    description: "Optimize websites for search engines.",
    location: "Hyderabad",
    applyDate: "2025-09-04",
    closeDate: "2025-09-27",
    contact: "seo@seopro.com"
  },
  {
    role: "Social Media Manager",
    company: "Socialify",
    skills: ["social media", "content", "marketing", "analytics"],
    description: "Manage social media campaigns.",
    location: "Bangalore",
    applyDate: "2025-09-05",
    closeDate: "2025-09-28",
    contact: "social@socialify.com"
  },
  {
    role: "IT Auditor",
    company: "AuditPro",
    skills: ["audit", "security", "compliance", "sql"],
    description: "Conduct IT audits and ensure compliance.",
    location: "Pune",
    applyDate: "2025-09-06",
    closeDate: "2025-09-29",
    contact: "audit@auditpro.com"
  },
  {
    role: "Power BI Developer",
    company: "PowerBIPro",
    skills: ["powerbi", "sql", "excel", "dashboard"],
    description: "Develop dashboards and reports.",
    location: "Delhi",
    applyDate: "2025-09-07",
    closeDate: "2025-09-30",
    contact: "bi@powerbipro.com"
  }
];

// Animation helpers
function fadeIn(element) {
  element.classList.add("fade-in");
  setTimeout(() => element.classList.remove("fade-in"), 700);
  }

// Search jobs
function searchJobs() {
  const input = document.getElementById("skillsInput").value.trim().toLowerCase();
  const userSkills = input.split(",").map(skill => skill.trim()).filter(skill => skill);
  const jobsContainer = document.getElementById("jobsContainer");
  jobsContainer.innerHTML = "";
  fadeIn(jobsContainer);

  if (userSkills.length === 0) {
    jobsContainer.innerHTML = `<p class="highlight">Please enter at least one skill.</p>`;
    fadeIn(jobsContainer);
    return;
  }

  // Filter jobs by skills (at least 60% match)
  const results = jobData.filter(job => {
    const matchCount = job.skills.filter(skill => userSkills.includes(skill)).length;
    return matchCount / userSkills.length >= 0.6;
  });

  if (results.length === 0) {
    jobsContainer.innerHTML = `<p class="highlight">No matching jobs found for your skills.</p>`;
    fadeIn(jobsContainer);
    return;
  }

  results.forEach(job => {
    const jobCard = document.createElement("div");
    jobCard.className = "job-card fade-in";
    jobCard.innerHTML = `
      <div class="job-title">${job.role}</div>
      <div class="job-company">${job.company}</div>
      <div class="job-desc">${job.description}</div>
      <div class="job-location"><strong>Location:</strong> ${job.location}</div>
      <div class="job-dates">
        <span><strong>Apply Date:</strong> ${job.applyDate}</span>
        <span><strong>Registration Closes:</strong> ${job.closeDate}</span>
      </div>
      <div class="job-contact"><strong>Contact:</strong> ${job.contact}</div>
      <div class="job-skills">
        ${job.skills.map(skill => 
          `<span class="skill-chip ${userSkills.includes(skill) ? "matched" : ""}">${skill}</span>`
        ).join(" ")}
      </div>
      <button class="apply-btn">Apply</button>
      <div class="confirm-box hidden"></div>
    `;
    // Inline Apply logic
    const applyBtn = jobCard.querySelector(".apply-btn");
    const confirmBox = jobCard.querySelector(".confirm-box");
    applyBtn.onclick = () => {
      confirmBox.innerHTML = `
        <div>Are you sure you want to apply for this job?</div>
        <button class="confirm-btn">Confirm</button>
        <button class="cancel-btn">Cancel</button>
      `;
      confirmBox.classList.remove("hidden");
      fadeIn(confirmBox);

      confirmBox.querySelector(".confirm-btn").onclick = () => {
        confirmBox.innerHTML = `<div class="applied-status">Application submitted.</div>`;
      };
      confirmBox.querySelector(".cancel-btn").onclick = () => {
        confirmBox.innerHTML = `<div class="applied-status">Application cancelled.</div>`;
      };
    };
    jobsContainer.appendChild(jobCard);
  });
}

// Show applied jobs
function showApplications() {
  const jobsContainer = document.getElementById("jobsContainer");
  jobsContainer.innerHTML = "";
  fadeIn(jobsContainer);

  const appliedJobs = getAppliedJobs();
  if (appliedJobs.length === 0) {
    jobsContainer.innerHTML = `<p class="highlight">No jobs are applied yet.</p>`;
    fadeIn(jobsContainer);
    return;
  }
}

// Navigation logic
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("jobsContainer").innerHTML = "";
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const section = link.getAttribute('data-section');
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      // Section navigation
      document.getElementById('home-section').style.display = section === 'home' ? 'flex' : 'none';
      document.getElementById('about-section').classList.toggle('hidden', section !== 'about');
      document.getElementById('jobsContainer').style.display = (section === 'home' || section === 'applications') ? 'grid' : 'none';
      if (section === 'about') {
        document.getElementById('about-section').classList.add('fade-in');
      }
      if (section === 'applications') {
        showApplications();
      }
      if (section === 'contact') {
        document.getElementById('about-section').classList.add('hidden');
        document.getElementById('home-section').style.display = 'none';
        document.getElementById('jobsContainer').style.display = 'none';
        document.getElementById('footer-section').scrollIntoView({behavior: "smooth"});
      }
    });
  });
});