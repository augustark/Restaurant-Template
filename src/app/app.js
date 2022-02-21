import {Home} from './pages/home'
import {Menu} from './pages/menu'

import navIcon from './assets/icons/icon-navigation.svg'
import disIcon from './assets/icons/icon-dismiss.svg'

export function App() {
  const container = document.createElement('div')
  container.append(navbar(), Menu())

  return container
}

function navbar() {
  const header = document.createElement('header')

  const toggle = document.createElement('div')
  toggle.classList.add('toggle')
  const menuNav = new Image()
  const menuDis = new Image()
  menuNav.src = navIcon
  menuDis.src = disIcon
  menuDis.classList.add('hide')
  toggle.append(menuNav, menuDis)

  const logo = document.createElement('h1')
  logo.append('SERVED')
  logo.classList.add('logo')

  const menu = document.createElement('nav')
  menu.classList.add('menu', 'hide')

  const homeLink = document.createElement('a') 
  const menuLink = document.createElement('a') 
  const aboutLink = document.createElement('a')
  
  homeLink.append('home')
  menuLink.append('menu')
  aboutLink.append('about')

  toggle.addEventListener('click', (e) => toggleNav(e, menu))

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