import '../styles/about.css'

export function About() {
  const section = document.createElement('section')
  section.setAttribute('id', 'about')
  section.classList.add('about')

  const img = new Image()
  img.src = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'

  const h1 = document.createElement('h1')
  h1.append('About us')

  const p = document.createElement('p')
  p.append('Pellentesque elit eget gravida cum sociis. Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Vulputate mi sit amet mauris commodo quis imperdiet. Enim diam vulputate ut pharetra sit amet. Amet dictum sit amet justo donec enim diam. Accumsan in nisl nisi scelerisque eu ultrices vitae. Vitae turpis massa sed elementum tempus egestas sed sed. Volutpat blandit aliquam etiam erat. Feugiat sed lectus vestibulum mattis ullamcorper velit sed. Aenean pharetra magna ac placerat vestibulum lectus. Interdum varius sit amet mattis vulputate. Tempor id eu nisl nunc mi. Elementum sagittis vitae et leo. Morbi tristique senectus et netus et malesuada fames ac. At urna condimentum mattis pellentesque id. Adipiscing diam donec adipiscing tristique risus. Leo in vitae turpis massa sed elementum tempus. Porttitor leo a diam sollicitudin tempor id. Lorem ipsum dolor sit amet.')

  section.append(img, h1, p)
  return section
}