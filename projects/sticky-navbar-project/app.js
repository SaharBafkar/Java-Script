const mainNav = document.getElementById('mainNav')
const logoImg = document.querySelector('img')

document.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 0) {
        logoImg.style.height = '64px'
        mainNav.classList.add('bg-black')
        mainNav.classList.add('txt-white')
    } else {
        logoImg.style.height = '84px'
        mainNav.classList.remove('bg-black')
        mainNav.classList.remove('txt-white')
    }
})