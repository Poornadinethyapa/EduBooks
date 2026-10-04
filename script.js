document.addEventListener('DOMContentLoaded', () => {
    // 1. Search Box Filtering Operation
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        const bookCards = document.querySelectorAll('.book-card');
        bookCards.forEach(card => {
            const title = card.querySelector('.book-title').textContent.toLowerCase();
            const category = card.querySelector('.category').textContent.toLowerCase();
            if (title.includes(query) || category.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    searchInput.addEventListener('keyup', performSearch);
    searchBtn.addEventListener('click', performSearch);

    // 2. Newsletter Subscription Validation
    const subscribeForm = document.getElementById('subscribeForm');
    const emailInput = document.getElementById('emailInput');
    const formMessage = document.getElementById('formMessage');
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValue === '') {
            formMessage.textContent = 'Please enter an email address.';
            formMessage.style.color = '#ff6b6b';
        } else if (!emailRegex.test(emailValue)) {
            formMessage.textContent = 'Please enter a valid email format.';
            formMessage.style.color = '#ff6b6b';
        } else {
            formMessage.textContent = 'Success! Thank you for subscribing.';
            formMessage.style.color = '#51cf66';
            emailInput.value = '';
        }
        setTimeout(() => { formMessage.textContent = ''; }, 4000);
    });

    // 3. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.querySelector('.nav-links');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // View Details Alert
    const detailButtons = document.querySelectorAll('.btn-details');
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const bookTitle = this.parentElement.querySelector('.book-title').textContent;
            alert(`More details for "${bookTitle}" will be available soon!`);
        });
    });
});
