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