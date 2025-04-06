import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BooksList() {
  const [books, setBooks] = useState([]);

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


 
 let inventory;
 if (books.length === 0) {
   inventory = <p>No books available</p>;
 } else {
   
  let bookItems = [];
  for (let i =0; i< books.length; i++) {
    let book = books[i];
    bookItems.push(
           <li key={book.id}>
           <h3>{book.title}</h3>
           <p>{book.author}</p>
           <p>{book.category}</p>
           <p>{book.description}</p>
           <Link to={`/edit-book/${book.id}`}>Edit</Link>
           <button onClick={() => handleDelete(book.id)}>Delete</button>
         </li>
         );
  }
  inventory = <ul>{bookItems}</ul>;
}     

 return (
   <div>
     <h2>Book List</h2>
     {inventory}
   </div>
 );
}

export default BooksList;