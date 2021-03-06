import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo (POJO)
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo(props) {

  const { todo, update, remove } = props;
  const [isEditing, setIsEditing] = useState(false) //if this is display only

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing(isEditing => !isEditing) // If the new state relies on the old state, use the callback form. 
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id)
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  // pass and spread the id out for update. 
  function handleSave(formData) {
    update(formData)
    toggleEdit()
  }

  const toDoDisplay = isEditing ? <TodoForm initialFormData={todo} handleSave={handleSave} /> :
    <div className="mb-3">
      <div className="float-right text-sm-right">
        <button
          className="EditableTodo-toggle btn-link btn btn-sm"
          onClick={toggleEdit}>
          Edit </button>
        <button
          className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
          onClick={handleDelete}>
          Del </button>
      </div>
      <Todo todo={todo} />
    </div>

  return (
    <div className="EditableTodo">
      {toDoDisplay}
    </div>
  )
}

export default EditableTodo;
