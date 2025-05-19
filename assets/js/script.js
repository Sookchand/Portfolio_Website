// Function to show demo tabs
function showDemoTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.demo-tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.demo-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(tabName + '-tab').style.display = 'block';

    // Add active class to the clicked tab
    document.querySelector(`.demo-tab[onclick="showDemoTab('${tabName}')"]`).classList.add('active');
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    for (const link of scrollLinks) {
        link.addEventListener('click', function(e) {
            // Only if the link points to an ID on the same page
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                if (targetId === '#') return; // Skip if it's just "#"

                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

    // Mobile navigation toggle
    const navToggle = document.createElement('div');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';

    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('nav ul');

    if (nav && navLinks) {
        nav.insertBefore(navToggle, navLinks);

        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('show');
            this.classList.toggle('active');
        });
    }

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject') ? document.getElementById('subject').value : '';
            const message = document.getElementById('message').value;

            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Here you would normally send the form data to a server
            // For now, we'll just show a success message
            const formGroups = contactForm.querySelectorAll('.form-group');
            const submitButton = contactForm.querySelector('button[type="submit"]');

            // Hide form elements
            formGroups.forEach(group => {
                group.style.display = 'none';
            });

            if (submitButton) {
                submitButton.style.display = 'none';
            }

            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <h3>Message Sent!</h3>
                <p>Thank you for contacting me, ${name}. I'll get back to you as soon as possible.</p>
            `;

            contactForm.appendChild(successMessage);
        });
    }

    // Add active class to navigation based on current page
    const currentPage = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('nav ul li a');

    navItems.forEach(item => {
        const itemPage = item.getAttribute('href').split('/').pop();

        if (currentPage === itemPage ||
            (currentPage === '' && itemPage === 'index.html') ||
            (currentPage === 'index.html' && itemPage === 'index.html')) {
            item.classList.add('active');
        }
    });

    // Project image hover effect
    const projectImages = document.querySelectorAll('.project-image img');

    projectImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Skill item animation
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Add CSS for mobile navigation
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            nav {
                position: relative;
            }

            .nav-toggle {
                display: block;
                cursor: pointer;
                font-size: 1.5rem;
                z-index: 1000;
            }

            .nav-toggle.active i:before {
                content: "\\f00d";
            }

            nav ul {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background-color: #1E88E5;
                padding: 20px;
                z-index: 999;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            }

            nav ul.show {
                display: flex;
            }

            nav ul li {
                margin: 10px 0;
            }

            .success-message {
                text-align: center;
                padding: 20px;
            }

            .success-message i {
                font-size: 3rem;
                color: #4CAF50;
                margin-bottom: 15px;
            }

            .success-message h3 {
                margin-bottom: 10px;
                color: #333;
            }
        }

        @media (min-width: 769px) {
            .nav-toggle {
                display: none;
            }
        }
    `;

    document.head.appendChild(style);

    // Add loading indicator for Streamlit links
    document.querySelectorAll('a[href*="streamlit.app"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // Get the URL to determine which Streamlit app is being loaded
            const streamlitUrl = this.getAttribute('href');
            const isSupermarketApp = streamlitUrl.includes('supermarket-optimisation');

            // Remove any existing loading indicators
            const existingIndicators = document.querySelectorAll('.loading-indicator');
            existingIndicators.forEach(indicator => indicator.remove());

            // Create new loading indicator
            const loadingDiv = document.createElement('div');
            loadingDiv.className = 'loading-indicator show';

            if (isSupermarketApp) {
                loadingDiv.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading Supermarket Optimization App... Please wait';
            } else {
                loadingDiv.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading Streamlit App... Please wait';
            }

            // Insert the loading indicator after the link's parent element
            this.parentNode.appendChild(loadingDiv);

            // For the Supermarket Optimization app, show more detailed progress
            if (isSupermarketApp) {
                // First progress update
                setTimeout(() => {
                    loadingDiv.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Initializing Streamlit environment...';
                }, 2000);

                // Second progress update
                setTimeout(() => {
                    loadingDiv.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading AI models and data...';
                }, 4000);

                // Third progress update
                setTimeout(() => {
                    loadingDiv.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Almost there! Preparing the dashboard...';
                }, 6000);

                // Remove the loading indicator after transition
                setTimeout(() => {
                    loadingDiv.style.opacity = '0';
                    setTimeout(() => {
                        loadingDiv.remove();
                    }, 500);
                }, 8000);
            } else {
                // For other Streamlit apps, use the standard loading sequence
                setTimeout(() => {
                    loadingDiv.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Initializing Streamlit environment...';
                }, 2000);

                setTimeout(() => {
                    loadingDiv.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Almost there! Preparing the application...';
                }, 4000);

                setTimeout(() => {
                    loadingDiv.style.opacity = '0';
                    setTimeout(() => {
                        loadingDiv.remove();
                    }, 500);
                }, 6000);
            }
        });
    });
});