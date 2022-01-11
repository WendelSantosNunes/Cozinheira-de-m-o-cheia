let main = document.querySelector('main .photos')
let index = 1,
  photos = 12,
  click = 0

function display(index, photos) {
  while (index <= photos) {
    let html = `<a href="./cakes-orders.html"><img src="./assets/bolo${index}.jpeg" alt="Fotos de bolos" onclick="SalveImg(${index})" /></a>`

    main.insertAdjacentHTML('beforeend', html)

    index += 1
  }
}

display(index, photos)

index = 13

function photo() {
  let variavel = 0
  if (click === 2) {
    variavel = 6
  }

  display(index, (index += 11 - variavel))
  index += 1
  click += 1
  console.log(index, click)
  if (click === 3) {
    document.querySelector('.most-photos').remove()
  }
}

function SalveImg(index) {
  localStorage.setItem('img', index)
}
