class DOM {
  constructor(index) {
    this.slide = document.querySelector(`${index}`)
    this.active = 0
    this.init()
  }

  activeSlide(index) {
    this.active = index
    this.items.forEach(items => items.classList.remove('active'))
    this.cycles.forEach(cycle => cycle.classList.remove('color'))
    this.items[index].classList.add('active')
    this.cycles[index].classList.add('color')
    this.autoSlide()
  }

  next() {
    if (this.active < this.items.length - 1) {
      this.activeSlide(this.active + 1)
    } else {
      this.activeSlide(0)
    }
  }

  autoSlide() {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(this.next, 3000)
  }

  init() {
    this.items = document.querySelectorAll('.slide-items > *')
    this.cycles = document.querySelectorAll('#cycles > *')
    this.next = this.next.bind(this)
    this.activeSlide(0)
  }
}

new DOM('.slides')
