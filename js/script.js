
/*********** toggle button for navbar ********************** */
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

/****** navbar color change using Intersection Observer API
The Intersection Observer API lets code register a callback
function that is executed whenever an element they
wish to monitor enters or exits another element (or the viewport),
*/

const header = document.querySelector("header");
const sectionOne = document.querySelector(".main-page");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.map(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("scrollbar");
    } else {
      header.classList.remove("scrollbar");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const str = document.querySelector('input');
str.addEventListener('input', () => {

})
function checkValidEmailAdress(str){

}




