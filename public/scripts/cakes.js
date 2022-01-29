let main = document.querySelector('main .photos')
let verMais = document.querySelector('.verMais')
let index = 1,
  photos = 12,
  click = 0

function addImage(index, photos) {
  while (index <= photos) {
    const img = document.createElement('img')
    const a = document.createElement('a')

    img.setAttribute('src', `/assets/bolo${index}.jpeg`)
    img.setAttribute('onclick', `SalveImg(${index})`)
    a.setAttribute('href', '/cakes-orders')
    a.setAttribute('alt', 'Fotos de bolos')
    a.appendChild(img)
    main.appendChild(a)

    index += 1
  }
}

addImage(index, photos)

verMais.addEventListener('click', function (event) {
  event.preventDefault()

  let variavel = 0
  if (click === 3) {
    variavel = 3
  }

  addImage(index, (index += 11 - variavel))
  index += 1
  click += 1
  if (click === 4) {
    document.querySelector('.most-photos').remove()
  }
})

function SalveImg(index) {
  localStorage.setItem('img', index)
}
