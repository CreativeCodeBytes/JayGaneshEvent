document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you would typically send this data to a server
        console.log('Form submitted:', { name, email, message });

        // Show a success message
        const formContainer = this.parentElement;
        formContainer.innerHTML = `
            <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">Thank you, ${name}!</h4>
                <p>Your message has been sent successfully. We will get back to you soon.</p>
            </div>
        `;

        // Reset the form after 5 seconds
        setTimeout(() => {
            formContainer.innerHTML = this.outerHTML;
            document.getElementById('contactForm').addEventListener('submit', arguments.callee);
        }, 5000);
    });

    // Add animation to service cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card').forEach(card => {
        observer.observe(card);
    });

    // Dynamic year for copyright in footer
    // document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} Festive Planners. All rights reserved.`;

    // Initialize all modals
    var modals = [].slice.call(document.querySelectorAll('.modal'))
    var modalInstances = modals.map(function (modal) {
      return new bootstrap.Modal(modal)
    })

    // Add click event listeners to all "View Packages" buttons
    document.querySelectorAll('[data-bs-toggle="modal"]').forEach(function(button) {
      button.addEventListener('click', function(event) {
        event.preventDefault()
        var targetModal = document.querySelector(this.getAttribute('data-bs-target'))
        var modal = bootstrap.Modal.getInstance(targetModal)
        modal.show()
      })
    })

    // Add hover effect to featured ad image
    const featuredImg = document.querySelector('#featured-ad img');
    if (featuredImg) {
        featuredImg.addEventListener('mouseover', () => {
            featuredImg.style.transform = 'scale(1.05)';
        });
        featuredImg.addEventListener('mouseout', () => {
            featuredImg.style.transform = 'scale(1)';
        });
    }

    // Add animation to category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Existing code...

    // Equipment section interactions
    const equipmentItems = document.querySelectorAll('.equipment-item');
    
    equipmentItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('.equipment-overlay').style.transform = 'translateY(0)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.querySelector('.equipment-overlay').style.transform = 'translateY(100%)';
        });
    });

    // Touch device handling
    if ('ontouchstart' in window) {
        equipmentItems.forEach(item => {
            item.addEventListener('touchstart', (e) => {
                e.preventDefault();
                const overlay = item.querySelector('.equipment-overlay');
                const currentTransform = overlay.style.transform;
                
                // Reset all overlays
                equipmentItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.querySelector('.equipment-overlay').style.transform = 'translateY(100%)';
                    }
                });
                
                // Toggle current overlay
                overlay.style.transform = currentTransform === 'translateY(0px)' ? 
                    'translateY(100%)' : 'translateY(0)';
            });
        });
    }
});



