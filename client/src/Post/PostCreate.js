import React, { useState } from 'react'
import axios from 'axios'
import '../form.css'

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://posts.com/posts/create", {
      title,
    });

    setTitle("");
  };
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form form--group'>
          <label>Title</label>
          <input
            className='form__control'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <button className='btn btn--primary'>Submit</button>
      </form>
    </div>
  )
}

export default PostCreate
