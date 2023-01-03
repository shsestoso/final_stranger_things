import React, {useState} from 'react';
import {createPost } from '../api/index';
import Edit from '../api/Edit'



const Posts = (props) => {
    const posts = props.posts;
    const token = props.token;
    const user = props.user;
    const fetchPosts= props.fetchPosts;
    const [title, setTitle] = useState ('');
    const [description, setDescription] = useState ('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState ('');
    const [willDeliver, setWillDeliver] = useState ('');

    const deletePost= (_id) => {
        console.log(_id)
        fetch(`https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-AM/posts/${_id}`, {
                method: "DELETE",
                headers: {
                     'Content-Type': 'application/json',
                     'Authorization': `Bearer ${token}`
                }
             })
                .then(response => response.json())
                .then(result => {
                 console.log(result);
                fetchPosts();
              })
             .catch(console.error);
         };
    
   return (
    <div>
        <h1> Posts </h1>
     { user._id ? <div>
        <form onSubmit = {createPost}> 
            <input
                placeholder = 'title'
                value = {title}
                onChange = {(ev) => setTitle(ev.target.value)}
            />
            <input
                placeholder = 'description'
                value = {description}
                onChange = {(ev) => setDescription(ev.target.value)}
            />
            <input 
                placeholder = 'price'
                value = {price}
                onChange = {(ev) => setPrice(ev.target.value)}
            />
            <input 
                placeholder = 'location'
                value = {location}
                onChange = {(ev) => setLocation(ev.target.value)}
            />
            <input 
                placeholder = 'Will Deliver'
                value = {willDeliver}
                onChange = {(ev) => setWillDeliver(ev.target.value)}
            />
        </form>
        <button onClick = {()=>createPost({token, title, description, price, location, willDeliver})}> Create Post </button>
    </div> : null
    }
        {posts.map( (post) => {
            return (
                <div key = {post._id} className= {post.isAuthor ? 'singlePost myPost' : 'singlePost'}>
                     <h3> {post.title}</h3>
                    <p> Description: {post.description} </p>
                    <p> Price: {post.price} </p>
                    <p> Location: {post.location} </p>
                    <p> Will Deliver : {post.willDeliver}</p>
                   {post.isAuthor ? <button onClick = {()=> Edit ({token, title, description,price,location,willDeliver})}className= 'btns'> Edit </button> : null }
                   {post.isAuthor ? <button onClick = { () => deletePost(post._id) }className= 'btns'> Delete </button> : null}
        
                </div>
            )
        })}
    </div>
   )
}

export default Posts ;

