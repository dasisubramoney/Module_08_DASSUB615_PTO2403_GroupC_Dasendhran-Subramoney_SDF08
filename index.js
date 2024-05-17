
// creating and storing function in a variable
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

//Function when you click on the toggle
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

//Function when you click on the links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})