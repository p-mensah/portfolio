
import React from 'react';
import type { Service, WorkExperience, EducationItem, CertificationItem, Project } from './types';

export const PERSONAL_INFO = {
  name: 'Peter Mensah',
  title: 'IT Professional & Software Developer',
  mobile: '+233240957500',
  email: 'ing.mensah@outlook.com',
  address: 'Accra, Ghana',
  githubUsername: 'ing-mensah',
  github: 'https://github.com/ing-mensah',
  linkedin: 'https://www.linkedin.com/in/peter-mensah-it/',
  profileSummary: `An IT Professional with extensive expertise in designing, implementing, and managing cutting-edge IT systems. Proficient in managed IT services, cloud computing solutions, cybersecurity, and comprehensive IT support with a proven track record of spearheading digital transformation initiatives, optimizing IT operations, and driving technological advancements to support business success. Strong problem-solving abilities, coupled with a keen eye for emerging technologies and industry trends. Committed to delivering innovative solutions that align with corporate objectives and elevate organizational efficiency.`,
};

// Service Icons for the new Skills section
const DevelopmentIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);
const DatabaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
);
const SecurityIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const StrategyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const SupportIconNew: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
);
const ProductIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 9V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/></svg>
);


export const SERVICES_DATA: Service[] = [
    {
        title: 'Developer Tools',
        description: 'Proficient with modern tools for version control, code editing, and database management to streamline development.',
        icon: DevelopmentIcon,
        tags: ['Mongo DB', 'VsCode', 'Git', 'GitHub']
    },
    {
        title: 'Frameworks',
        description: 'Building dynamic and responsive web applications using modern frontend and backend frameworks.',
        icon: ProductIcon,
        tags: ['Node.js', 'React.js', 'Next.js', 'Tailwind CSS']
    },
    {
        title: 'Database & Analytics',
        description: 'Skilled in database management, business intelligence, and reporting to drive data-informed decisions and insights.',
        icon: DatabaseIcon,
        tags: ['MySQL', 'Excel', 'Business Intelligence', 'Reporting & Analytics']
    },
    {
        title: 'Network Security & Management',
        description: 'Implementing robust security protocols and managing network infrastructure to ensure system integrity and reliability.',
        icon: SecurityIcon,
        tags: ['Cybersecurity', 'Network Management', 'Routing & Switching', 'Wireless Networking', 'Virtualization', 'Risk Assessment']
    },
    {
        title: 'Programming Languages',
        description: 'Fluent in multiple languages for both frontend and backend development to create versatile solutions.',
        icon: DevelopmentIcon,
        tags: ['C++', 'PHP', 'Python', 'HTML', 'CSS', 'JavaScript']
    },
    {
        title: 'Other Technical Skills',
        description: 'A diverse skill set covering hardware deployment, technical writing, operating systems, and data backup strategies.',
        icon: StrategyIcon,
        tags: ['Hardware deployment', 'Technical writing', 'Operating system knowledge', 'Data backup & replication']
    },
];

// Experience Icons
const TeamLeadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const DeveloperIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);
const HelpDeskIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
);
const SupportIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M12 12a4 4 0 1 0 0 8 4 4 0 0 0 0 8z"/><path d="M12 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0z"/><path d="M12 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0z"/></svg>
);
const AnalystIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
);


