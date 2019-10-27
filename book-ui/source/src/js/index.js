import Book from './classes/Book'
import UI from './classes/UI'
import Store from './classes/Store'

const ui = new UI

window.onload = ()=>{
  Store.displayBooks()

  //Listener to add
  document.getElementById('book-form').addEventListener('submit', (e)=>{

    e.preventDefault()
  
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value
  
  //initial classes 
    const book = new Book(title, author, isbn)
  //validation
    if( title === '' || author === '' || isbn === '') {
      ui.showAlert('Please fill all fields', 'error')
    } else {
      ui.addBookToList(book)
      Store.addBook(book)
      ui.showAlert('Book added!', 'success')
      ui.clearFuleds()
    }
  })

  //Listener to delete
  document.querySelector('#book-list').addEventListener('click', (e)=>{
    e.preventDefault()

    if( e.target.className === 'delete' ) {
      const titleBook = ui.removeBook(e.target)
      Store.removeBook(titleBook)
      ui.showAlert(`Book ${titleBook} is delete`, 'success')
    }

  })
















}



