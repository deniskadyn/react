// App.js
import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import PostList from './PostList';
import './index.css';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Загружаем пользователей и посты параллельно
    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users'),
      fetch('https://jsonplaceholder.typicode.com/posts')
    ])
      .then(async ([usersRes, postsRes]) => {
        if (!usersRes.ok || !postsRes.ok) {
          throw new Error('Ошибка загрузки данных');
        }
        const usersData = await usersRes.json();
        const postsData = await postsRes.json();
        setUsers(usersData);
        setPosts(postsData);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Получаем посты выбранного пользователя с помощью filter
  const getUserPosts = (userId) => {
    return posts.filter(post => post.userId === userId);
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  if (loading) {
    return <div className="loading">Загрузка данных...</div>;
  }

  if (error) {
    return <div className="error">Ошибка: {error}</div>;
  }

  return (
    <div className="app">
      <h1>Блог постов</h1>
      <div className="container">
        <div className="sidebar">
          <UserList
            users={users}
            selectedUser={selectedUser}
            onSelectUser={handleSelectUser}
          />
        </div>
        <div className="content">
          <PostList
            posts={selectedUser ? getUserPosts(selectedUser.id) : []}
            selectedUser={selectedUser}
          />
        </div>
      </div>
    </div>
  );
}

export default App;