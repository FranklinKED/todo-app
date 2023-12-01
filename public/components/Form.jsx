import React from "react";

export default function Form({
  onAddTodo,
  todo,
  setTodo,
  editId,
  setEditId,
  todos,
  setTodos,
}) {
  function handleSubmit(e) {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if (!todo) return;

    const newItem = { todo, id: Date.now(), isCompleted: false };

    console.log(newItem);

    onAddTodo(newItem);
    setTodo("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="new-todo">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Create a new todo..."
          />
        </div>
        <button
          className="new-form"
          style={editId ? { background: "green" } : {}}
        >
          {editId ? "edit" : "New-todo"}
        </button>
      </form>
    </div>
  );
}
