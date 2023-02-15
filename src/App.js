import './App.css';
import {useState,useEffect} from 'react'
import ArticleList from './components/ArticleList';

function App() {
  const [articles,setArticles] = useState([])

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
  return (
    <div className="App">
     <ArticleList articles={articles}/>
    </div>
  );
}

export default App;
