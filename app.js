// set a date for footer 
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// button toggle links
const btnToggle = document.querySelector('.nav-toggle');
// get nav-center 
const navCenter = document.querySelector('.links-container');

btnToggle.addEventListener('click', function() {
    console.log(btnToggle);
    navCenter.classList.toggle('show-nav')
});