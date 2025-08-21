// Personal Information
const PERSONAL_INFO = {
  name: 'Peter Mensah',
  title: 'IT Technical Lead',
  mobile: '+233240957500',
  email: 'ing.mensah@outlook.com',
  address: 'Accra, Ghana',
  githubUsername: 'ing-mensah',
  github: 'https://github.com/ing-mensah',
  linkedin: 'https://www.linkedin.com/in/peter-mensah-it/',
  profileSummary: `A tech enthusiast in Accra, Ghana, with over 7 years of experience bridging complex IT systems and business objectives. I specialize in architecting cloud migrations, optimizing system performance, and leading cross-functional initiatives to deliver real value. My background spans hands-on implementation to strategic oversight of enterprise deployments across multiple continents. Outside of work, I explore emerging technologies, contribute to open-source projects, and mentor aspiring developers. I welcome connections with peers who share my passion for leveraging technology to drive positive change.`
};

// Services/Skills Data
const SERVICES_DATA = [
  {
    title: 'Developer Tools',
    description: 'Proficient with modern tools for version control, code editing, and database management to streamline development.',
    icon: 'code',
    tags: ['Mongo DB', 'VsCode', 'Git & GitHub']
  },
  {
    title: 'Frameworks & Libraries',
    description: 'Building dynamic and responsive web applications using modern frontend and backend frameworks.',
    icon: 'package',
    tags: ['Node.js', 'React.js', 'Next.js', 'Tailwind CSS']
  },
  {
    title: 'Databases & Analytics',
    description: 'Designing and optimizing database structures for efficient data storage, retrieval, and management.',
    icon: 'database',
    tags: ['MySQL','Microsoft Excel','Business Intelligence','Reporting & Analytics']
  },
  {
    title: 'Network Security & Management',
    description: 'Implementing robust security measures to protect systems, networks, and data from threats.',
    icon: 'shield',
    tags: ['Cybersecurity', 'Network Management', 'Routing & Switching', 'Wireless Networking', 'Virtualization', 'Risk Assessment']
  },
  {
    title: 'Programming Language',
    description: 'Proficient in multiple programming languages, including JavaScript, Python, Java, and C++.',
    icon: 'code',
    tags: ['HTML, CSS, JavaScript', 'Python', 'PHP', 'C++', 'C#']
  },
  {
    title: 'Others',
    description: 'Providing responsive and effective technical support to resolve issues and minimize downtime.',
    icon: 'headphones',
    tags: ['Hardware deployment', 'Technical writing', 'Operating systems knowledge', 'Data backup & replication', 'Data Encryption ']
  }
];

