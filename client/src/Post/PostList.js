import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CommentCreate from '../Comment/CommentCreate'
import CommentList from '../Comment/CommentList'
import './post.css'

const PostList = () => {
  const [posts, setPosts] = useState({})

  const fetchPosts = async () => {
    const res = await axios.get("http://posts.com/posts");

    setPosts(res.data);
  };
  
  useEffect(() => {
    fetchPosts()
  }, [])

  const renderedPosts = Object.values(posts)

  return (
    <div className='card'>
      {renderedPosts.map(post => (
        <div className='card__body' key={post?.id}>
          <div className='card__body--details'>
            <h3>{post?.title}</h3>
          </div>
          <div className='card__body--comments'>
            <CommentList comments={post?.comments} />
            <CommentCreate postid={post?.id} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostList
