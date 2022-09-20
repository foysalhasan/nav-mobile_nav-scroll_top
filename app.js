const nav = document.querySelector('.navigation')
const mobileNav = document.querySelector('.mobile-menu')

// STICKY NAVIGATION
window.addEventListener('scroll', function (e) {
  const top = this.scrollY
  if (top > 200) {
    nav.classList.add('active')
    document.querySelector('.mobile-toggler').classList.add('active')
    // REVEAL SCROLL TO TOP BUTTON
    document.querySelector('.top-btn').classList.add('active')
  } else {
    nav.classList.remove('active')
    document.querySelector('.mobile-toggler').classList.remove('active')
    // HIDE SCROLL TO TOP BUTTON
    document.querySelector('.top-btn').classList.remove('active')
  }
})

// MOBILE MENU TOGGLER
const toggleMobileMenu = () => mobileNav.classList.toggle('active')
document.querySelector('.mobile-toggler').addEventListener('click', toggleMobileMenu)
document.querySelector('.nav-close-btn').addEventListener('click', toggleMobileMenu)

// SCROLL TO TOP FUNCTION
const goToTop = () => window.scrollTo(0, 0)
document.querySelector('.top-btn').addEventListener('click', goToTop)
