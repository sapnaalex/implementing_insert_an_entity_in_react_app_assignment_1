import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook.css"; // Import the CSS file for styling

const AddBook = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    coverImage: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Book added (functionality not implemented).");
    navigate("/"); // Redirect to home after submission
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />

        <label>Author:</label>
        <input type="text" name="author" value={formData.author} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />

        <label>Cover Image URL:</label>
        <input type="url" name="coverImage" value={formData.coverImage} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
