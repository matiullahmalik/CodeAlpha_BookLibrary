import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookList from "../Components/BookList";
import AddBook from "../Components/AddBook";
import SearchBar from "../Components/SearchBar";


const HomePage = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "Pride and Prejudice", author: "Jane Austen", category: "Romance" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", category: "Drama" },
    { id: 3, title: "Dune", author: "Frank Herbert", category: "Science Fiction" },
    { id: 4, title: "The Power of Habit", author: "Charles Duhigg", category: "Self-Help" },
    { id: 5, title: "The Alchemist", author: "Paulo Coelho", category: "Philosophy" },
  ]);

  const [borrowHistory, setBorrowHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddBook = (book) => {
    setBooks([...books, { id: Date.now(), ...book }]);
    alert(`The book "${book.title}" by ${book.author} has been successfully added!`);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleBorrow = (book) => {
    const borrowDate = new Date().toLocaleDateString();
    const borrowEntry = {
      title: book.title,
      author: book.author,
      date: borrowDate,
    };

    setBorrowHistory([...borrowHistory, borrowEntry]);
    alert(`${book.title} has been borrowed!`);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="top-nav">
        <Link to="/categories">
          <button className="top-left-btn">View Categories</button>
        </Link>
        <Link to="/borrow-history" state={{ borrowHistory }}>
          <button className="top-right-btn">View Borrow History</button>
        </Link>
      </div>
      <h1>My Personal Library</h1>
      <SearchBar onSearch={handleSearch} />
      <AddBook onAdd={handleAddBook} />
      <BookList books={filteredBooks} onBorrow={handleBorrow} />
    </div>
  );
};


export default HomePage;
