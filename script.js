// SAE Projects Data
const saeProjects = [
    {
        id: 1,
        title: "SAE_01 - bitch Poste de Travail",
        subtitle: "Configuration & Sécurisation",
        description: "Installation et configuration sécurisée d'un environnement de travail complet avec mise en place des politiques de sécurité.",
        technologies: ["Linux", "Windows", "VMware", "PowerShell"],
        icon: "cpu",
        color: "green",
        status: "completed",
        difficulty: 3
    },
    {
        id: 2,
        title: "SAE_02 - Analyse de Trafic Réseau",
        subtitle: "Monitoring & Sécurité",
        description: "Mise en place d'outils de surveillance réseau et analyse des flux de données pour détecter les anomalies.",
        technologies: ["Wireshark", "tcpdump", "Python", "Grafana"],
        icon: "network",
        color: "cyan",
        status: "completed",
        difficulty: 4
    },
    {
        id: 3,
        title: "SAE_03 - Base de Données Sécurisée",
        subtitle: "Chiffrement & Protection",
        description: "Conception et implémentation d'une base de données avec chiffrement des données sensibles et contrôle d'accès.",
        technologies: ["PostgreSQL", "MySQL", "Encryption", "SQL"],
        icon: "database",
        color: "green",
        status: "completed",
        difficulty: 4
    },
    {
        id: 4,
        title: "SAE_04 - Audit de Sécurité",
        subtitle: "Tests de Pénétration",
        description: "Réalisation d'un audit complet de sécurité avec tests d'intrusion et rapport de vulnérabilités.",
        technologies: ["Nmap", "Metasploit", "Burp Suite", "Kali Linux"],
        icon: "shield",
        color: "cyan",
        status: "completed",
        difficulty: 5
    },
    {
        id: 5,
        title: "SAE_05 - Cryptographie Appliquée",
        subtitle: "Algorithmes & Chiffrement",
        description: "Implémentation d'algorithmes cryptographiques et création d'un système de chiffrement hybride.",
        technologies: ["Python", "OpenSSL", "RSA", "AES"],
        icon: "lock",
        color: "green",
        status: "completed",
        difficulty: 5
    },
    {
        id: 6,
        title: "SAE_06 - Infrastructure Sécurisée",
        subtitle: "Architecture & Déploiement",
        description: "Conception et déploiement d'une infrastructure sécurisée avec pare-feu et systèmes de détection d'intrusion.",
        technologies: ["Docker", "Kubernetes", "Nginx", "iptables"],
        icon: "server",
        color: "cyan",
        status: "completed",
        difficulty: 4
    },
    {
        id: 7,
        title: "SAE_07 - Forensic Numérique",
        subtitle: "Investigation & Analyse",
        description: "Techniques d'investigation numérique et récupération de preuves sur systèmes compromis.",
        technologies: ["Autopsy", "Volatility", "dd", "hexdump"],
        icon: "eye",
        color: "green",
        status: "progress",
        difficulty: 4
    },
    {
        id: 8,
        title: "SAE_08 - Sécurité Web",
        subtitle: "OWASP & Protection",
        description: "Sécurisation d'applications web contre les vulnérabilités OWASP Top 10 et mise en place de WAF.",
        technologies: ["OWASP ZAP", "ModSecurity", "PHP", "JavaScript"],
        icon: "globe",
        color: "cyan",
        status: "progress",
        difficulty: 4
    },
    {
        id: 9,
        title: "SAE_09 - Reverse Engineering",
        subtitle: "Analyse & Décompilation",
        description: "Analyse de malwares et techniques de reverse engineering pour comprendre le comportement des codes malveillants.",
        technologies: ["IDA Pro", "Ghidra", "OllyDbg", "Assembly"],
        icon: "bug",
        color: "green",
        status: "planned",
        difficulty: 5
    },
    {
        id: 10,
        title: "SAE_10 - Sécurité Mobile",
        subtitle: "Android & iOS",
        description: "Audit de sécurité d'applications mobiles et mise en place de solutions de protection.",
        technologies: ["Android Studio", "Xcode", "JADX", "MobSF"],
        icon: "zap",
        color: "cyan",
        status: "planned",
        difficulty: 4
    },
    {
        id: 11,
        title: "SAE_11 - Sécurité IoT",
        subtitle: "Objets Connectés",
        description: "Sécurisation d'un écosystème IoT avec authentification et chiffrement des communications.",
        technologies: ["Arduino", "Raspberry Pi", "MQTT", "TLS"],
        icon: "cpu",
        color: "green",
        status: "planned",
        difficulty: 4
    },
    {
        id: 12,
        title: "SAE_12 - Projet Final",
        subtitle: "Synthèse & Innovation",
        description: "Projet de synthèse intégrant toutes les compétences acquises avec innovation en cybersécurité.",
        technologies: ["Multi-stack", "Innovation", "Recherche", "Présentation"],
        icon: "terminal",
        color: "cyan",
        status: "upcoming",
        difficulty: 5
    }
];

