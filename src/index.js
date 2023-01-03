import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link} from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register';
import Posts from './components/Posts';


const App = ()=> {
  const [user, setUser] = useState ({});
  const [posts, setPosts] = useState ([]);
  const [token, setToken] = useState(null);

const fetchPosts = () => {
  fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-AM/posts' , {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })
      .then(response => response.json())
      .then(result => {
         console.log(result.data.posts);
         setPosts(result.data.posts)
     })
     .catch(console.error);

  }

  const exchangeTokenForUser = () => {
    const token = window.localStorage.getItem('token');
    setToken(token);
    if (token ) {
      fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-AM/users/me', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(response => response.json())
            .then(result => {
              const user = result.data;
              setUser(user)
      })
        .catch(err => console.log(err));
    }

  }
  useEffect (() => {
    exchangeTokenForUser();
    fetchPosts();
  }, [token])

  const logout = () => {
    window.localStorage.removeItem('token');
    setUser({})
  }
  
  return (
    <div>
      <h1>Stranger Things </h1>
      {
        user._id ? <div> Welcome {user.username } <button onClick = {logout}> Logout</button></div> : null
      }
      {
        (!user._id) ? (
      <div> 
      <Register />
      <Login  exchangeTokenForUser = { exchangeTokenForUser} />
      
    </div> ) : null 
 }
    <Posts posts = {posts} />
  </div>

  );
};


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<HashRouter><App /></HashRouter>);