export const WORK_HISTORY: WorkExperience[] = [
    {
        company: 'VODA Customer Experience Center',
        title: 'Team Lead',
        period: 'July 2024 - Dec 2024',
        icon: TeamLeadIcon,
        summary: 'Led a team of 50 customer service representatives, implementing mentorship programs and analyzing KPIs to improve team productivity and customer satisfaction.',
        details: [
            'Led a team of 50 customer service representatives by implementing mentorship programs and weekly team-building exercises, resulting in significant improvement in team productivity.',
            'Analyzed KPIs (average handling time, customer satisfaction, first-call resolution) and reoriented workflows by launching new scripts and setting up real-time dashboards, resulting in measurable uplift in customer satisfaction and first-call resolution rates.',
            'Streamlined training programs by modularizing content and introducing simulation exercises, substantially reducing onboarding time and improving first-call resolution.',
            'Conducted weekly call evaluations and one-on-one coaching, driving notable improvement in agent performance scores.',
            'Resolved escalated customer issues using QContact CRM analytics and structured root cause analysis, achieving high first-contact resolution rates.',
            'Compiled daily KPI reports and presented insights that led to onboarding changes, improving new agent readiness.'
        ]
    },
    {
        company: 'JMP4AFRICA (NGO)',
        title: 'IT & Product Developer (Voluntary)',
        period: 'Aug 2020 - Jan 2024',
        icon: DeveloperIcon,
        summary: 'Designed and built a custom volunteer registration portal, managed product roadmaps using Agile methodology, and collaborated with cross-functional teams to create user-friendly interfaces.',
        details: [
            'Designed and built a custom volunteer registration portal, resulting in significant increase in volunteer sign-ups.',
            'Conducted market research to identify pain points, influencing key product decisions.',
            'Managed product roadmaps and prioritized features using Agile methodology, ensuring timely delivery.',
            'Worked with senior developers and the design team to integrate APIs and create user-friendly interfaces, enhancing app features, performance, and overall appeal.',
            'Collaborated with cross-functional teams to launch a mobile app for fundraising events.',
            'Developed a free, open-source software tool to help the NGO with specific tasks and problem-solving.',
            'Contributed to a community-driven tech project related to the NGO\'s mission.',
            'Provided pro bono IT consulting to the NGO, helping them improve their technology infrastructure.'
        ]
    },
    {
        company: 'Sylversys Consulting International',
        title: 'IT Help Desk Specialist',
        period: 'Dec 2018 - April 2019',
        icon: HelpDeskIcon,
        summary: 'Delivered on-site and remote IT support for Microsoft Office 365, deployed O365 solutions, and monitored client systems to proactively reduce incident response time.',
        details: [
            'Delivered on-site and remote IT support to Microsoft Office 365 users globally, improving client system uptime and boosting overall customer satisfaction.',
            'Deployed Microsoft Office 365 solutions (Exchange Online, SharePoint Online, Azure AD) for global clients, securing domain management and streamlining data/email archiving processes.',
            'Monitored client systems via the GlobalWatch™ platform and proactively escalated incidents, reducing average incident response time.',
            'Managed incident tickets through the ITSM portal and LogMeIn, maintaining high SLA (Service-Level Agreement) compliance rates across global accounts.',
            'Provided end-user support for Microsoft Office 365 (user management, license configuration, Rights Management), increasing user satisfaction ratings.',
            'Maintained accurate CMDB documentation and streamlined knowledge bases, enhancing team-wide first-time resolution rates.'
        ]
    },
    {
        company: 'Incharge Global Limited',
        title: 'IT Support Officer',
        period: 'Feb 2016 - Oct 2018',
        icon: SupportIcon,
        summary: 'Provided technical support for business-critical applications, strengthened system security by implementing IT policies, and served as an escalation point for network issues.',
        details: [
            'Provided technical support for business-critical applications (Cloud services, Domains, USSD apps and Payment Gateway platforms), enhancing operational reliability across departments.',
            'Strengthened system security by implementing IT policies, enhancing password protocols, and tightening access controls, reducing unauthorized access incidents.',
            'Delivered end-user support via helpdesk, phone, and remote tools, improving service response times and securing remote access points.',
            'Developed step-by-step training manuals post-application upgrades, improving user adoption rates and reducing support queries.',
            'Served as the escalation point for network and security issues, minimizing downtime and ensuring business continuity.'
        ]
    },
    {
        company: 'Millicom Ghana (Tigo)',
        title: 'Billing Assurance Analyst (Assistant)',
        period: 'Oct 2014 - Jan 2016',
        icon: AnalystIcon,
        summary: 'Validated revenue using internal audit protocols, implemented risk-based controls, and developed SQL scripts to automate transaction monitoring and ensure data integrity.',
        details: [
            'Validated Tigocash revenue using internal audit protocols to ensure accuracy and compliance with financial controls.',
            'Designed and implemented risk-based audit controls on Tigocash, reducing fraud exposure and strengthening financial security.',
            'Reconciled high-volume e-money transactions with trust accounts and partner banks, identifying and resolving discrepancies within SLA timelines.',
            'Conducted monthly reconciliations between Tigocash (Utiba) and the Convergent Billing System (CBS) for airtime transactions, ensuring data integrity.',
            'Tested new rates on Tigocash transactions, identifying and reporting defects to ensure accuracy and functionality.',
            'Verified SIM card functionality through end-to-end testing pre/post-deployment, reducing activation failures.',
            'Developed SQL scripts in Management Studio to automate transaction monitoring, enabling early detection of irregularities and improving data integrity controls.'
        ]
    }
];

