import React, { useState } from 'react'
import axios from 'axios'
import '../form.css'

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content,
    });

    setContent("");
  };
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form form--group'>
          <label>New Comment</label>
          <input
            className='form__control'
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <button className='btn btn--primary'>Submit</button>
      </form>
    </div>
  )
}

export default CommentCreate
