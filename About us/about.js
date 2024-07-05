function navigate() {
    const navigate = document.querySelector('.navigate')
    const navigate_icon = document.querySelector('#navigate-icon')
    const navBar = document.querySelector('nav')
    const container = document.querySelector('.container')
    const footer = document.querySelector('footer')
    let toggle = true;
    navigate_icon.addEventListener('click', () => {
        if (toggle) {
            navigate.style.transform = 'translateX(0)'
            navBar.style.opacity = '0.2'
            if (container) {
                container.style.opacity = '0.2'
            }
            if(footer){
                footer.style.opacity = '0.2'
            }
            toggle = false
        } else {
            navigate.style.transform = 'translateX(-100%)'
            navBar.style.opacity = '1'
            if (container) {
                container.style.opacity = '1'
            }
            if(footer){
                footer.style.opacity = '1'
            }
            toggle = true
        }
    })
}

navigate()