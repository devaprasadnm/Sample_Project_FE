import './App.css';
import {useState,useEffect} from 'react';

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
     hai
      {articles.map((article)=>{
        return(
          <div>
          <h2 key={article}>{article.title}</h2>
          <p key={article}>{article.desc}</p>
          </div>
        
        )
      })}
     
    </div>
  );
}

export default App;
