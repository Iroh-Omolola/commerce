import React, {useState} from "react";
import axios from "axios";
import "../form.css"

const CommentCreate =({postid}) =>{

  const [content, setContent]= useState("")

  const onSubmit= async(e)=>{
   e.preventDefault();
   await axios.post(`http://localhost:4001/posts/${postid}/comments`, {
    content
   })
   setContent("")
  }
    return(
        <div>
          <form onSubmit={onSubmit}>
            <div className="form form--group">
             <label>New Comment</label>
             <input className="form__control" value={content} onChange={(e)=>setContent(e.target.value)}/>
            </div>
            <button className="btn btn--primary">Submit</button>
          </form>
        </div>
    )
}

export default CommentCreate;