// Skills Data
const skillsData = {
    security: {
        title: 'Cybersécurité',
        skills: [
            { name: 'Tests de Pénétration', level: 85, tools: ['Metasploit', 'Burp Suite', 'Nmap'] },
            { name: 'Analyse de Vulnérabilités', level: 90, tools: ['OpenVAS', 'Nessus', 'Qualys'] },
            { name: 'Forensic Numérique', level: 75, tools: ['Autopsy', 'Volatility', 'Sleuth Kit'] },
            { name: 'Cryptographie', level: 80, tools: ['OpenSSL', 'GPG', 'HashCat'] },
            { name: 'Sécurité Réseau', level: 88, tools: ['Wireshark', 'pfSense', 'Snort'] },
            { name: 'OSINT', level: 70, tools: ['Maltego', 'Shodan', 'TheHarvester'] }
        ]
    },
    development: {
        title: 'Développement',
        skills: [
            { name: 'Python', level: 92, tools: ['Django', 'Flask', 'Requests'] },
            { name: 'JavaScript/TypeScript', level: 85, tools: ['React', 'Node.js', 'Express'] },
            { name: 'C/C++', level: 75, tools: ['GCC', 'Valgrind', 'Make'] },
            { name: 'Shell Scripting', level: 90, tools: ['Bash', 'PowerShell', 'Zsh'] },
            { name: 'Web Security', level: 88, tools: ['OWASP', 'JWT', 'OAuth'] },
            { name: 'API Development', level: 82, tools: ['REST', 'GraphQL', 'Swagger'] }
        ]
    },
    systems: {
        title: 'Systèmes & Réseaux',
        skills: [
            { name: 'Linux Administration', level: 90, tools: ['Ubuntu', 'CentOS', 'Kali'] },
            { name: 'Windows Server', level: 75, tools: ['Active Directory', 'PowerShell', 'IIS'] },
            { name: 'Virtualisation', level: 85, tools: ['VMware', 'VirtualBox', 'Hyper-V'] },
            { name: 'Conteneurisation', level: 80, tools: ['Docker', 'Kubernetes', 'Podman'] },
            { name: 'Monitoring', level: 78, tools: ['Nagios', 'Zabbix', 'Grafana'] },
            { name: 'Firewall & IDS', level: 85, tools: ['iptables', 'Suricata', 'Fail2ban'] }
        ]
    },
    database: {
        title: 'Bases de Données',
        skills: [
            { name: 'SQL', level: 88, tools: ['PostgreSQL', 'MySQL', 'SQLite'] },
            { name: 'NoSQL', level: 75, tools: ['MongoDB', 'Redis', 'Elasticsearch'] },
            { name: 'Database Security', level: 85, tools: ['Encryption', 'Access Control', 'Audit'] },
            { name: 'Data Analysis', level: 70, tools: ['Pandas', 'NumPy', 'Matplotlib'] },
            { name: 'Database Admin', level: 80, tools: ['Backup', 'Recovery', 'Optimization'] },
            { name: 'Big Data', level: 65, tools: ['Hadoop', 'Spark', 'Kafka'] }
        ]
    }
};

// SVG Icons
const icons = {
    cpu: '<path d="M4 4h16v16H4z"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v6M15 1v6M9 17v6M15 17v6M1 9h6M17 9h6M1 15h6M17 15h6"/>',
    network: '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M12 12v4h-4"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><circle cx="12" cy="16" r="1"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    server: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    globe: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    bug: '<rect width="8" height="14" x="8" y="6" rx="4"/><path d="M9 9v-3a3 3 0 0 1 6 0v3"/><circle cx="12" cy="17" r="1"/><path d="M21 9h-4M3 9h4M21 15h-4M3 15h4M21 12h-4M3 12h4"/>',
    zap: '<polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>',
    terminal: '<polyline points="4,17 10,11 4,5"/><line x1="12" y1="19" x2="20" y2="19"/>'
};

