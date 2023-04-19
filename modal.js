const windowModal = document.querySelector('.modal')
const windowModalButton = document.querySelector('.modal-btn')

windowModalButton.addEventListener('click', ()=> {
    hide()
})
const show = () => {
    windowModal.classList.add('active')
}
const hide = () => {
    windowModal.classList.remove('active')
}

setTimeout(()=>{
    show()
}, 5000)