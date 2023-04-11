const hamb = document.querySelector('.hamb')
const navigationList = document.querySelector('.navigation__list')
const navigationLinkHome = document.querySelectorAll('.link-home')
hamb.addEventListener("click", () => {
   hamb.classList.toggle('active')
    navigationList.classList.toggle('active')
}); 
navigationLinkHome.forEach((item) => {
   item.addEventListener("click", () => {
      hamb.classList.remove('active')
       navigationList.classList.remove('active')
   });
})
document.addEventListener("click", (e) => {
   const click = e.composedPath().includes(navigationList&&hamb)
   if (!click) {
      navigationList.classList.remove('active')
      hamb.classList.remove('active')
   }
})
document.addEventListener('scroll', () => {
   hamb.classList.remove('active')
    navigationList.classList.remove('active')
})


const katrine = document.querySelector('.katrine')
const jennifer = document.querySelector('.jennifer')
const woody = document.querySelector('.woody')
const sophia = document.querySelector('.sophia')
const timmy = document.querySelector('.timmy')
const charly = document.querySelector('.charly')
const scarlett = document.querySelector('.scarlett')
const freddie = document.querySelector('.freddie')
const buttonLeft = document.querySelectorAll('.button-left')
const buttonRight = document.querySelectorAll('.button-right')
let array = [katrine,jennifer,woody,sophia,timmy,charly,scarlett,freddie,jennifer,sophia,charly,freddie,scarlett,timmy,woody,katrine]

let items = document.querySelectorAll('.pets__card')

// const shuffledArr = array.sort(function(){
//    return Math.random() - 0.5;
// });
//  array.push(shuffledArr, shuffledArr)
// const arr = array.flat()

// let currentPage = 1
// let rows = 8
// const start = currentPage * rows
// const end = start + rows
// const pagination = array.slice(start, end)
// pagination.forEach((item) => {
//    item.style.display = 'none'
//    item.style.display = 'flex'
// })

buttonLeft.forEach((item) => {
   item.addEventListener('click',() => {
      const pets = document.querySelector('.pets')
   const divs = pets.children;
   const frag = document.createDocumentFragment();
   while (divs.length) {
      frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
   }
   pets.appendChild(frag);
   })
})

buttonRight.forEach((item) => {
   item.addEventListener('click',() => {
      const pets = document.querySelector('.pets')
   const divs = pets.children;
   const frag = document.createDocumentFragment();
   while (divs.length) {
      frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
   }
   pets.appendChild(frag);
   })
})


