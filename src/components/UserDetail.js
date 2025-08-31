import React from 'react';
import { useParams } from 'react-router-dom';
import users from '../data/users';

export default function UserDetail() {
  const { userId } = useParams();
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return (
      <div className="card product-detail">
        <h3>User not found!</h3>
        <p>There is no user with ID <strong>{userId}</strong>.</p>
      </div>
    );
  }

  return (
    <div className="card product-detail">
      <h3>{user.name}</h3>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
}
