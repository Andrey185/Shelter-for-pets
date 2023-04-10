// let position = 0
// const slideToShow = 3
// const slideToScroll = 3
// const container = document.querySelector('.pets-wrapper')
// const track = document.querySelector('.pets-container')
// const btnPrev = document.querySelector('.button-prev')
// const btnNext = document.querySelector('.button-next')
// const items = document.querySelectorAll('.pets__card')
// const itemsCount = items.length
// const itemWidth = (container.clientWidth - 180) / slideToShow
// const moviePosition = slideToScroll * itemWidth + 180 + 90

// items.forEach((item) => {
//     item.style.minWidth = `${itemWidth}px`
// })

// btnNext.addEventListener('click', () => {
//     const itemSelf = itemsCount - (Math.abs(position) + slideToShow * itemWidth) / itemWidth
//     position -= itemSelf >= slideToScroll ? moviePosition : itemSelf * itemWidth
//     console.log(position);
//     setPosition()
//     checkBtns()
// })

// btnPrev.addEventListener('click', () => {
//     const itemSelf = Math.abs(position) / itemWidth
//     position += itemSelf >= slideToScroll ? moviePosition : itemSelf * itemWidth
//     setPosition()
//     checkBtns()
// })

// const setPosition = () => {
//     track.style.transform = `translateX(${position}px)`
// }

// const checkBtns = () => {
//     btnPrev.disabled = position === 0
//     btnNext.disabled = position <= -(itemsCount-slideToShow)*itemWidth
// }

// checkBtns()



let counter = Math.floor(Math.random() * 9)
const btnPrev = document.querySelector('.button-prev')
const btnNext = document.querySelector('.button-next')
const items = document.querySelectorAll('.pets__card')

const app = () => {
    if (counter===items.length) {
        counter=0
    }
    items[counter].style.display = 'flex'
    counter++
    if (counter===items.length) {
        counter=0
    }
    items[counter].style.display = 'flex'
    counter++
    if (counter===items.length) {
        counter=0
    }
    items[counter].style.display = 'flex'
    counter++
}
app()

btnNext.addEventListener('click', () => {
    items.forEach((item) => {
        item.style.display = 'none'
    })
    app()
})

btnPrev.addEventListener('click', () => {
    items.forEach((item) => {
        item.style.display = 'none'
    })
    if (counter===0) {
        counter = items.length-1
    }
    items[counter].style.display = 'flex'
    counter--
    if (counter===0) {
        counter=items.length-1
    }
    items[counter].style.display = 'flex'
    counter--
    if (counter===0) {
        counter=items.length-1
    }
    items[counter].style.display = 'flex'
    counter--
})