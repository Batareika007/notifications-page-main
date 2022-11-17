const unreed = document.querySelectorAll(".unreed")
const notification = document.querySelector(".header__num")
const readAll = document.querySelector('.header__btn')
notification.innerHTML = unreed.length

unreed.forEach((card) => card.addEventListener("click", function () {
    this.classList.remove('unreed')
    // notification.innerHTML = document.querySelectorAll(".unreed").length
    checkNotification()
}))

readAll.addEventListener('click', ()=>{
    unreed.forEach( (card) => card.classList.remove('unreed'))
    // notification.innerHTML = document.querySelectorAll(".unreed").length
    checkNotification()
})

function checkNotification(){
    notification.innerHTML = document.querySelectorAll(".unreed").length
    if( document.querySelectorAll(".unreed").length === 0 ){
        notification.innerHTML = ''
    } 
}