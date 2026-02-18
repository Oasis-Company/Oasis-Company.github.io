// Main JavaScript file for Oasis Company portal

// Navigation scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '0';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '0';
        }
    }
});

// Translation data
const translations = {
    en: {
        logo: 'Oasis Company',
        nav: {
            home: 'Home',
            suborganizations: 'Suborganizations',
            projects: 'Projects',
            teams: 'Teams',
            contact: 'Contact'
        },
        hero: {
            title: 'Oasis Company',
            subtitle: 'Our mission is to create the universe',
            description: 'We explore from the essence of the world. Welcome to join us. We are Oasis Company.',
            cta: 'Explore Our Ecosystem'
        },
        suborganizations: {
            title: 'Suborganizations',
            subtitle: 'Our affiliated institutions',
            wocon: 'Wocon',
            oits: 'OITS',
            eme: 'EME',
            aiLab: 'Oasis AI Lab',
            androidStudio: 'Oasis Android Studio'
        },
        projects: {
            title: 'Projects',
            subtitle: 'Our key initiatives',
            amarEngine: 'Amar Engine',
            woconApp: 'Wocon App',
            urconomy: 'Urconomy'
        },
        teams: {
            title: 'Teams',
            subtitle: 'Our organizational structure',
            origin: 'The Origin',
            originHeadquarters: 'Headquarters: China Mainland (2021-now)',
            gaia: 'The Gaia',
            gaiaHeadquarters: 'Headquarters: Unknown (2023-now)',
            foundingTeam: 'Founding Team',
            ceo: 'CEO:'
        },
        contact: {
            title: 'Contact Us',
            subtitle: 'Get in touch with us',
            note: 'contactOasisComapny.com (Currently unavailable)'
        },
        footer: {
            established: 'Established: 2021.11.02',
            copyright: '&copy; 2026 Oasis Company. All rights reserved.'
        },
        common: {
            github: 'GitHub',
            website: 'Website',
            app: 'App',
            githubComingSoon: 'GitHub: Coming Soon',
            websiteComingSoon: 'Website: Coming Soon'
        }
    },
    zh: {
        logo: '绿洲公司',
        nav: {
            home: '首页',
            suborganizations: '子机构',
            projects: '项目',
            teams: '团队',
            contact: '联系我们'
        },
        hero: {
            title: '绿洲公司',
            subtitle: '我们的使命是创造宇宙',
            description: '我们从世界的本质出发探索。欢迎加入我们。我们是绿洲公司。',
            cta: '探索我们的生态系统'
        },
        suborganizations: {
            title: '子机构',
            subtitle: '我们的附属机构',
            wocon: '沃康',
            oits: '绿洲科技学院',
            eme: '伊多隆',
            aiLab: '绿洲人工智能实验室',
            androidStudio: '绿洲安卓工作室'
        },
        projects: {
            title: '项目',
            subtitle: '我们的关键举措',
            amarEngine: '阿玛引擎',
            woconApp: '沃康应用',
            urconomy: '乌尔经济'
        },
        teams: {
            title: '团队',
            subtitle: '我们的组织结构',
            origin: '起源',
            originHeadquarters: '总部: 中国大陆 (2021-至今)',
            gaia: '盖亚',
            gaiaHeadquarters: '总部: 未知 (2023-至今)',
            foundingTeam: '创始团队',
            ceo: '首席执行官:'
        },
        contact: {
            title: '联系我们',
            subtitle: '与我们取得联系',
            note: 'contactOasisComapny.com (目前不可用)'
        },
        footer: {
            established: '成立于: 2021.11.02',
            copyright: '&copy; 2026 绿洲公司。保留所有权利。'
        },
        common: {
            github: 'GitHub',
            website: '网站',
            app: '应用',
            githubComingSoon: 'GitHub: 即将推出',
            websiteComingSoon: '网站: 即将推出'
        }
    },
    hi: {
        logo: 'ओएसिस कंपनी',
        nav: {
            home: 'होम',
            suborganizations: 'उप-संगठन',
            projects: 'परियोजनाएँ',
            teams: 'टीमें',
            contact: 'संपर्क करें'
        },
        hero: {
            title: 'ओएसिस कंपनी',
            subtitle: 'हमारा मिशन ब्रह्मांड बनाना है',
            description: 'हम दुनिया के सार से अन्वेषण करते हैं। हमसे जुड़ने के लिए आपका स्वागत है। हम ओएसिस कंपनी हैं।',
            cta: 'हमारा पारिस्थितिकी तंत्र अन्वेषित करें'
        },
        suborganizations: {
            title: 'उप-संगठन',
            subtitle: 'हमारे संबद्ध संस्थान',
            wocon: 'वोकॉन',
            oits: 'ओएसिस प्रौद्योगिकी संस्थान',
            eme: 'ईडोलॉन',
            aiLab: 'ओएसिस AI प्रयोगशाला',
            androidStudio: 'ओएसिस एंड्रॉइड स्टूडियो'
        },
        projects: {
            title: 'परियोजनाएँ',
            subtitle: 'हमारी प्रमुख पहलें',
            amarEngine: 'अमर इंजन',
            woconApp: 'वोकॉन ऐप',
            urconomy: 'यूर्कोनॉमी'
        },
        teams: {
            title: 'टीमें',
            subtitle: 'हमारी संगठनात्मक संरचना',
            origin: 'मूल',
            originHeadquarters: 'मुख्यालय: चीन मुख्य भूमि (2021-अब)',
            gaia: 'गाया',
            gaiaHeadquarters: 'मुख्यालय: अज्ञात (2023-अब)',
            foundingTeam: 'संस्थापक टीम',
            ceo: 'सीईओ:'
        },
        contact: {
            title: 'संपर्क करें',
            subtitle: 'हमसे संपर्क करें',
            note: 'contactOasisComapny.com (वर्तमान में अनुपलब्ध)'
        },
        footer: {
            established: 'स्थापित: 2021.11.02',
            copyright: '&copy; 2026 ओएसिस कंपनी। सभी अधिकार सुरक्षित।'
        },
        common: {
            github: 'GitHub',
            website: 'वेबसाइट',
            app: 'ऐप',
            githubComingSoon: 'GitHub: आने वाला है',
            websiteComingSoon: 'वेबसाइट: आने वाली है'
        }
    },
    es: {
        logo: 'Oasis Company',
        nav: {
            home: 'Inicio',
            suborganizations: 'Suborganizaciones',
            projects: 'Proyectos',
            teams: 'Equipos',
            contact: 'Contacto'
        },
        hero: {
            title: 'Oasis Company',
            subtitle: 'Nuestra misión es crear el universo',
            description: 'Exploramos desde la esencia del mundo. Bienvenido a unirte a nosotros. Somos Oasis Company.',
            cta: 'Explora Nuestro Ecosistema'
        },
        suborganizations: {
            title: 'Suborganizaciones',
            subtitle: 'Nuestras instituciones afiliadas',
            wocon: 'Wocon',
            oits: 'Instituto de Tecnología Oasis',
            eme: 'Eidolon',
            aiLab: 'Laboratorio de IA de Oasis',
            androidStudio: 'Estudio Android de Oasis'
        },
        projects: {
            title: 'Proyectos',
            subtitle: 'Nuestras iniciativas clave',
            amarEngine: 'Motor Amar',
            woconApp: 'Aplicación Wocon',
            urconomy: 'Urconomía'
        },
        teams: {
            title: 'Equipos',
            subtitle: 'Nuestra estructura organizativa',
            origin: 'El Origen',
            originHeadquarters: 'Sede: China Continental (2021-ahora)',
            gaia: 'La Gaia',
            gaiaHeadquarters: 'Sede: Desconocida (2023-ahora)',
            foundingTeam: 'Equipo Fundador',
            ceo: 'CEO:'
        },
        contact: {
            title: 'Contáctanos',
            subtitle: 'Ponte en contacto con nosotros',
            note: 'contactOasisComapny.com (Actualmente no disponible)'
        },
        footer: {
            established: 'Fundada: 2021.11.02',
            copyright: '&copy; 2026 Oasis Company. Todos los derechos reservados.'
        },
        common: {
            github: 'GitHub',
            website: 'Sitio web',
            app: 'Aplicación',
            githubComingSoon: 'GitHub: Próximamente',
            websiteComingSoon: 'Sitio web: Próximamente'
        }
    }
};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initPreloader();
    initThemeToggle();
    initMobileMenu();
    initScrollProgress();
    initBackToTop();
    initSmoothScroll();
    initLanguageSelector();
    initCardAnimations();
    initAnimations();
});

