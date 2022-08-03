const loaderElem = document.querySelector('.loader')

window.addEventListener('load', function () {
    //first way
    // loaderElem.classList.add('hidden')

    // second way
    loaderElem.className += ' hidden' // class="loader hidden"

})