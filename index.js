// const drop = document.querySelector(.drop)
// const dropDown = document.querySelector('.dropdown');
// const dropDownItem = document.querySelector('.dropdown-item');
// dropDown.hover.addEventListener( () => {
//     dropDownItem.classList.add('show');
// })

// $(document).ready(function(){
//     $('.dropdown').hover(function(){
//         $(this).dropDownItem().addClass('show');
//     },
//     function(){
//         $(this).dropDownItem().removeClass('show');
//     }
//     );
// });

function addScrollEffect(){
    var navBar = document.getElementById('nav-bar');
    var scrollValue = window.scrollY;
    if(scrollValue < 250){
        navBar.classList.remove('s1-bg-color');
        navBar.classList.remove('black');
    }
    else{
        navBar.classList.add('s1-bg-color');
        navBar.classList.add('black');
    }
    if(scrollValue < 10){
        navBar.classList.remove('s1-pos');
    }
    else{
        navBar.classList.add('s1-pos');
    }
    // console.log(scrollValue);
}
window.addEventListener('scroll', addScrollEffect);


const years = document.getElementById('years');
var currentTime = new Date()
var currentYear = currentTime.getFullYear();
for(let i = 0; i < currentYear - 1855; i++){
    years.innerHTML = i;
}
// 
// 
// 
const footerYear = document.getElementById('dateYear');
footerYear.innerHTML = currentYear;