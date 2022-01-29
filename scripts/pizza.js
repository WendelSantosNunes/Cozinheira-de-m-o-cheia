function troca(index) {
  const imgs = document.querySelectorAll('.pizza-fotos > *')
  const img = document.querySelector('.pizza-principal > *')
  imgs.forEach(items => items.classList.remove('active'))

  if (index === 0) {
    imgs[index].classList.add('active')
    img.setAttribute('src', './assets/pg-pizza1.jpeg')
  } else if (index === 1) {
    imgs[index].classList.add('active')
    img.setAttribute('src', './assets/pg-pizza2.jpeg')
  } else {
    imgs[index].classList.add('active')
    img.setAttribute('src', './assets/pg-pizza3.jpeg')
  }
}