// Preloader functionality
function initPreloader() {
    const preloader = document.getElementById('preloader');
    
    if (preloader) {
        // Hide preloader after content is loaded
        window.addEventListener('load', function() {
            setTimeout(function() {
                preloader.classList.add('hidden');
                // Trigger animations for visible elements
                animateOnScroll();
            }, 800);
        });
    }
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    if (themeToggle) {
        // Check for saved theme preference or use system preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            htmlElement.setAttribute('data-theme', 'dark');
        }
        
        // Theme toggle event listener
        themeToggle.addEventListener('click', function() {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Update theme icon
            updateThemeIcon(themeToggle, newTheme);
        });
        
        // Update initial theme icon
        const currentTheme = htmlElement.getAttribute('data-theme');
        updateThemeIcon(themeToggle, currentTheme);
    }
}

// Update theme toggle icon
function updateThemeIcon(toggleElement, theme) {
    const themeIcon = toggleElement.querySelector('.theme-icon svg');
    if (themeIcon) {
        if (theme === 'dark') {
            themeIcon.innerHTML = '<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>';
        } else {
            themeIcon.innerHTML = '<path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>';
        }
    }
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenuButton && navMenu) {
        mobileMenuButton.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Update button aria attribute
            const isExpanded = navMenu.classList.contains('active');
            mobileMenuButton.setAttribute('aria-expanded', isExpanded);
            
            // Change button icon
            const svg = mobileMenuButton.querySelector('svg');
            if (svg) {
                if (isExpanded) {
                    svg.innerHTML = '<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>';
                } else {
                    svg.innerHTML = '<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>';
                }
            }
        });
        
        // Close menu when clicking on a nav link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
                
                const svg = mobileMenuButton.querySelector('svg');
                if (svg) {
                    svg.innerHTML = '<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>';
                }
            });
        });
    }
}

