import React,{useState,useEffect} from 'react'
import ApiService from '../ApiService'

function Form(props) {
    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')

    useEffect(()=>{
      setTitle(props.article.title)
      setDesc(props.article.desc)
    },[props.article])

    const updateArticle = () => {
        ApiService.UpdateArticle(props.article.id,{
            title:title,
            desc:desc
        })
        .then(res => props.updatedInformation(res))
      
    }

    const insertArticle = () => {
      ApiService.InsertArticle({
          title:title,
          desc:desc
      })
      .then(res => props.insertedInformation(res))
    
  }
  return (
    <div className="px-4 sm:px-0" id="form-main">
      {props.article ? (
        
      <div className="flex justify-center p-6 bg-slate-200">
      {/* <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg"> */}
      <h5 className="text-gray-900 text-xl font-medium mb-2">{props.name} Article</h5>
        <div className="p-6 flex flex-col justify-start">
          {/* <h5 className="text-gray-900 text-xl font-medium mb-2">Edit Article</h5>
          <p className="text-gray-700 text-base mb-4">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p> */}


<div className="block p-6 rounded-lg shadow-lg bg-white w-[700px]">
  <form>
    <div className="form-group mb-6">
        <label className="text-gray-800 text-base font-medium mb-2" >Title :</label>
      <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        />
    </div>
    
    <div className="form-group mb-6">
    <label className="text-gray-800 text-base font-medium mb-2" >Content :</label>
      <textarea
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea13"
      rows="3"
      placeholder="Content"
      value={desc}
        onChange={e => setDesc(e.target.value)}
    ></textarea>
    </div>
    <div className="form-group form-check text-center mb-6">
     
      
    </div>
    {props.article.id  ? 
    <button  onClick={updateArticle} className="
    
      w-min
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">{props.name}</button> :
      
      <button  onClick={insertArticle} className="
    
      w-min
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">{props.name}</button>
      
      }
  </form>
</div>


        </div>
      {/* </div> */}
    </div>
      ) : null}
    </div>
  )
}

export default Form
