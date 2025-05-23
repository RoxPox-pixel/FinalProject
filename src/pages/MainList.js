import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal"; 


function BooksList() {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false); 
  const [selectedBook, setSelectedBook] = useState(null); 

    useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((response) => response.json()) 
      .then((data) => setBooks(data)) 
      .catch(() => alert("Error loading books")); 
  }, []);


  //Deleting it//

function handleDelete(id) {
      const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    
  
    if (confirmDelete) {
      fetch("http://localhost:5000/books/" + id, {
        method: "DELETE", 
      })
        .then((response) => {
          if (response.ok) {
            setBooks(books.filter((book) => book.id !== id));
            alert("Book deleted!");
          } else {
            alert("Failed to delete book");
          }
        })
        .catch(() => alert("Error while deleting the book"));
    }
  }


const user = localStorage.getItem("user");
let inventory;
  if (books.length === 0) {
    inventory = <p>No books available</p>;
  } else {
    let bookItems = [];
    for (let i = 0; i < books.length; i++) {
      let book = books[i];
      bookItems.push(
        <li key={book.id} 
            onClick={() => { 
              setSelectedBook(book); 
              setShowModal(true); 
            }
              } 

            className="book-card"
        >

           <img src={book.coverImage || 'https://via.placeholder.com/200x300'} 
           alt={book.title} 
           className="book-cover"
          />
           <h3>{book.title}</h3>
           <p>{book.author}</p>
           <p>{book.category}</p>
           <p>{book.description}</p>


           {user && (
           <div className="button-container">
            <Link to={`/edit-book/${book.id}`}>
            <button className="edit">Edit</button></Link>
            <button className="delete" onClick={(e) => {
               e.stopPropagation(); 
               handleDelete(book.id); }}>
                Delete
                </button> 
           </div>
           )}
         </li>
      );
    }
    inventory = <ul>{bookItems}</ul>;
  }  

  
  return (
    <div className="books-container">
      <h1>Welcome to Our Book Library</h1>
      <p className="description">Browse our collection of books for children, categorized by themes like Feelings, Seasons, Holidays, and more.</p>
      <h2>Book List</h2>
      {inventory}

  {/* Modal will show if showModal is true */}
  {showModal && selectedBook && (
        <Modal book={selectedBook} closeModal={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default BooksList;