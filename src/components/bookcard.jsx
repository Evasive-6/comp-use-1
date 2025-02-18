import React from 'react';
import './bookcard.css'; 

const BookCard = ({ image, name, genre, author }) => {
  return (
    <div className="book-card">
      <img src={image} alt={name} className="book-image" />
      <h2>{name}</h2>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Genre:</strong> {genre}</p>
    </div>
  );
};

export default BookCard;