// DOM Elements
let currentSection = 'home';
let currentSkillCategory = 'security';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Hide loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }
    }, 2000);

    // Initialize typing animation
    initializeTypingAnimation();
    
    // Initialize navigation
    initializeNavigation();
    
    // Generate SAE cards
    generateSAECards();
    
    // Initialize skills section
    initializeSkills();
    
    // Initialize contact form
    initializeContactForm();
}

function initializeTypingAnimation() {
    const text = "Expert en Cybersécurité & Développement";
    const typingElement = document.getElementById('typing-text');
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        } else {
            typingElement.innerHTML += '<span class="cursor">|</span>';
            // Add blinking cursor animation
            const cursor = typingElement.querySelector('.cursor');
            if (cursor) {
                setInterval(() => {
                    cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
                }, 500);
            }
        }
    }

    setTimeout(typeText, 1000);
}

function initializeNavigation() {
    // Main navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const section = item.getAttribute('data-section');
            navigateToSection(section);
        });
    });

    // Floating navigation dots
    const navDots = document.querySelectorAll('.nav-dot');
    navDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const section = dot.getAttribute('data-section');
            navigateToSection(section);
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

function navigateToSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Update navigation states
    updateNavigationState(sectionId);
    
    currentSection = sectionId;
}

function updateNavigationState(activeSection) {
    // Update main navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === activeSection) {
            item.classList.add('active');
        }
    });

    // Update floating navigation
    const navDots = document.querySelectorAll('.nav-dot');
    navDots.forEach(dot => {
        dot.classList.remove('active');
        if (dot.getAttribute('data-section') === activeSection) {
            dot.classList.add('active');
        }
    });
}

function generateSAECards() {
    const saeGrid = document.getElementById('sae-grid');
    if (!saeGrid) return;

    saeGrid.innerHTML = '';

    saeProjects.forEach(project => {
        const card = createSAECard(project);
        saeGrid.appendChild(card);
    });
}

function createSAECard(project) {
    const card = document.createElement('div');
    card.className = `sae-card ${project.color}`;
    
    const statusClass = getStatusClass(project.status);
    const statusText = getStatusText(project.status);
    const difficultyStars = generateDifficultyStars(project.difficulty);
    const iconSVG = icons[project.icon] || icons.shield;

    card.innerHTML = `
        <div class="sae-header">
            <div class="sae-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${iconSVG}
                </svg>
            </div>
            <span class="sae-status ${statusClass}">${statusText}</span>
        </div>
        <div class="sae-content">
            <h3>${project.title}</h3>
            <p class="sae-subtitle">${project.subtitle}</p>
            <p class="sae-description">${project.description}</p>
            <div class="sae-difficulty">
                <span class="sae-difficulty-label">Difficulté:</span>
                <div class="difficulty-stars">${difficultyStars}</div>
            </div>
            <div class="sae-tech">
                ${project.technologies.slice(0, 3).map(tech => `<span>${tech}</span>`).join('')}
                ${project.technologies.length > 3 ? `<span class="more">+${project.technologies.length - 3}</span>` : ''}
            </div>
        </div>
    `;

    // Add click event for modal (simplified for static version)
    card.addEventListener('click', () => {
        showSAEModal(project);
    });

    return card;
}

function showSAEModal(project) {
    // Simple alert for demonstration - in a full version, this would be a proper modal
    const techList = project.technologies.join(', ');
    const message = `${project.title}\n\n${project.description}\n\nTechnologies: ${techList}\n\nDifficulté: ${project.difficulty}/5 étoiles\n\nStatut: ${getStatusText(project.status)}`;
    alert(message);
}

function getStatusClass(status) {
    const statusMap = {
        'completed': 'completed',
        'progress': 'progress',
        'planned': 'planned',
        'upcoming': 'upcoming'
    };
    return statusMap[status] || 'planned';
}

function getStatusText(status) {
    const statusMap = {
        'completed': 'Terminé',
        'progress': 'En cours',
        'planned': 'Planifié',
        'upcoming': 'À venir'
    };
    return statusMap[status] || 'Planifié';
}

