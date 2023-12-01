import Todos from "../public/components/Todos";
import Sort from "../public/components/Sort";
import Header from "../public/components/Header";
import Form from "../public/components/Form";
import Footer from "../public/components/Footer";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [sortBy, setSortBy] = useState("order");
  const [editId, setEditId] = useState(0);

  function toggleDarkMode() {
    setDarkMode((prevState) => !prevState);
  }

  function handleAddTodo(newItem) {
    setTodos((todos) => [...todos, newItem]);
  }

  function handleDeleteItem(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  function handleToggleItem(id) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  function handleEdit(id) {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  }

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <Header darkMode={darkMode} ontoggle={toggleDarkMode} />
      <Form
        onAddTodo={handleAddTodo}
        todo={todo}
        setTodo={setTodo}
        editId={editId}
        setEditId={setEditId}
        todos={todos}
        setTodos={setTodos}
      />
      <Todos
        todos={todos}
        onDelete={handleDeleteItem}
        onUpdate={handleToggleItem}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onEdit={handleEdit}
      />
      <Sort
        todos={todos}
        sortBy={sortBy}
        setSortBy={setSortBy}
        setTodos={setTodos}
      />
      <Footer />
    </div>
  );
}

export default App;
