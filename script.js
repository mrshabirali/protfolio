document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const toggleIcon = document.getElementById('toggle-icon');

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');

        // Remove the opposite class
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('light-mode');
            toggleIcon.src = 'sun.png';
        } else {
            body.classList.remove('dark-mode');
            toggleIcon.src = 'moon.png';
        }
    });
});