import { useState } from "react";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("feelings");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Book Added: ${title} by ${author}, Category: ${category}`);
  }

  return (
    <div>
      <h2>Add a New Book</h2>
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
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="feelings">Feelings</option>
          <option value="seasons">Seasons</option>
          <option value="holidays">Holidays</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
