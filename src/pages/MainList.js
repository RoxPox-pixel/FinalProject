import { useEffect, useState } from "react";

function MainList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
  
    fetch("http://localhost:5000/books")
      .then((res) => res.json()) 
      .then((data) => setBooks(data)) 
      .catch(() => alert("Error retrieving books!")); 
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books yet.</p> 
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author} <br />
              <em>Category:</em> {book.category} <br />
              <em>Description:</em> {book.description}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MainList;
