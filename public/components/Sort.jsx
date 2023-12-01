import React, { useState } from "react";

export default function Sort({
  darkMode,
  ontoggle,
  todos,
  sortBy,
  setSortBy,
  setTodos,
}) {
  const totalTodos = todos.length;
  if (!totalTodos)
    return (
      <h6 className="stats">Start adding some item to your todo-list📘</h6>
    );

  function handleClearAll() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all todos?😐"
    );
    if (confirmed) setTodos([]);
  }

  return (
    <div className="sort">
      <p className="remaining">
        <span>{totalTodos}</span>todo-list
      </p>

      <button className="clear-all" onClick={handleClearAll}>
        Clear Todos
      </button>
    </div>
  );
}

{
  /* <FaTrash /> */
}
