
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


// Hide status nav

function hideStatusNav(){
  const statusNav = document.getElementById("status-nav-container")
  const statusOnNav = document.getElementById("status-nav-container-nav")

  if (this.scrollY > 4099) {
    statusNav.classList.remove("status_nav_container")
    statusOnNav.classList.remove("status_nav_container-nav")
  }else{
    statusNav.classList.add("status_nav_container")
    statusOnNav.classList.add("status_nav_container-nav")
  }
}

window.addEventListener("scroll", hideStatusNav)


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

// Skill cloud.
const skillSphere = document.querySelector('.skill__cloud');

const Texts = [
    "HTML", "CSS" , "Javascript" , 
    "Java", "SpringBoot", "Xquery",
    "Bootstrap", "Python", "Node", "Express"
    ];

let radius = 220
if(window.innerWidth < 900){
  radius = 160
} else if (window.innerWidth > 1000 && window.innerWidth < 1200) {
  radius = 180
} else if(window.innerWidth > 1200 && window.innerWidth < 1400){
  radius = 200
}else(
  radius = 220
)

const Options = {

    radius: radius,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: false ,
    itemClass: 'skills-item',
    containerClass: "skillcloud",
    useContainerInlineStyles: true,
    useItemInlineStyles: true,
    useHTML: true
}

var tagCloud = TagCloud(skillSphere, Texts, Options);


// Form - Send Email

const name = document.getElementById('sender-name');
const email = document.getElementById('sender-email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

function sendData(formData){

  const showMsg = document.getElementById('info');
  const loader = document.getElementById('loader');

  loader.classList.remove('uil-message')
  loader.classList.add('uil-spinner-alt')

  showMsg.innerHTML = "Sending email..."
  

  fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({data: formData})
  })
    .then(response => response.json())
    .then(data => {
      console.log("Success:", data);

      showMsg.innerHTML = "Email sent succesfully..."

      name.value = "",
      email.value = "",
      subject.value = "",
      message.value = ""
      
      setTimeout(() => {
        showMsg.innerHTML = ""
        loader.classList.remove('uil-spinner-alt')
        loader.classList.add('uil-message')

      }, 2000)
      
    })
    .catch((error) => {
      console.error("Error:", error);
      showMsg.innerHTML = "Could not send email."

      setTimeout(() => {
        showMsg.innerHTML = ""
      }, 3000)
    })
}

const button = document.getElementById('contact-form');

button.addEventListener('submit', (event) => {

  event.preventDefault();

  // make object

  let formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value
  }

  // console.log(formData);

  sendData(formData);

  
})