import './App.css';
import {useState,useEffect} from 'react'
import ArticleList from './components/ArticleList';
import Form from './components/Form';


function App() {
  const [articles,setArticles] = useState([])
  const [editArticle,setEditArticle] = useState(null)
  const [name,setName] = useState('')

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/articles/',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Token b49741bcd44e20f3bea5826446988f9f2c423042'
      }
        
    })
    .then(response => response.json())
    .then(response => setArticles(response))
    .catch(error => console.log(error))

  },[])

const editBtn = article => {
    setName("Update")
    setEditArticle(article)
}

const deleteBtn = article => {
  const newArticle = articles.filter(myarticle => {
    if( myarticle.id === article.id){
      return false;
    }
    return true;
   })
   setArticles(newArticle)
}


const articleForm = () => {
  setName("Create")
  setEditArticle({title:'',desc:''})
}

const insertedInformation = article => {
  const new_article = [...articles,article]
  setArticles(new_article)
}

const updatedInformation = article => {
  const new_article  = article.map(myarticle => {
    if(myarticle.id === article.id){
      return article
    }else{
      return myarticle
    }
    
  })
  setArticles(new_article)
}
  return (
    <div className="App">
     <ArticleList articles={articles} editBtn={editBtn} deleteBtn={deleteBtn} articleForm={articleForm} />
     {editArticle ? <Form article={editArticle} updatedInformation={updatedInformation} insertedInformation={insertedInformation} name = {name}/> : null}
     
    </div>
  );
}

export default App;
