export default class UI {
  constructor() {
    this.profile =  document.getElementById('profile')
  }
  showUser(user){
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img src="${user.avatar_url}" alt="" class="img-fluid img-avatar mb-2">
            <a href="${user.html_url}" target="__blank" class="btn btn-primary btn-block mb-4">View profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Member since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos:</h3>
      <div id="repos"></div>
    `
  }

  clearProfile(){
    this.profile.innerHTML = ''
  }

  showAlert(message, className){
    this.removeAlert()
    const div = document.createElement('div')
    div.className = className

    /**animation */
    div.style.opacity = 0
    const interval = setInterval(()=>{
      div.style.opacity  = parseFloat(div.style.opacity) + 0.1
      if(div.style.opacity == 1){
        clearInterval(interval)
      }
    },50)
     /**animation */
     
    div.appendChild(document.createTextNode(message))

    const searchContainer = document.querySelector('.searchContainer')
    const search = document.querySelector('.search')
    searchContainer.insertBefore(div, search)
  }

  removeAlert(){
    const alert = document.querySelector('.alert')
    if(alert) alert.remove()
  }
  showRepos(repos){
    const output = repos.map( (element)=>{
      return `
        <div class="card card-body mb-1">
          <div class="row">
            <div class="col-md-6 wrap-repos-link">
              <a href="${element.html_url}" target="__blank" class="text-danger">${element.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${element.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${element.watchers_count}</span>
              <span class="badge badge-success">Forks: ${element.forks_count}</span>
            </div>
          </div>
        </div>
      `
    } )
    document.querySelector('#repos').innerHTML = output
  }
}