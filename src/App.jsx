import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PostsList from "./features/posts/PostsList";
import AddPostForm from './features/posts/AddPostForm'
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";
import UsersList from './features/users/UserList';
import UserPage from './features/users/UserPage';
import Layout from "./components/Layout";
function App() {
  return (
    <main className='app'>
      <AddPostForm/>
      <PostsList/>
  </main>
   
  );
}

export default App;
