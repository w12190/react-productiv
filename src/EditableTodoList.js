import React from "react";
import EditableTodo from "./EditableTodo";
import Todo from "./Todo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, update, remove }) {
// add some logic for when we have no todos. 
  const editableList = todos.map(todo => <EditableTodo
    key={todo.id}
    todo={todo}
    update={update}
    remove={remove}
  />
  );

  return (
    <div className="TodoList">
      <h3 className="mb-3">Todos</h3>
      {editableList}
    </div>
  );
}

export default EditableTodoList;
