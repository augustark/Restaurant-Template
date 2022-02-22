import {Home} from './pages/home'
import {Menu} from './pages/menu'
import {About} from './pages/about'

import navIcon from './assets/icons/icon-navigation.svg'
import disIcon from './assets/icons/icon-dismiss.svg'

export function App() {
  const container = document.querySelector('#content')
  container.appendChild(header())
  container.appendChild(main())

  loadPage(document.querySelector('.nav-link'))
  render(Home())

  return container
}

function header() {
  const header = document.createElement('header')

  const toggle = document.createElement('div')
  toggle.classList.add('toggle')
  const menuNav = new Image()
  const menuDis = new Image()
  menuNav.src = navIcon
  menuDis.src = disIcon
  menuDis.classList.add('hide')
  toggle.append(menuNav, menuDis)

  toggle.addEventListener('click', (e) => toggleNav(e, menu))
  
  const logo = document.createElement('h1')
  logo.append('SERVED')
  logo.classList.add('logo')
  logo.addEventListener('click', (e) => {
    loadPage(document.querySelector('.nav-link'))
    render(Home())
  })

  const menu = document.createElement('nav')
  menu.classList.add('menu', 'hide')

  const homeLink = document.createElement('a') 
  homeLink.append('home')
  homeLink.classList.add('nav-link')
  homeLink.addEventListener('click', (e) => pageLink(e, menu, toggle))


  const menuLink = document.createElement('a') 
  menuLink.append('menu')
  menuLink.classList.add('nav-link')
  menuLink.addEventListener('click', (e) => pageLink(e, menu, toggle))


  const aboutLink = document.createElement('a')
  aboutLink.append('about')
  aboutLink.classList.add('nav-link')
  aboutLink.addEventListener('click', (e) => pageLink(e, menu, toggle))

  menu.append(homeLink, menuLink, aboutLink)
  header.append(logo, toggle, menu)
  return header
}

function toggleNav(e, menu) {
  const target = e.currentTarget
  if (!target.firstChild.classList.contains('hide')) {
    menu.classList.remove('hide')
    target.firstChild.classList.add('hide')
    target.lastChild.classList.remove('hide')
  } else {
    menu.classList.add('hide')
    target.lastChild.classList.add('hide')
    target.firstChild.classList.remove('hide')
  }
}

function pageLink(e, menu, toggle) {
  const target = e.currentTarget

  if (target.classList.contains('active')) return
  else {
    switch(target.textContent) {
      case 'home':
        loadPage(e.target)
        render(Home())
        break;
      case 'menu':
        loadPage(e.target)
        render(Menu())
        break;
      case 'about':
        loadPage(e.target)
        render(About())
        break;
      default:
        render(Home())
        break;
    }
  }

  menu.classList.add('hide')
  toggle.lastChild.classList.add('hide')
  toggle.firstChild.classList.remove('hide')
}

function main() {
  const main = document.createElement('main')
  main.setAttribute('id', 'main')
  return main
}

function loadPage(nav) {
  const links = document.querySelectorAll('.nav-link')

  links.forEach((a) => {
    if (a !== nav) {
      a.classList.remove('active')
    } 
  })
  nav.classList.add('active')
}

function render(page) {
  const main = document.getElementById('main')
  while (main.children.length > 0) {
    main.removeChild(main.lastChild)
  }
  console.log(page)
  console.dir(main)
  main.appendChild(page)
  return main
}
