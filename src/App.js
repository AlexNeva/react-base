import React, { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import './styles/App.css';



function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript', body: 'Description' },
    { id: 3, title: 'Javascript', body: 'Description' },
    { id: 4, title: 'Javascript', body: 'Description' },
    { id: 5, title: 'Javascript', body: 'Description' },
    { id: 6, title: 'Javascript', body: 'Description' },
    { id: 7, title: 'Javascript', body: 'Description' },
    { id: 8, title: 'Javascript', body: 'Description' },
    { id: 9, title: 'Javascript', body: 'Description' },
    { id: 10, title: 'Javascript', body: 'Description' },
    { id: 11, title: 'Javascript', body: 'Description' },
    { id: 12, title: 'Javascript', body: 'Description' },
    { id: 13, title: 'Javascript', body: 'Description' },


  ]);

  const [title, setTitle] = useState('');

  const addNewPost = (e) => {
    e.preventDefault();

    console.log(title);
  }



  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder="Название поста" value={title} onChange={e => setTitle(e.target.value)} />
        <MyInput type="text" placeholder="Описание" />
        <MyButton onClick={addNewPost}>Добавить пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов 1" />
    </div>
  );
}

export default App;
