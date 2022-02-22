import '../styles/menu.css'

const menuList = [
  {
    dish: 'Steak',
    desc: 'Nisl vel pretium lectus quam id. Feugiat vivamus at augue eget arcu. In nulla posuere sollicitudin aliquam. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. ',
    src: 'https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=727&q=80'
  },
  {
    dish: 'Meat Balls',
    desc: 'Odio ut enim blandit volutpat. Vitae tortor condimentum lacinia quis vel. Amet risus nullam eget felis. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Aliquam faucibus purus in massa tempor nec feugiat.',
    src: 'https://images.unsplash.com/photo-1515516969-d4008cc6241a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGlubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    dish: 'Fish Dish 1',
    desc: 'Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Mauris augue neque gravida in fermentum et sollicitudin.',
    src: 'https://images.unsplash.com/photo-1572862905000-c5b6244027a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRpbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    dish: 'Fish Dish 2',
    desc: 'Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Sed id semper risus in. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Viverra orci sagittis eu volutpat odio facilisis.',
    src: 'https://images.unsplash.com/photo-1568600891621-50f697b9a1c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGRpbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    dish: 'Pasta',
    desc: 'Morbi quis commodo odio aenean sed adipiscing. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Dolor sed viverra ipsum nunc aliquet bibendum. Molestie at elementum eu facilisis sed odio morbi. Habitant morbi tristique senectus et netus et.',
    src: 'https://images.unsplash.com/photo-1600803907087-f56d462fd26b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGRpbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    dish: 'A Fancy Dish',
    desc: 'Egestas purus viverra accumsan in. Et ultrices neque ornare aenean. Tellus rutrum tellus pellentesque eu tincidunt. Lobortis mattis aliquam faucibus purus in massa. Felis eget velit aliquet sagittis id consectetur.',
    src: 'https://images.unsplash.com/photo-1567056602606-6172dedda3ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGRpbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
]

export function Menu() {
  const section = document.createElement('section')
  section.classList.add('menu-list')
  
  const h1 = document.createElement('h1')
  h1.append('Menu')

  const catalog = document.createElement('div')
  catalog.classList.add('catalog')

  for (let {dish, desc, src} of menuList) {
    const div = document.createElement('div')
    div.classList.add('menu-item')

    
    const img = new Image()
    img.src = src
    img.classList.add('dish-img')
    
    const h2 = document.createElement('h2')
    h2.append(dish)
    h2.classList.add('dish-name')
    
    const p = document.createElement('p')
    p.append(desc)
    p.classList.add('dish-desc')
    
    div.append(img, h2, p)
    catalog.append(div)
  }

  section.append(h1, catalog)
  return section
}

