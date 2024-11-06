document.addEventListener('DOMContentLoaded', function() {
    // Hamburger Menuu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Toggle Navigation
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking nav items
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });


});

function scrollToConsultation() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Animation Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, observerOptions);


document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach(element => observer.observe(element));
});

// Loan Calculator
function calculateLoan() {
    const amount = parseFloat(document.getElementById('loanAmount').value);
    const rate = parseFloat(document.getElementById('loanRate').value) / 100 / 12;
    const years = parseFloat(document.getElementById('loanYears').value) * 12;

    if (amount && rate && years) {
        const monthly = (amount * rate * Math.pow(1 + rate, years)) / (Math.pow(1 + rate, years) - 1);
        document.getElementById('loanResult').innerHTML = `
            Monthly Payment: $${monthly.toFixed(2)}<br>
            Total Payment: $${(monthly * years).toFixed(2)}
        `;
    }
}

// Interest Calculator
function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseFloat(document.getElementById('time').value);

    if (principal && rate && time) {
        const interest = principal * rate * time;
        const total = principal + interest;
        document.getElementById('interestResult').innerHTML = `
            Interest Amount: $${interest.toFixed(2)}<br>
            Total Amount: $${total.toFixed(2)}
        `;
    }
}

// Form Submission
function submitForm(event) {
    event.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    event.target.reset();
}