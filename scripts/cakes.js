let main = document.querySelector('main .photos')
let index = 1,
  photos = 12,
  click = 0

function display(index, photos) {
  while (index <= photos) {
    let html = `<a href="./cakes-orders.html"><img src="./assets/bolo${index}.jpeg" alt="Fotos de bolos" onclick="SalveImg(${index})" /></a>`

    main.insertAdjacentHTML('beforeend', html)

    if (index <= 36) {
      index += 1
    } else {
      index = photos
    }
  }
}

display(index, photos)

index = 13

function photo() {
  display(index, (index += 11))
  index += 1
  click += 1
  if (click === 2) {
    document.querySelector('.most-photos').remove()
  }
}

function SalveImg(index) {
  localStorage.setItem('img', index)
}
