import React from "react";
import "./comment.css"

const CommentList =({comments}) =>{

const renderedComments = Object.values(comments)
return(
        <ul className="card--comment">
          {renderedComments.map((comment)=>(
            <li key={comment?.id} className="card__list">
               {comment?.content}
            </li>
          ))}
         </ul>
    )
}

export default CommentList;