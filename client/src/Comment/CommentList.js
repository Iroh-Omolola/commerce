import React from 'react'
import './comment.css'

const CommentList = ({ comments }) => {
  const renderedComments = Object.values(comments)
  return (
    <ul className='card--comment'>
      {renderedComments.map(comment => (  
        comment.status !== 'pending' ?
        <li key={comment?.id} className='card__list'>
          {comment.status === 'rejected'
            ? 'This comment has been rejected'
            : comment.content}
        </li> :
        <li key={comment?.id} className='card__list'>This comment is waiting moderation! </li>
))}
    </ul>
  )
}

export default CommentList
