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
  //const hieghtNav = navFix.getBoundingClientRect().height
    // for nav fixed
    if(scroll >= 120){
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

//********Scroll Smouth********//
const linkScrolling = document.querySelectorAll('.scroll-link');

linkScrolling.forEach(function(link) {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const id = e.target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        //console.log(id)
        // calculate the heights of nav
        const navHeight = navFix.getBoundingClientRect().height; 
        console.log(navHeight, 'is the nav height')
        // add varaible for fixed nav
        const fixedNav = navFix.classList.contains("nav-fixed")
        console.log(fixedNav);
        let position = element.offsetTop - navHeight;
        console.log(position, 'is the posistion')

        if (!fixedNav) {
            position = position - navHeight;
        }
    

        // add window scrollTo
        window.scrollTo({
            left:0,
            top: position,
        })
        linkContainer.style.height = 0;
        });
    
});