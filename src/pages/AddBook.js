import { useState } from "react";






function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("Other");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");      
  const [ageGroup, setAgeGroup] = useState("");            
  const [recommendation, setRecommendation] = useState(""); 
  const [learnings, setLearnings] = useState("");   



  function handleSubmit(e) {
    e.preventDefault();

    const newBook = {
      title: title,
      author: author,
      category: category,
      description: description,
      coverImage: coverImage,
      ageGroup: ageGroup,
      recommendation: recommendation,
      learnings: learnings,
    };

    fetch("http://localhost:5000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook),
    })
      .then((response) => {
        if (response.ok) {
          alert("Book added!");
          setTitle("");
          setAuthor("");
          setCategory("");
          setDescription("");
          setCoverImage("");
          setAgeGroup("");
          setRecommendation("");
          setLearnings("");

        } else {
          alert("Failed to add book!");
        }
      })
      .catch(() => alert("Error! Try again!"));
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
        <select value={category}  onChange={(e) => setCategory(e.target.value)}>
        
          <option value="">Select Category</option>
          <option value="Feelings">Feelings</option>
          <option value="Seasons">Seasons</option>
          <option value="Holidays">Holidays</option>
          <option value="Other">Other</option>
          <option value="Nature">Nature</option>
        </select>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cover Image URL"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Age Group"
          value={ageGroup}
          onChange={(e) => setAgeGroup(e.target.value)}
        />
        <input
          type="text"
          placeholder="Recommendation"
          value={recommendation}
          onChange={(e) => setRecommendation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Learnings"
          value={learnings}
          onChange={(e) => setLearnings(e.target.value)}
        />
      
        <button type="submit" className='btn'>Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
