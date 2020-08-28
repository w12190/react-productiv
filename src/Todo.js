import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TodoApp } -> Todo
 **/

function Todo(props) {

  const { id, title, priority, description } = props.todo;
  
  return (
    <div id={id} className="Todo">
      <div><b>{title}</b> <small>(priority: {priority})</small></div>
      <div><small>{description}</small></div>
    </div>
  );
}

export default Todo;
