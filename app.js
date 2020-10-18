/********SET DATE*********/
// set a date dynamic to footer 
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

/********CLOSE OPEN TOGGLE*********/
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

/********SCROLL FIXED NAV*********/
const navFix = document.getElementById('nav');
const topBtn = document.querySelector('.top-btn');
window.addEventListener('scroll', function() {
  const scroll = window.pageYOffset
  const hieghtNav = navFix.getBoundingClientRect().height
    // for nav fixed
    if(scroll >= 120){
        console.log('is more than so');
        navFix.classList.add('nav-fixed');
    } else {
        navFix.classList.remove('nav-fixed');
    }
    // for top btn
    if(scroll > 300){
        topBtn.classList.add('show-top');

    } else {
        
        topBtn.classList.remove('show-top');
    }
});