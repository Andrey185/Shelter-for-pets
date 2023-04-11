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