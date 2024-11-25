import React from "react";
import { useLocation } from "react-router-dom";

const BorrowHistoryPage = () => {
  const location = useLocation();
  const borrowHistory = location.state?.borrowHistory || [];

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
