// UserList.js
import React from 'react';

function UserList({ users, selectedUser, onSelectUser }) {
  return (
    <div className="user-list">
      <h2>Пользователи</h2>
      <ul>
        {users.map(user => (
          <li
            key={user.id}
            className={`user-item ${selectedUser?.id === user.id ? 'active' : ''}`}
            onClick={() => onSelectUser(user)}
          >
            <div className="user-name">{user.name}</div>
            <div className="user-username">@{user.username}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;