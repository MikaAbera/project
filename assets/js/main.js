// SHOW MENU
function showMenu(toggleId, navId) {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    if (toggle && nav) {
        toggle.addEventListener('click', function() {
            nav.classList.toggle('show-menu');
        });
    }
}
showMenu('nav-toggle', 'nav-menu');
// REMOVE MOBILE MENU
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show-menu');
    });
});
// SCROLL SECTION ACTIVE LINK
const sections = document.querySelectorAll('section[id]');
function setActiveLink() {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const { offsetTop, offsetHeight, id } = section;
        const sectionTop = offsetTop - 50;
        const navLink = document.querySelector(`.nav-menu a[href*='${id}']`);
        if (scrollY > sectionTop && scrollY <= sectionTop + offsetHeight) {
            navLink?.classList.add('active-link');
        } else {
            navLink?.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', setActiveLink);
// CHANGE BACKGROUND HEADER 
function toggleScrollHeader() {
    const header = document.getElementById('header');
    const shouldAddClass = window.scrollY >= 200;
    if (shouldAddClass) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', toggleScrollHeader);
// DARK LIGHT THEME
const themeButton = document.getElementById('theme-btn');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';
// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
// Obtain the current theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';
// Validate if the user previously chose a topic
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}
// Activate / Deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // Save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
// SCROLL REVEAL ANIMATION 
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});
sr.reveal(`
    .home-data, .home-img, .about-data, .about-img, 
    .services-content, .menu-content, .app-data, 
    .app-img, .contact-data, .contact-button, .footer-content
    .order-data, .order-content
`, { interval: 200 });