// Work Experience Data
const WORK_EXPERIENCE = [
  {
    company: 'Voda Customer Experience Centre',
    position: 'Team Lead',
    period: 'june 2024 - Dec 2024',
    description: 'Leading IT infrastructure management and digital transformation initiatives for enterprise clients. Designing and implementing cloud-based solutions that enhance operational efficiency and reduce costs.',
    achievements: [
      'Led a team of 50 customer service representatives by implementing mentorship programs and weekly team-building exercises, resulting in significant improvement in team productivity',
      'Analyzed KPIs (average handling time, customer satisfaction, first-call resolution) and reoriented workflows by launching new scripts and setting up real-time dashboards, resulting in measurable uplift in customer satisfaction and first-call resolution rates',
      'Resolved escalated customer issues using QContact CRM analytics and structured root cause analysis, achieving high first-contact resolution rates',
      'Compiled daily KPI reports and presented insights that led to onboarding changes, improving new agent readiness'
    ]
  },
  {
    company: 'SYLVERSYS CONSULTING INTERNATIONAL',
    position: 'IT Helpdesk Specialist',
    period: 'Mar 2017 - Dec 2019',
    description: 'Delivering enterprise-grade Microsoft 365 solutions across international markets.',
    achievements: [
      'Delivered on-site and remote IT support to Microsoft Office 365 users globally, improving client system uptime and boosting overall customer satisfaction',
      'Deployed Microsoft Office 365 solutions (Exchange Online, SharePoint Online, Azure AD) for global clients, securing domain management and streamlining data/email archiving processes',
      'Managed incident tickets through the ITSM portal and LogMeIn, maintaining high SLA (Service-Level Agreement) compliance rates across global accounts'
    ]
  },
  {
    company: 'inCharge Global Limited',
    position: 'IT Support Officer',
    period: 'Jun 2015 - Feb 2017',
    description: 'Assisted in the development and maintenance of web applications. Collaborated with senior developers on feature implementation and bug fixes.',
    achievements: [
      'Provided technical support for business-critical applications (Cloud services, Domains, USSD apps and Payment Gateway platforms), enhancing operational reliability across departments',
      'Developed step-by-step training manuals post-application upgrades, improving user adoption rates and reducing support queries',
      'Served as the escalation point for network and security issues, minimizing downtime and ensuring business continuity'
    ]
  },
  {
    company: 'Millicom GH (TIGO)',
    position: 'Billing Assurance Analyst',
    period: 'Jun 2015 - Feb 2017',
    description: 'Assisted in the analysis and resolution of billing-related issues for TIGO customers, ensuring accurate and timely billing transactions.',
    achievements: [
      'Tested new rates on Tigocash transactions, identifying and reporting defects to ensure accuracy and functionality.',
	    'Verified SIM card functionality through end-to-end testing pre/post-deployment, reducing activation failure.',
      'Developed SQL scripts in Management Studio to automate transaction monitoring, enabling early detection of irregularities and improving data integrity controls.',
      'Collaborated with cross-functional teams to resolve complex billing issues, improving customer satisfaction',
      'Conducted regular billing audits, identifying areas for improvement and implementing best practices'
    ]
  },
  {
    company: 'JMP4AFRICA (NGO)',
    position: 'PRODUCT DEVELOPER',
    period: 'Jun 2015 - Feb 2017',
    description: 'YESSE is a pioneering organization dedicated to empowering young individuals with the skills, knowledge, and opportunities necessary to thrive in today\'s competitive environment',
    achievements: [
      'Designed and built a custom volunteer registration portal, resulting in significant increase in volunteer sign-ups',
      'Worked with senior developers and the design team to integrate APIs and create user-friendly interfaces, enhancing app features, performance, and overall appeal',
      'Developed a free, open-source software tool to help the NGO with specific tasks and problem-solving',
      'Collaborated with cross-functional teams to launch a mobile app for fundraising events',
      'Provided technical support and troubleshooting for the mobile application, resolving issues and optimizing performance'
    ]
  }
];

// Projects Data
const PROJECTS = [
  {
    title: 'Enterprise Resource Planning System',
    description: 'Developed a comprehensive ERP system for a manufacturing company, integrating inventory management, production planning, and financial reporting.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: './assets/ad.png',
    link: '#'
  },
  {
    title: 'Cloud Migration Strategy',
    description: 'Designed and executed a cloud migration strategy for a financial services firm, ensuring data security and compliance with regulatory requirements.',
    technologies: ['Microsoft 365', 'Azure', 'LogmeIn', 'Docker'],
    image: './assets/office365.jpg',
    link: '#'
  },
  {
    title: 'Network Security Overhaul',
    description: 'Implemented a comprehensive security infrastructure upgrade for a healthcare provider, including firewall configuration, intrusion detection, and data encryption.',
    technologies: ['Cisco', 'Palo Alto', 'Encryption', 'VPN'],
    image: './assets/ad3.png',
    link: '#'
  },
  {
    title: 'JMP4Africa Registration Portal',
    description: 'Built a scalable registration portal for JMP4Africa, enabling efficient volunteer registration and management.',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    image: './assets/ad2.jpg',
    link: '#'
  }
];
// Education Data
const EDUCATION = [
  {
    institution: 'Garden City University College',
    degree: 'Bachelor of Science in Information Technology',
    period: '2010 - 2014',
    description: 'Focused on software development, database management, and network security. Graduated with honors.'
  },
  {
    institution: 'MEST AFRICA',
    degree: 'Web Developer Program',
    period: '2025',
    description: 'focused on building web applications and solving real-world problems.'
  }
];
// Certifications Data
const CERTIFICATIONS = [
   {
    name: 'Google Data Analytics',
    issuer: 'Google',
    date: '2023',
    link: '#'
  },
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    link: '#'
  },
  {
    name: 'CNSS Certified Network Security Specialist',
    issuer: 'International Cybersecurity Institute (ICSI)',
    date: '2022',
    link: '#'
  },
  {
    name: 'Fortinet Certified Associate',
    issuer: 'Fortinet',
    date: '2019',
    link: '#'
  }
];

