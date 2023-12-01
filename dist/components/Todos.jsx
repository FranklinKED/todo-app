import { FaTrash } from "react-icons/fa";

export default function Todos({ todos, onDelete, onUpdate, onEdit }) {
  return (
    <ul className="list">
      {todos.map((item) => (
        <Item
          item={item}
          key={item.id}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

function Item({ item, onDelete, onUpdate, onEdit }) {
  return (
    <li
      style={
        item.isCompleted
          ? { textDecoration: "line-through", color: "blue" }
          : {}
      }
    >
      <span className="list-item">{item.todo}</span>
      <button
        className="edit"
        onClick={() => {
          onEdit(item.id);
        }}
      >
        Edit
      </button>
      <input
        type="checkbox"
        id={item.id}
        value={item.isCompleted}
        onChange={() => {
          onUpdate(item.id);
        }}
      />
      <button className="delete-button">
        <FaTrash onClick={() => onDelete(item.id)} />
      </button>
    </li>
  );
}
