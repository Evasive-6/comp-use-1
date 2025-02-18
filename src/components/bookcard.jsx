import React from 'react';
import './bookcard.css';  

const BookCard = ({ title, author, description }) => {
  return (
    <div className="book-card">
      <h2>{title}</h2>
      <p><strong>Author:</strong> {author}</p>
      <p>{description}</p>
    </div>
  );
};

export default BookCard;
