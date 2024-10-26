const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});


document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});