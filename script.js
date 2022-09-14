const navOpen = document.querySelector('.nav-open')
const navClose = document.querySelector('.nav-close')
const nav = document.querySelector('.nav')
const productBox = document.querySelectorAll('.products-box')

navOpen.addEventListener('click', () => {
  nav.classList.add('open')
})

navClose.addEventListener('click', () => {
  nav.classList.remove('open')
})

function removeActive() {
  productBox.forEach((box) => {
    box.classList.remove('active')
  })
}

productBox.forEach((box) => {
  box.addEventListener('click', () => {
    removeActive()
    box.classList.add('active')
  })
})
