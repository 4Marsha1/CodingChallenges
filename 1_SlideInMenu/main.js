const hamburger = document.querySelector('.hamburger')
const sidebar = document.querySelector('.sidebar')

hamburger.addEventListener('click', (e) => {
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active')
        hamburger.classList.remove('open')
    }
    else {
        sidebar.classList.add('active')
        hamburger.classList.add('open')
    }
})
