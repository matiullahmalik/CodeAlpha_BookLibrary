import React, { useState } from "react";

const BorrowHistoryPage = () => {
  const [borrowHistory] = useState([
    { title :  "Pride and Prejudice", author: "Jane Austen", date: "2024-11-15" },
    { title :  "Dune", author: "Frank Herbert", date: "2024-11-16" },
    { title :  "The Alchemist", author: "Paulo Coelho", date: "2024-11-18" },
  ]);

  return (
    <div className="container">
      <h1>Borrow History</h1>
      {borrowHistory.length === 0 ? (
        <p>No books have been borrowed yet.</p>
      ) : (
        <table className="borrow-history-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Borrow Date</th>
            </tr>
          </thead>
          <tbody>
            {borrowHistory.map((historyItem, index) => (
              <tr key={index}>
                <td>{historyItem.title}</td>
                <td>{historyItem.author}</td>
                <td>{historyItem.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BorrowHistoryPage;
