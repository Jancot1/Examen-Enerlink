
import "./styles.css";

export const TodoListItem = ({ onCheck, checked, onDelete, label, id }) => (
  <div className="todo-list-item">
    <div
      tabIndex="0"
      role="checkbox"
      aria-checked
      className="todo-list-item-content"
    >
      <input
        tabIndex="-1"
        type="checkbox"
        checked={checked}
        onChange={() => onCheck(id, !checked)}
      />
      <span className={checked ? "todo-list-item-checked" : ""}>{label}</span>
    </div>
    <button type="button" className="btn-close" aria-label="Close" onClick={() => {
      onDelete(id);
    }} />
  </div>
);