// Scroll progress bar functionality
function initScrollProgress() {
    const scrollProgress = document.getElementById('scroll-progress');
    
    if (scrollProgress) {
        window.addEventListener('scroll', function() {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            
            scrollProgress.style.width = scrolled + '%';
        });
    }
}

// Back to top button functionality
function initBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        // Smooth scroll to top
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') {
                return;
            }
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Calculate offset to account for fixed navbar
                const navbarHeight = 70;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Language selector functionality
function initLanguageSelector() {
    const languageSelect = document.getElementById('language-select');
    
    if (languageSelect) {
        // Check for saved language preference
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            languageSelect.value = savedLanguage;
        } else {
            // Set default language based on browser preference
            const browserLanguage = navigator.language || navigator.userLanguage;
            const defaultLanguage = browserLanguage.startsWith('zh') ? 'zh' : 'en';
            languageSelect.value = defaultLanguage;
        }
        
        // Initialize page with current language
        translatePage(languageSelect.value);
        
        // Language change event listener
        languageSelect.addEventListener('change', function() {
            const selectedLanguage = this.value;
            localStorage.setItem('language', selectedLanguage);
            translatePage(selectedLanguage);
        });
    }
}

// Translation function
function translatePage(language) {
    // Get all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(function(element) {
        const key = element.getAttribute('data-i18n');
        let translation = getTranslation(key, language);
        
        if (translation) {
            // Check if translation contains HTML
            if (translation.includes('&')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update page title
    const pageTitle = document.querySelector('title');
    if (pageTitle) {
        const isChinese = language === 'zh';
        pageTitle.textContent = isChinese ? '绿洲公司 - 创造宇宙' : 'Oasis Company - Creating the Universe';
    }
    
    // Update document language attribute
    document.documentElement.lang = language;
}

// Helper function to get translation
function getTranslation(key, language) {
    const keys = key.split('.');
    let translation = translations[language];
    
    for (const k of keys) {
        if (translation && translation[k] !== undefined) {
            translation = translation[k];
        } else {
            return null;
        }
    }
    
    return translation;
}

// Card animations - Enhanced with Swiss design inspired micro-interactions
function initCardAnimations() {
    const cards = document.querySelectorAll('.suborg-card, .project-card, .team-card');
    
    cards.forEach(function(card) {
        // Add initial state
        card.style.transform = 'translateY(0) scale(1)';
        card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 16px 32px rgba(0, 0, 0, 0.12)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
        });
        
        // Add focus effect for keyboard navigation
        card.addEventListener('focusin', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 16px 32px rgba(0, 0, 0, 0.12)';
        });
        
        card.addEventListener('focusout', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
        });
    });
}

// Animations on scroll - Enhanced with performance optimization
function initAnimations() {
    // Add scroll event listener with throttle for better performance
    window.addEventListener('scroll', throttle(animateOnScroll, 16));
    
    // Initial check for visible elements
    animateOnScroll();
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.suborg-card, .project-card, .team-card, .section-title, .section-subtitle, .cta-button, .contact-link');
    
    elements.forEach(function(element) {
        // Skip elements that are already animated
        if (element.classList.contains('animated')) {
            return;
        }
        
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 80) {
            element.classList.add('fade-in-up', 'animated');
        }
    });
}

// Throttle function for performance optimization
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Add keyboard accessibility
function initKeyboardAccessibility() {
    // Add focus styles for keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
}

// Initialize keyboard accessibility
initKeyboardAccessibility();

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
