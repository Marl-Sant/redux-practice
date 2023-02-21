import initialBooks from '../data/initial-books.json';
const POPULATE = 'books/POPULATE'
const REMOVE_BOOK = 'books/REMOVE_BOOK'
const ADD_BOOK = 'books/ADD_BOOK'
const RESET_BOOKS ='books/RESET_BOOKS'
const AVAILABILITY = 'books/checkedOut/AVAILABILITY'

let startingBooks = {}

initialBooks.forEach(book => startingBooks[book.id] = book)

export const populateBooks = () => {
    return{
        type:POPULATE,
        startingBooks
    }
}

export const removeBook = (bookId) => {
    return {
        type:REMOVE_BOOK,
        bookId
    }
}

export const addBook = (book) => {
    return{
        type:ADD_BOOK,
        book
    }
}

export const resetBooks = () =>{
    return{
        type:RESET_BOOKS,
        startingBooks
    }
}

export const bookAvailability = (book) => {
    return{
        type:AVAILABILITY,
        book
    }
}

function bookReducer (state = startingBooks, action){
    switch (action.type){
        case REMOVE_BOOK:
            let removeBookState = {...state}
            delete removeBookState[action.bookId]
            return removeBookState
        case ADD_BOOK:
            let addBookState = {...state}
            addBookState[action.book.id] = action.book
            return addBookState
        case RESET_BOOKS:
            let resetBooksState = startingBooks
            return resetBooksState
        case AVAILABILITY:
            let availableBookState = {...state}
            availableBookState[action.book.id][action.book.checkedOut] = !availableBookState[action.book.id][action.book.checkedOut]
            return availableBookState
        default:
            return state
    }
}

export default bookReducer
