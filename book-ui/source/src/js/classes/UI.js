export default class UI {

  addBookToList(book){
    const list = document.getElementById('book-list')
    const row = document.createElement('tr')
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>
    `
    list.appendChild(row)
  }

  removeBook(target) {
    const tr = target.parentElement.parentElement
    tr.remove()
    return tr.children[0].textContent
  }

  clearFuleds(){
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''
  }

  showAlert(message, className){
    const div = document.createElement('div')
    div.className = `alert ${className}`
    div.appendChild(document.createTextNode(message))

    const container = document.querySelector('.container')
    const form = document.querySelector('#book-form')
    container.insertBefore(div, form)

    setTimeout( (e)=>{
      document.querySelector('.alert').remove()
    },2500 )
  }

}