export const EDUCATION_DATA: EducationItem[] = [
    {
        institution: 'Garden City University College',
        degree: 'BSc. Information Technology',
        period: 'Feb 2010 - July 2014'
    },
    {
        institution: 'Odorgonno Secondary School',
        degree: 'WASSCE - General Arts',
        period: 'Sept 2005 - May 2008'
    }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
    {
        institution: 'International Cybersecurity Institute (ICSI)',
        name: 'CNSS Certified Network Security Specialist',
        date: 'May 2022'
    }
];

export const PROJECTS_DATA: Project[] = [
    {
        title: 'Volunteer Management Portal',
        description: 'A comprehensive platform for NGOs to register, manage, and communicate with volunteers. Features event scheduling, task assignment, and automated reporting.',
        image: 'https://images.unsplash.com/photo-1516542076529-1ea0855399f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
        tags: ['React', 'Node.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
        liveUrl: `https://${PERSONAL_INFO.githubUsername}.github.io/volunteer-management-portal`,
        repoUrl: `https://github.com/${PERSONAL_INFO.githubUsername}/volunteer-management-portal`,
    },
    {
        title: 'Secure File Transfer System',
        description: 'A web-based application designed for secure sharing of sensitive documents, featuring end-to-end encryption, user access controls, and audit trails.',
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        tags: ['Cybersecurity', 'PHP', 'MySQL', 'Encryption', 'JavaScript'],
        liveUrl: `https://${PERSONAL_INFO.githubUsername}.github.io/secure-file-transfer`,
        repoUrl: `https://github.com/${PERSONAL_INFO.githubUsername}/secure-file-transfer`,
    },
    {
        title: 'Real-time KPI Dashboard',
        description: 'An analytics dashboard for customer service teams that visualizes key performance indicators like average handling time and first-call resolution in real-time.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        tags: ['React', 'Node.js', 'BI & Analytics', 'WebSockets'],
        liveUrl: `https://${PERSONAL_INFO.githubUsername}.github.io/real-time-kpi-dashboard`,
        repoUrl: `https://github.com/${PERSONAL_INFO.githubUsername}/real-time-kpi-dashboard`,
    },
    {
        title: 'IT Asset Management System',
        description: 'A web application for businesses to track and manage their IT assets, including hardware, software licenses, and user assignments, featuring maintenance scheduling and reporting.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
        tags: ['React', 'Node.js', 'MySQL', 'Express', 'Inventory Management'],
        liveUrl: `https://${PERSONAL_INFO.githubUsername}.github.io/it-asset-management`,
        repoUrl: `https://github.com/${PERSONAL_INFO.githubUsername}/it-asset-management`,
    },
    {
        title: 'Network Security Dashboard',
        description: 'A real-time network monitoring dashboard that visualizes traffic, detects anomalies, and alerts administrators to potential security threats, built with a focus on data visualization.',
        image: 'https://images.unsplash.com/photo-1614064548237-02f15562b323?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        tags: ['Cybersecurity', 'JavaScript', 'Data Visualization', 'WebSockets', 'Node.js'],
        liveUrl: `https://${PERSONAL_INFO.githubUsername}.github.io/network-security-dashboard`,
        repoUrl: `https://github.com/${PERSONAL_INFO.githubUsername}/network-security-dashboard`,
    },
    {
        title: 'E-commerce Analytics Platform',
        description: 'A full-featured e-commerce platform with an integrated business intelligence module to track sales, customer behavior, and product performance for actionable insights.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80',
        tags: ['PHP', 'MySQL', 'BI & Analytics', 'React', 'E-commerce'],
        liveUrl: `https://${PERSONAL_INFO.githubUsername}.github.io/ecommerce-analytics-platform`,
        repoUrl: `https://github.com/${PERSONAL_INFO.githubUsername}/ecommerce-analytics-platform`,
    },
];

export const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);

export const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

export const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

export const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6.2 0-1.4-.5-2.5-1.3-3.4.1-.3.5-1.6 0-3.2 0 0-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1c-.5 1.6-.1 2.9 0 3.2C4.5 7.3 4 8.4 4 9.8c0 4.8 2.7 5.9 5.5 6.2-.6.5-.5 1.1-.5 2V21"></path></svg>
);

export const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
        </defs>
        <path d="M8 28V4L18 4C22.4183 4 26 7.58172 26 12C26 16.4183 22.4183 20 18 20H14" stroke="url(#logo-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 28V20L22 28" stroke="url(#logo-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m4.93 19.07 1.41-1.41"></path><path d="m17.66 6.34 1.41-1.41"></path></svg>
);

export const MoonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
);

export const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 4.517 1.48-8.279-6.064-5.828 8.332-1.151z"/>
    </svg>
);

export const CodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);

export const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
);

export const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
);