function generateDifficultyStars(difficulty) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        const activeClass = i <= difficulty ? 'active' : '';
        stars += `<span class="${activeClass}">★</span>`;
    }
    return stars;
}

function initializeSkills() {
    // Initialize skill navigation
    const skillNavBtns = document.querySelectorAll('.skill-nav-btn');
    skillNavBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            switchSkillCategory(category);
        });
    });

    // Generate initial skills content
    generateSkillsContent(currentSkillCategory);
}

function switchSkillCategory(category) {
    // Update navigation state
    const skillNavBtns = document.querySelectorAll('.skill-nav-btn');
    skillNavBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });

    // Generate new content
    generateSkillsContent(category);
    currentSkillCategory = category;
}

function generateSkillsContent(category) {
    const skillsContent = document.getElementById('skills-content');
    if (!skillsContent) return;

    const categoryData = skillsData[category];
    if (!categoryData) return;

    skillsContent.innerHTML = '';

    categoryData.skills.forEach(skill => {
        const skillItem = createSkillItem(skill);
        skillsContent.appendChild(skillItem);
    });

    // Animate progress bars
    setTimeout(() => {
        const progressBars = skillsContent.querySelectorAll('.skill-progress-bar');
        progressBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = level + '%';
        });
    }, 100);
}

function createSkillItem(skill) {
    const item = document.createElement('div');
    item.className = 'skill-item';

    const progressClass = getProgressClass(skill.level);

    item.innerHTML = `
        <div class="skill-header">
            <h3 class="skill-name">${skill.name}</h3>
            <span class="skill-level">${skill.level}%</span>
        </div>
        <div class="skill-progress">
            <div class="skill-progress-bar ${progressClass}" data-level="${skill.level}"></div>
        </div>
        <div class="skill-tools">
            ${skill.tools.map(tool => `<span>${tool}</span>`).join('')}
        </div>
    `;

    return item;
}

function getProgressClass(level) {
    if (level >= 80) return 'high';
    if (level >= 60) return 'medium';
    return 'low';
}

function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmission();
    });
}

function handleFormSubmission() {
    const submitBtn = document.querySelector('.submit-btn');
    const formSuccess = document.getElementById('form-success');
    const form = document.getElementById('contact-form');

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = 'Envoi...';
    submitBtn.querySelector('.loading-spinner').style.display = 'block';
    submitBtn.querySelector('svg').style.display = 'none';

    // Simulate form submission
    setTimeout(() => {
        // Reset button
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = 'ENVOYER LE MESSAGE';
        submitBtn.querySelector('.loading-spinner').style.display = 'none';
        submitBtn.querySelector('svg').style.display = 'block';

        // Show success message
        formSuccess.style.display = 'block';
        form.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            formSuccess.style.display = 'none';
        }, 5000);
    }, 2000);
}

// Utility functions for responsive behavior
function handleResize() {
    const width = window.innerWidth;
    
    // Handle mobile navigation
    if (width <= 768) {
        const navMenu = document.getElementById('nav-menu');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    }
}

// Add resize listener
window.addEventListener('resize', handleResize);

// Smooth scrolling for anchor links (if any)
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add some interactive effects
document.addEventListener('mousemove', function(e) {
    // Subtle parallax effect for particles
    const particles = document.querySelectorAll('.particle');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    particles.forEach((particle, index) => {
        const speed = (index + 1) * 0.5;
        const x = mouseX * speed;
        const y = mouseY * speed;
        particle.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open modals or menus
        const navMenu = document.getElementById('nav-menu');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    }
});

// Performance optimization: Lazy load images if any
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if supported
if ('IntersectionObserver' in window) {
    lazyLoadImages();
}

// Add some console easter egg
console.log(`
 ██████╗██╗   ██╗██████╗ ███████╗██████╗ ███████╗███████╗ ██████╗
██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗██╔════╝██╔════╝██╔════╝
██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝███████╗█████╗  ██║     
██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗╚════██║██╔══╝  ██║     
╚██████╗   ██║   ██████╔╝███████╗██║  ██║███████║███████╗╚██████╗
 ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝

🔒 Portfolio Cybersécurité - Sécurisé par design
👨‍💻 Développé avec passion pour la sécurité informatique
🛡️ Tous les systèmes sont opérationnels

Vous inspectez le code ? Excellent réflexe de sécurité ! 🕵️‍♂️
`);