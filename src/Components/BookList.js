import React from "react";

const BookList = ({ books, onBorrow }) => {
  return (
    <div>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <p>
                <strong>{book.title}</strong> by {book.author} ({book.category})
              </p>
              <button onClick={() => onBorrow(book)}>Borrow</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
