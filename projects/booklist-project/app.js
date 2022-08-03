let $ = document
const addBookBtn = $.querySelector('.add-btn')
const titleInputElem = $.querySelector('#title')
const authorInputElem = $.querySelector('#author')
const yearInputElem = $.querySelector('#year')
const booksContainer = $.querySelector('#book-list')

let books = []

addBookBtn.addEventListener('click', function (event) {
    event.preventDefault()

    let titleInputValue = titleInputElem.value
    let authorInputValue = authorInputElem.value
    let yearInputValue = yearInputElem.value



    if (titleInputValue === '' || authorInputValue === '' || yearInputValue === '') {
        alert('لطفا همه اینپوت ها را پر نمایید')
    } else {
        let newBookObject = {
            id: books.length + 1,
            title: titleInputValue,
            author: authorInputValue,
            year: yearInputValue
        }

        books.push(newBookObject)

        setIntoLocalStorage(books)
    }



})

function setIntoLocalStorage(allBooksArray) {
    localStorage.setItem('books', JSON.stringify(allBooksArray))
    makeEmptyInputs()
    booksGenerator(allBooksArray)
}

function makeEmptyInputs() {
    titleInputElem.value = ''
    authorInputElem.value = ''
    yearInputElem.value = ''
}

function booksGenerator(allBooksArray) {

    booksContainer.innerHTML = ''

    allBooksArray.forEach(function (book) {
        newBookTrElem = $.createElement('tr')

        let newBookTitleTh = $.createElement('th')
        newBookTitleTh.innerHTML = book.title

        let newBookAuthorTh = $.createElement('th')
        newBookAuthorTh.innerHTML = book.author

        let newBookYearTh = $.createElement('th')
        newBookYearTh.innerHTML = book.year

        newBookTrElem.append(newBookTitleTh, newBookAuthorTh, newBookYearTh)

        booksContainer.append(newBookTrElem)

    })

}


function getBooksFromLocalStorage() {

    let localStorageBooks = localStorage.getItem('books')

    if (localStorageBooks) {
        books = JSON.parse(localStorageBooks)
        booksGenerator(books)
    }
}

window.addEventListener('load', getBooksFromLocalStorage)