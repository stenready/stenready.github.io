window.onload = (e)=> {

  //start dev//

  //vars//
  const cardAction = document.querySelector('.card-action')
  const entryImput = document.querySelector('#task')
  const collection = document.querySelector('.collection')
  const form = document.querySelector('#task-form')
  const filter = document.querySelector('#task-filter')
  const clearButton = document.querySelector('.clear-tasks')


    startInitTasks()
    hideOrShowClearButton( checkLocalStorage() ) //кнопка удалить все таски

    //add task//
    form.addEventListener('submit', (e)=> {
      e.preventDefault()
      if( entryImput.value !== '' ) {

        const value = entryImput.value
        const elem = `
        <li class="collection-item">
          <div>
            ${value}
            <a href="#!" class="secondary-content delete-item">
              <i class="fa  fa-remove"></i>
            </a>
            <a href="#!" class="secondary-content edit-item">
             <i class="fa fa-pencil"></i>
             </a>
          </div>
        </li> 
        `
        collection.innerHTML += elem
        
        let storage = checkLocalStorage()
        storage.push(value)
        localStorage.setItem('tasks',JSON.stringify(storage))
        entryImput.value = ''
        hideOrShowClearButton(storage)

      }
    })

    //remove task remove-all  edit-task//
    cardAction.addEventListener('click', (e)=>{
      const target = e.target
      //remove task
      if ( target.parentElement.classList.contains('delete-item') ) {
        
        if( confirm('Are you sure?') ) {
          target.parentElement.parentElement.parentElement.remove()  // remove li element
          const storage = checkLocalStorage()
          const res = storage.filter( (elem) => {
            return elem !==  target.parentElement.parentElement.textContent.trim()
          } )
          localStorage.setItem('tasks', JSON.stringify(res))
          hideOrShowClearButton(res)
        }
      }

      //remove all
      if( target.classList.contains('clear-tasks') ) {
        collection.innerHTML = ''
        localStorage.clear()
        hideOrShowClearButton( checkLocalStorage() )
      }

      //edit
      if( target.parentElement.classList.contains('edit-item') ) {
        //добавляем форму для редактирования
        const li = target.parentElement.parentElement.parentElement 
        const oldInner = li.innerHTML
        const text = li.textContent.trim()
        const newInner = `  
            <div class="edit-task"> 
              <input placeholder="Placeholder" type="text" class="edit-input" class="validate" value="${text}">
                <a href="#!" class="secondary-content cansel-edit">
                  <i class="fa  fa-remove"></i>
                </a>
                <a href="#!" class="secondary-content okey-edit">
                  <i class="fa fa-plus"></i
                </a>
            </div>
        `
        li.innerHTML = newInner
        li.querySelector('input').focus()
        //событие отмены редактирования
        li.querySelector('.cansel-edit').onclick = (e) => {
          li.innerHTML = oldInner
        }
        //событие сохранения изменений
        li.querySelector('.okey-edit').onclick = (e) => {
          
          const editInputValue = li.querySelector('.edit-input').value
          li.innerHTML = `
            <div>
              ${editInputValue}
              <a href="#!" class="secondary-content delete-item">
                <i class="fa  fa-remove"></i>
              </a>
              <a href="#!" class="secondary-content edit-item">
                <i class="fa fa-pencil"></i>
              </a>
            </div>
          `   
          // ->> меняем данные в localStorage
          const storage = checkLocalStorage()
          storage.forEach( (elem, index)=>{
            if( elem === text ) {
              storage[index] = editInputValue
            }
          } )
          localStorage.setItem('tasks', JSON.stringify(storage))
          
        }
        
      }
      
    })

    //filter//
    filter.addEventListener('keyup', (e) => {

      const elements = document.querySelectorAll('.collection-item')
      const inpText = e.target.value.toLowerCase()
      for (const item of elements) {
         const text =  item.children[0].textContent.trim().toLowerCase()
         if( text.indexOf(inpText)  != -1) {
          item.style.display = 'block'
         } else{
          item.style.display = 'none'
         }
      }
    })


  //helpers//
  function checkLocalStorage() {
    let tasks
    if( localStorage.getItem('tasks') === null ) {
      tasks = []
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    return tasks
  }

  function hideOrShowClearButton(localStorage) {
    const storage = localStorage.length
    if(storage === 0) {
      clearButton.setAttribute('disabled', 'disabled')
    } else {
      clearButton.removeAttribute('disabled')
    }
  }

  function startInitTasks() {
    const storage = checkLocalStorage()
    for (const item of storage) {
      collection.innerHTML  += `
      <li class="collection-item">
        <div>
          ${item}
          <a href="#!" class="secondary-content delete-item">
            <i class="fa  fa-remove"></i>
          </a>
          <a href="#!" class="secondary-content edit-item">
          <i class="fa fa-pencil"></i>
          </a>
        </div>
      </li> 
      `
    }
  }





















  //start dev//





























}