// set a date dynamic to footer 
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// button toggle links
const btnToggle = document.querySelector('.nav-toggle');
// get nav-center 
const navCenter = document.querySelector('.nav-center');
// get links container
const linkContainer = document.querySelector('.links-container');
// get a links 
const links = document.querySelector('.links')

btnToggle.addEventListener('click', function() {
    // variable to get a heigth of current links container
    const navHeigth = linkContainer.getBoundingClientRect().height
    // variable to get a heigth of links
    const linksHeigth = links.getBoundingClientRect().height
    // add toggle a class
    navCenter.classList.toggle('show-nav');

    if (navHeigth === 0){
        // add a new heigth style to links Container
        linkContainer.style.height = `${linksHeigth}px` 
        } 
    else{
        // back it to height 0
        linkContainer.style.height = 0
        }
});