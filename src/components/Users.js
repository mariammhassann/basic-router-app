import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import users from '../data/users';

export default function Users() {
  return (
    
    <div className="users">
      <aside className="users-list card">
        <h2>Users</h2>
        <p>Select a user to view their profile:</p>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link className="user-link" to={`/users/${user.id}`}>
                {user.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <section className="user-outlet">
        {/* Nested route element (UserDetail) will render here */}
        <Outlet />
      </section>
    </div>
  );
}
