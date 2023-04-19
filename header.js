const header = document.querySelector('header .navbar')
const menuHeaders = [...document.querySelectorAll('.navbar__wrap .menu li a ')]

document.addEventListener('scroll', ()=>{    
    if (window.pageYOffset > 100) {
        header.style.background='white'
        menuHeaders.map(item=>{
            item.style.color='#343434'
        })
    } else {
        header.style.background='rgb(127 127 127)'
        menuHeaders.map(item=>{
            item.style.color='white'
        })
    }
})