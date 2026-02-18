// Main JavaScript file for Oasis Company portal

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
        }
        
        // Language change event listener
        languageSelect.addEventListener('change', function() {
            const selectedLanguage = this.value;
            localStorage.setItem('language', selectedLanguage);
            
            // Here you would typically trigger language translation
            // For now, we'll just log the change
            console.log('Language changed to:', selectedLanguage);
            
            // You could add translation logic here
            // translatePage(selectedLanguage);
        });
    }
}

// Card animations
function initCardAnimations() {
    const cards = document.querySelectorAll('.suborg-card, .project-card, .team-card');
    
    cards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Animations on scroll
function initAnimations() {
    // Add scroll event listener for animations
    window.addEventListener('scroll', animateOnScroll);
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.suborg-card, .project-card, .team-card, .section-title, .section-subtitle');
    
    elements.forEach(function(element) {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('fade-in-up');
        }
    });
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

// Translation function (placeholder)
function translatePage(language) {
    // This would be implemented with your translation logic
    console.log('Translating page to:', language);
    // Example: Update text content based on selected language
}
