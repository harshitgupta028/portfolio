// ACCESS_KEY
const accessKey = process.env.MY_SECRET;

const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close") 


if(navToggle){
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu")
  })
} 

if(navClose){
  navClose.addEventListener("click", () =>{
    navMenu.classList.remove("show-menu")
  })
}

const navLink = document.querySelectorAll(".nav__link")

function linkAction() {
  navMenu.classList.remove("show-menu")
}

navLink.forEach(n => n.addEventListener('click', linkAction))


const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll(".skills__header")

function toggleSkills(){
  let itemClass = this.parentNode.className

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close'
  }

  if(itemClass === "skills__content skills__close"){
    this.parentNode.className = "skills__content skills__open"
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills)
})


const tabs = document.querySelectorAll("[data-target]"),
      tabsContents = document.querySelectorAll("[data-content]")

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    const target = document.querySelector(tab.dataset.target) // tab.dataset.target will add #education or #work

    tabsContents.forEach(tabContent => {
      tabContent.classList.remove("qualification__active")
    })

    // This will add given class in active or current data-content
    target.classList.add("qualification__active")

    tabs.forEach(tab => {
      tab.classList.remove("qualification__active")
    })

    // This will add given class in current or active tab
    tab.classList.add("qualification__active")
    
  })
})

// Active section in nav nbar while scroll.

const sections = document.querySelectorAll("section[id]");

window.onscroll = () => {
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 50;
    const offsetHeight = section.offsetHeight;
    const id = section.getAttribute("id");

    if(top > offset && top <= offset + offsetHeight){
      document.querySelector(".nav__menu a[href*="+ id +"]").classList.add("active-link")
    }else(
      document.querySelector(".nav__menu a[href*="+ id +"]").classList.remove("active-link")
    )
  })
}

// Apply box-shadow in header 

function scrollHeader(){
  const header = document.querySelector("header")

    if(this.scrollY > 20){
      header.classList.add("scroll-header")
    }else(
      header.classList.remove("scroll-header")
    )
  }

window.addEventListener("scroll", scrollHeader)


// Show scroll up button

function scrollUp(){
  const scrollButton = document.getElementById("scroll-up")

  if (this.scrollY > 500) {
    scrollButton.classList.add("scrollup__show")
  } else {
    scrollButton.classList.remove("scrollup__show")
  }
}

window.addEventListener("scroll", scrollUp)


// Dark theme

const themeButton = document.getElementById("theme-button")
const darkTheme = 'dark-theme'
const darkThemeIcon = 'uil-sun'
const lightThemeIcon = 'uil-moon'

const isActiveTheme = localStorage.getItem('active-theme')

if(isActiveTheme === 'Dark'){
  document.body.classList.add(darkTheme)
  themeButton.classList.add(darkThemeIcon)
}else{
  document.body.classList.remove(darkTheme)
  themeButton.classList.remove(darkThemeIcon)
  themeButton.classList.add(lightThemeIcon)
}

function checkActivetheme(){

  if(document.body.className.match('dark-theme')){
    return "Dark"
  }else{
    return "Light"
  }
}

themeButton.addEventListener('click', () => {


  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(darkThemeIcon)

    localStorage.setItem('active-theme', checkActivetheme())
})


// Form - Send Email

document.getElementById("access-key").setAttribute('value', accessKey);

function ValidateEmail() {

  var validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  const email = document.getElementById("email").value

  if (email.match(validRegex)) {
    return true;
  } else { 
    return false;
  }
}

const form = document.getElementById('form');
const result = document.getElementById('form-validator');
const emailValidator = document.getElementById('email-validator');


form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  

  if(ValidateEmail()){

    result.innerHTML = "Please wait..."
    
    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.classList.add("form__validator-success")
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.classList.add("form__validator-warning")
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.classList.add("form__validator-failed")
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.classList.add("validator__msg-hide")
            }, 3000);
        });

      }else{
        emailValidator.innerHTML = "Please enter valid email!"
        emailValidator.classList.add("validator__msg-show")
        setTimeout(() => {
          emailValidator.classList.remove("validator__msg-show")
        }, 2000)
      }
});