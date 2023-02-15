export default class ApiService {
  static UpdateArticle(id,body){
    return fetch(`http://127.0.0.1:8000/api/articles/${id}/`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Token b49741bcd44e20f3bea5826446988f9f2c423042'
          },
          body:JSON.stringify(body)
})
.then(response => response.json())
.catch(error => console.log(error))


  }

  static InsertArticle(body){
    return fetch(`http://127.0.0.1:8000/api/articles/`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Token b49741bcd44e20f3bea5826446988f9f2c423042'
          },
          body:JSON.stringify(body)
})
.then(response => response.json())
.catch(error => console.log(error))


  }

  static DeleteArticle(id){
    return fetch(`http://127.0.0.1:8000/api/articles/${id}/`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Token b49741bcd44e20f3bea5826446988f9f2c423042'
          },
          
})



  }


}