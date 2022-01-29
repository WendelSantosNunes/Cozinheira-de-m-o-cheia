const imgNumber = Number(localStorage.getItem('img'))

let main = document.querySelector('main div')

let html = `<img src="./assets/bolo${imgNumber}.jpeg" alt="Fotos de bolos" />`

main.insertAdjacentHTML('beforeend', html)
