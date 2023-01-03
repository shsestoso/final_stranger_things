import React from 'react';
import {createPost } from '../api/';
import { Link} from 'react-router-dom';

const Posts = (props) => {
    const posts = props.posts;
    const token = props.token;
   return (
    <div>
        <h1> Posts </h1>
        <button onClick = {createPost}> Create Post </button>
        {posts.map( (post) => {
            return (
                <div key = {post._id} className= {post.isAuthor ? 'singlePost myPost' : 'singlePost'}>
                     <h3> {post.title}</h3>
                    <p> Description: {post.description} </p>
                    <p> Price: {post.price} </p>
                    <p> Location: {post.location} </p>
                   {post.isAuthor ? <button> Edit </button> : null }
                   {post.isAuthor ? <button> Delete </button> : null}
        
                </div>
            )
        })}
    </div>
   )
}

export default Posts ;