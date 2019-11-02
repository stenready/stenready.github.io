/**imports */
import GitHub from './classes/GitHub'
import UI from './classes/UI'
import { get } from 'http'


window.onload = () => {
  
/**start dev */
const github = new GitHub()
const ui = new UI()

const searchInput = document.getElementById('searchInput')
const spiner = document.getElementById('spinner')


searchInput.addEventListener('keyup', (e)=>{
  spinner.removeAttribute('hidden')
  const text = e.target.value
  if( text !== '' ) {
    github.getUser(text)
    .then( (data) => {
      if(data.profile.message === 'Not Found') {
        ui.showAlert('User is not found', 'alert alert-danger')
        ui.clearProfile()
        spinner.setAttribute('hidden', '')
      } else {
        //show profile
        spinner.setAttribute('hidden', '')
        ui.showUser(data.profile)
        ui.showRepos(data.repos)
        ui.removeAlert()
      }
    } )
  } else {
    //clear profile
    spinner.setAttribute('hidden', '')
    ui.clearProfile()
    ui.removeAlert()
  }

})






























}