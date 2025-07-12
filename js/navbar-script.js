window.addEventListener('scroll', function() {
    const header = document.querySelector('.head');
    if (window.scrollY > 1) { // Adjust the scroll value as needed
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});