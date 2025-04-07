import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("feelings");
  const [description, setDescription] = useState("");
  
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/books/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setAuthor(data.author);
        setCategory(data.category);
        setDescription(data.description);
      })
      .catch(() => alert("Failed to load book data"));
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();

    const updatedBook = {
      title: title,
      author:author,
      category: category,
      description: description,
    };

    fetch(`http://localhost:5000/books/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBook),
    })
      .then((response) => {
        if (response.ok) {
          alert("Book updated!");

          setTitle("");
          setAuthor("");
          setCategory("Other");
          setDescription("");

          navigate("/books");
          
        } else {
          alert("Failed to update book");
        }
      })
      .catch(() => alert("Error while connecting to the server"));
  }

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="feelings">Feelings</option>
          <option value="seasons">Seasons</option>
          <option value="holidays">Holidays</option>
          <option value="other">Other</option>
        </select>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
}

export default EditBook;
