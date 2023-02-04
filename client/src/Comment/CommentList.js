import React, {useState, useEffect} from "react";
import axios from "axios";
import "./comment.css"

const CommentList =({postid}) =>{
const [comments, setComments] = useState({})

const fetchComments= async()=>{
    const res = await axios.get(`http://localhost:4001/posts/${postid}/comments`);
    setComments(res.data)
}
useEffect(()=>{
fetchComments();
},[])


const renderedComments = Object.values(comments)

return(
        <ul className="card card--comment">
          {renderedComments.map((comment)=>(
            <li key={comment?.id} className="card__list">
               {comment?.content}
            </li>
          ))}
         </ul>
    )
}

export default CommentList;