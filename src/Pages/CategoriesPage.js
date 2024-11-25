import React from "react";

const CategoriesPage = () => {
  const categories = [
    { name: "Romance", books: ["Pride and Prejudice", "Jane Eyre"] },
    { name: "Drama", books: ["To Kill a Mockingbird", "Hamlet"] },
    { name: "Science Fiction", books: ["Dune", "Neuromancer"] },
    { name: "Self-Help", books: ["The Power of Habit", "Atomic Habits"] },
    { name: "Personal Finance", books: ["The Power of Now", "Think and Grow Rich"] },
    { name: "Philosophy", books: ["The Alchemist", "Meditations"] },
  ];

  return (
    <div className="container">
      <h1>Categories</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <h2>{category.name}</h2>
            <ul>
              {category.books.map((book, i) => (
                <li key={i}>{book}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesPage;
