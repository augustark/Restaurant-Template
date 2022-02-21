import '../styles/home.css'

export function Home() {
  const section = document.createElement('section')
  const headline = document.createElement('h1')
  const subtitle = document.createElement('p')
  const button = document.createElement('button')

  const background = new Image()
  background.src = 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  
  section.classList.add('home')  
  button.classList.add('btn')

  headline.append(`Delicious food serve's you`)
  subtitle.append('Incididunt ut labore et dolore magna aliqua, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.')
  button.append('Book now')

  section.append(headline, subtitle, button, background)
  return section
}

