/*===============MENU RESPONSIVO=======================*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const div of toggle) {
  div.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const link = document.querySelectorAll('nav ul li a')

for (const links of link) {
  links.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*===============BOX SHADOWN SCROLL=============*/
function boxShandonwScrool() {
  const header = document.getElementById('header')
  const navheigth = header.offsetHeight
  if (window.scrollY >= navheigth) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/*===============BACK-TO-TOP=============*/
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/*===============TESTEMONNIALS SLIDERS=============/*

/*
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})
/*

/*===========AGRUPAMENTO DE FUNÇÕES==========*/
window.addEventListener('scroll', function () {
  boxShandonwScrool()
  backToTop()
})

/*===============THEME DARK-MODE=============*/
/*
const darkMode = document.querySelector('.dark')
const content = document.getElementsByTagName('body')[0]

darkMode.addEventListener('click', function () {
  content.classList.toggle('noite')
})
*/
