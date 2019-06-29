import React from 'react';

export const Friend = ({ name, age, email, onClick }) => (
  <section className="friend">
    <h2>{name} ({age})</h2>
    <p>{email}</p>
    <div className="friend-acts">
      <button name="DELETE" onClick={onClick}>
        DELETE
      </button>
      <button name="UPDATE" onClick={onClick}>
        UPDATE
      </button>
    </div>
  </section>
);
