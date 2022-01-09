function troca(index) {
  const imgs = document.querySelectorAll('.bolos-fotos > *')
  const img = document.querySelector('.bolo-principal > *')
  imgs.forEach(items => items.classList.remove('active'))

  if (index === 0) {
    imgs[index].classList.add('active')
    img.setAttribute('src', './assets/pg-salgados1.jpeg')
  } else if (index === 1) {
    imgs[index].classList.add('active')
    img.setAttribute('src', './assets/pg-salgados3.jpeg')
  } else {
    imgs[index].classList.add('active')
    img.setAttribute('src', './assets/pg-salgados4.jpeg')
  }
}
