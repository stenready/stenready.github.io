/**
 * 
 * @version 1.0
 * @author Sten Ready

 */

 export default class EasyHttp {
  /**get */
  get(url){
    return new Promise( (resolve, reject) => {
      fetch(url)
      .then( res=>res.json() )
      .then(data=>resolve(data))
      .catch(err=>reject(err))
    })
  }
  /**post */
  post(url, data){
    return new Promise( (resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then( res=>res.json() )
      .then(data=>resolve(data))
      .catch(err=>reject(err))
    })
  }
  /**put  update*/
  update(url, data){
    return new Promise( (resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then( res=>res.json() )
      .then(data=>resolve(data))
      .catch(err=>reject(err))
    })
  }  
  /**delete*/
  delete(url){
    return new Promise( (resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
      })
      .then( res=>res.json() )
      .then( ()=>resolve('DELETE'))
      .catch( err=>reject(err))
    })
  }  












 }