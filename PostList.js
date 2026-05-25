// PostList.js
import React from 'react';

function PostList({ posts, selectedUser }) {
  if (!selectedUser) {
    return (
      <div className="post-list empty">
        <div className="placeholder">
          <p>👈 Выберите пользователя из списка</p>
          <p>чтобы увидеть его посты</p>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="post-list empty">
        <div className="placeholder">
          <p>У пользователя {selectedUser.name} нет постов</p>
        </div>
      </div>
    );
  }

  return (
    <div className="post-list">
      <h2>Посты пользователя: {selectedUser.name}</h2>
      <div className="posts-grid">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <span className="post-author">{selectedUser.name}</span>
            </div>
            <div className="post-body">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-content">{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;