// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
    navLinks.addEventListener('scroll', (e)=>{
        console.log("scroll kiya")
        e.stopPropagation();
    })
});

