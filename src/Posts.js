import React from 'react';

const Posts = (props) => {
    const posts = props.posts
   return (
    <div>
        <h1> Posts </h1>
        {posts.map( (post) => {
            return (
                <div key = {post._id}>
                    <h3> {post.title} </h3> 
                    <p> Description: {post.description} </p>
                    <p> Price: {post.price} </p>
                    <p> Location: {post.location} </p>
                    <p> Will Deliver: {post.willDeliver} </p>
                   
                </div>
            )
        })}
    </div>
   )
}

export default Posts ;