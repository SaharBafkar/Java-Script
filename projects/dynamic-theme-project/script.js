const colorBtns = document.querySelectorAll('.btn')

colorBtns.forEach(function (colorBtn) {

    colorBtn.addEventListener('click', function (event) {
        let btnColor = event.target.dataset.color

        document.documentElement.style.setProperty('--theme-color', btnColor)
    })
})