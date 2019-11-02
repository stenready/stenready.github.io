export default class GitHub {
  constructor(){
    this.client_id = '3fa0e060df8574f1a727'
    this.client_secret = '91fdf9df4c4f30f6a5965af03db87a5bb71d9167'
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }
  async getUser(userName){
    const responseUser = await fetch(`https://api.github.com/users/${userName}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    const responseRepos = await fetch(`https://api.github.com/users/${userName}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
    const profile = await responseUser.json()
    const repos = await responseRepos.json()
    return {profile, repos}
  }

}
