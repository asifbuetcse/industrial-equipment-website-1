// assets/js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true
    });

    // Sample product data
    const products = [
        {
            id: 1,
            name: "Industrial Drill Press",
            description: "Heavy-duty drill press for industrial applications",
            image: "https://source.unsplash.com/800x600/?machinery,drill"
        },
        {
            id: 2,
            name: "Hydraulic Press",
            description: "High-capacity hydraulic press system",
            image: "https://source.unsplash.com/800x600/?machinery,hydraulic"
        },
        {
            id: 3,
            name: "CNC Machine",
            description: "Precision CNC machining center",
            image: "https://source.unsplash.com/800x600/?machinery,cnc"
        }
    ];

    // Load featured products
    const featuredProductsContainer = document.getElementById('featuredProducts');
    if (featuredProductsContainer) {
        products.forEach(product => {
            const productHTML = `
                <div class="col-md-4" data-aos="fade-up">
                    <div class="card product-card h-100">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.description}</p>
                            <div class="mt-auto">
                                <a href="pages/products.html" class="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            featuredProductsContainer.innerHTML += productHTML;
        });
    }

    // Form validation
    const forms = document.querySelectorAll('.needs-validation');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow');
        } else {
            navbar.classList.remove('shadow');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = 'Message Sent!';
                contactForm.reset();
                setTimeout(() => {
                    submitBtn.innerHTML = 'Send Message';
                    submitBtn.disabled = false;
                }, 2000);
            }, 1500);
        });
    }

    // Product filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.filter;
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            document.querySelectorAll('.product-card').forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.closest('.col-md-4').style.display = 'block';
                } else {
                    card.closest('.col-md-4').style.display = 'none';
                }
            });
        });
    });

    // Newsletter subscription
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const successMessage = document.createElement('div');
            successMessage.className = 'alert alert-success mt-3';
            successMessage.textContent = 'Thank you for subscribing!';
            
            this.appendChild(successMessage);
            emailInput.value = '';
            
            setTimeout(() => {
                successMessage.remove();
            }, 3000);
        });
    }
});