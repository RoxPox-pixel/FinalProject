import React from "react";
import './Modal.css';

function Modal({ book, closeModal }) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{book.title}</h2>
        <img src={book.coverImage || 'https://via.placeholder.com/200x300'} alt={book.title} />
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Category:</strong> {book.category}</p>
        <p><strong>Description:</strong> {book.description}</p>
        <p><strong>Age Group:</strong> {book.ageGroup}</p>
        <p><strong>Recommendation:</strong> {book.recommendation}</p>
        <p><strong>Learnings:</strong> {book.learnings}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
