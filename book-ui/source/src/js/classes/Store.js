import UI from './UI'
const ui = new UI()

export default class Store {

  static addBook(book) {
    const books = Store.getBooks()
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
  }

  static getBooks(){
    let books
    if( localStorage.getItem('books') === null ) {
      books = []
    } else {
      books = JSON.parse(localStorage.getItem('books'))
    }
    return books
  }

  static displayBooks() {
    const books = Store.getBooks()
    for (const item of books) {
      ui.addBookToList(item)
    }
  }

  static removeBook(title){
    const books = Store.getBooks()
    books.forEach( (elem, index) => {
      if( elem.title === title ) {
        books.splice(index, 1)
      }
      localStorage.setItem('books', JSON.stringify(books))
      
    })
  }

}