// Icon mapping for skills
const ICONS = {
  code: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  database: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  target: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  headphones: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
  package: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 9V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/></svg>`
};

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  // Set profile summary
  const profileSummary = document.getElementById('profile-summary');
  if (profileSummary) {
    profileSummary.textContent = PERSONAL_INFO.profileSummary;
  }

  // Populate Skills
  const skillsContainer = document.getElementById('skills-container');
  if (skillsContainer) {
    SERVICES_DATA.forEach(skill => {
      const skillCard = document.createElement('div');
      skillCard.className = 'skill-card bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-sky-500/50 transition-all';
      
      skillCard.innerHTML = `
        <div class="flex items-center gap-4 mb-4">
          <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
            ${ICONS[skill.icon]}
          </div>
          <h3 class="text-xl font-semibold text-white">${skill.title}</h3>
        </div>
        <p class="text-slate-300 mb-4">${skill.description}</p>
        <div class="flex flex-wrap gap-2">
          ${skill.tags.map(tag => `<span class="bg-slate-900/80 text-xs font-medium px-2.5 py-1 rounded text-sky-400 border border-sky-900/50">${tag}</span>`).join('')}
        </div>
      `;
      
      skillsContainer.appendChild(skillCard);
    });
  }

  // Populate Work Experience
  const experienceContainer = document.getElementById('experience-container');
  if (experienceContainer) {
    WORK_EXPERIENCE.forEach((exp, index) => {
      const expCard = document.createElement('div');
      expCard.className = 'timeline-container pl-10 relative';
      
      expCard.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
          <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h3 class="text-xl font-semibold text-white">${exp.position}</h3>
              <p class="text-sky-400">${exp.company}</p>
            </div>
            <span class="text-slate-400 text-sm mt-2 md:mt-0">${exp.period}</span>
          </div>
          <p class="text-slate-300 mb-4">${exp.description}</p>
          <ul class="list-disc list-inside text-slate-300 space-y-1">
            ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
          </ul>
        </div>
      `;
      
      experienceContainer.appendChild(expCard);
    });
  }

  // Populate Projects
  const projectsContainer = document.getElementById('projects-container');
  if (projectsContainer) {
    PROJECTS.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card relative overflow-hidden rounded-xl border border-slate-700';
      
      projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
        <div class="p-6 bg-slate-800/90">
          <h3 class="text-xl font-semibold text-white mb-2">${project.title}</h3>
          <p class="text-slate-300 mb-4">${project.description}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            ${project.technologies.map(tech => `<span class="bg-slate-900/80 text-xs font-medium px-2.5 py-1 rounded text-sky-400 border border-sky-900/50">${tech}</span>`).join('')}
          </div>
          <a href="${project.link}" class="inline-flex items-center text-sky-400 hover:text-sky-300">
           
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      `;
      
      projectsContainer.appendChild(projectCard);
    });
  }

  // Populate Education
  const educationContainer = document.getElementById('education-container');
  if (educationContainer) {
    // Education Section
    const educationSection = document.createElement('div');
    educationSection.className = 'mb-10';
    educationSection.innerHTML = `<h3 class="text-2xl font-semibold text-white mb-6">Education</h3>`;
    
    const educationList = document.createElement('div');
    educationList.className = 'space-y-6';
    
    EDUCATION.forEach(edu => {
      const eduCard = document.createElement('div');
      eduCard.className = 'bg-slate-800/50 p-6 rounded-xl border border-slate-700';
      
      eduCard.innerHTML = `
        <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
          <h4 class="text-lg font-semibold text-white">${edu.degree}</h4>
          <span class="text-slate-400 text-sm mt-1 md:mt-0">${edu.period}</span>
        </div>
        <p class="text-sky-400 mb-3">${edu.institution}</p>
        <p class="text-slate-300">${edu.description}</p>
      `;
      
      educationList.appendChild(eduCard);
    });
    
    educationSection.appendChild(educationList);
    educationContainer.appendChild(educationSection);
    
    // Certifications Section
    const certSection = document.createElement('div');
    certSection.innerHTML = `<h3 class="text-2xl font-semibold text-white mb-6">Certifications</h3>`;
    
    const certGrid = document.createElement('div');
    certGrid.className = 'grid grid-cols-1 md:grid-cols-2 gap-6';
    
    CERTIFICATIONS.forEach(cert => {
      const certCard = document.createElement('div');
      certCard.className = 'bg-slate-800/50 p-6 rounded-xl border border-slate-700';
      
      certCard.innerHTML = `
        <div class="flex justify-between items-start">
          <div>
            <h4 class="text-lg font-semibold text-white">${cert.name}</h4>
            <p class="text-sky-400">${cert.issuer}</p>
          </div>
          <span class="text-slate-400 text-sm">${cert.date}</span>
        </div>
        <div class="mt-4">
          <a href="${cert.link}" class="inline-flex items-center text-sky-400 hover:text-sky-300 text-sm">
            View Certificate
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      `;
      
      certGrid.appendChild(certCard);
    });
    
    certSection.appendChild(certGrid);
    educationContainer.appendChild(certSection);
  }

  // Set current year in footer
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Navigation active state
  const navLinks = document.querySelectorAll('#nav-links a');
  const mobileNavLinks = document.querySelectorAll('#mobile-menu a');
  const sections = document.querySelectorAll('main section[id]');
  
  function setActiveLink() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('nav-active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('nav-active');
      }
    });
    
    mobileNavLinks.forEach(link => {
      link.classList.remove('nav-active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('nav-active');
      }
    });
  }
  
  window.addEventListener('scroll', setActiveLink);
  setActiveLink(); // Set initial state

  // Close mobile menu when clicking a link
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

  // Call Scheduler Modal
  const requestCallBtn = document.getElementById('request-call-btn');
  const callSchedulerModal = document.getElementById('call-scheduler-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const callSchedulerForm = document.getElementById('call-scheduler-form');
  
  if (requestCallBtn && callSchedulerModal && closeModalBtn) {
    requestCallBtn.addEventListener('click', () => {
      callSchedulerModal.classList.remove('hidden');
    });
    
    closeModalBtn.addEventListener('click', () => {
      callSchedulerModal.classList.add('hidden');
    });
    
    // Close modal when clicking outside
    callSchedulerModal.addEventListener('click', (e) => {
      if (e.target === callSchedulerModal) {
        callSchedulerModal.classList.add('hidden');
      }
    });
  }
  
  if (callSchedulerForm) {
    callSchedulerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Here you would normally send the form data to a server
      alert('Your call request has been submitted. I will contact you soon!');
      callSchedulerModal.classList.add('hidden');
      callSchedulerForm.reset();
    });
  }

  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Here you would normally send the form data to a server
      alert('Thank you for your message. I will get back to you soon!');
      contactForm.reset();
    });
  }
});