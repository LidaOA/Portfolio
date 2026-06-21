document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       SCROLL NAVBAR HIGHLIGHT & STICKY STYLING
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
        // Sticky Navbar styling
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active Link based on scroll position
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    /* ==========================================================================
       MOBILE MENU TOGGLE
       ========================================================================== */
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking nav link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    /* ==========================================================================
       VIDEO CARD HOVER PREVIEWS
       ========================================================================== */
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const video = card.querySelector('.video-preview');
        
        if (video) {
            card.addEventListener('mouseenter', () => {
                // Play video in cards silently on hover
                video.play().catch(error => {
                    // Autoplay might be blocked until interaction, ignore error
                    console.log("Hover preview blocked or loaded: ", error);
                });
            });

            card.addEventListener('mouseleave', () => {
                video.pause();
                // Reset video back to start
                video.currentTime = 0;
            });
        }
    });

    /* ==========================================================================
       VIDEO MODAL LIGHTBOX
       ========================================================================== */
    const videoModal = document.getElementById('video-modal');
    const modalVideoTitle = document.getElementById('modal-video-title');
    const modalVideoPlayer = document.getElementById('modal-video-player');
    const modalClose = document.getElementById('modal-close');
    const modalBackdrop = document.getElementById('modal-backdrop');

    const openModal = (videoSrc, videoTitle) => {
        if (!videoModal || !modalVideoPlayer || !modalVideoTitle) return;
        
        modalVideoTitle.textContent = videoTitle;
        modalVideoPlayer.src = videoSrc;
        modalVideoPlayer.load();
        
        // Open modal
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Disable page scrolling
    };

    const closeModal = () => {
        if (!videoModal || !modalVideoPlayer) return;
        
        videoModal.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable page scrolling
        
        // Pause and reset modal video
        modalVideoPlayer.pause();
        modalVideoPlayer.removeAttribute('src');
        modalVideoPlayer.load();
    };

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoSrc = card.getAttribute('data-video');
            const videoTitle = card.getAttribute('data-title');
            if (videoSrc && videoTitle) {
                openModal(videoSrc, videoTitle);
            }
        });
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
            closeModal();
        }
    });

    /* ==========================================================================
       EMAIL COPY TO CLIPBOARD
       ========================================================================== */
    const btnCopy = document.getElementById('btn-copy');
    const emailAddress = document.getElementById('email-address');
    const copyTooltip = document.getElementById('copy-tooltip');

    if (btnCopy && emailAddress && copyTooltip) {
        btnCopy.addEventListener('click', (e) => {
            e.stopPropagation(); // Avoid triggering any card click if nested
            
            const emailText = emailAddress.textContent;
            navigator.clipboard.writeText(emailText).then(() => {
                copyTooltip.textContent = 'Copié !';
                copyTooltip.style.opacity = '1';
                copyTooltip.style.visibility = 'visible';
                copyTooltip.style.transform = 'translateX(-50%) translateY(0)';

                setTimeout(() => {
                    copyTooltip.textContent = 'Copier';
                    copyTooltip.removeAttribute('style'); // Return to CSS values
                }, 2000);
            }).catch(err => {
                console.error('Erreur lors de la copie : ', err);
            });
        });
    }

    /* ==========================================================================
       SCROLL ANIMATIONS (INTERSECTION OBSERVER)
       ========================================================================== */
    const fadeElements = document.querySelectorAll('.fade-in-element');
    
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Trigger only once
                }
            });
        }, observerOptions);

        fadeElements.forEach(el => {
            observer.observe(el);
        });
    } else {
        // Fallback for older browsers
        fadeElements.forEach(el => {
            el.classList.add('visible');
        });
    }
});
