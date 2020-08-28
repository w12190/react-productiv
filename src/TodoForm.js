import React, { useState } from "react";


/** Form for adding.
 *
 * Props:
 * - initialFormData
 * - handleSave: function to call in parent.
 *
 * { TodoApp, EditableTodo } -> TodoForm
 */


 // Take out the default for initialFormData. Make a var on top called initial state.
function TodoForm({ initialFormData = { title: '', description: '', priority: 1 }, handleSave }) {
  const [formData, setFormData] = useState(initialFormData)

  const { title, description, priority } = formData;

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target
    console.log("name and value", name, value);
    setFormData(oldFormData => ({ ...oldFormData, [name]: value }))
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault()
    console.log(formData);
    handleSave(formData);
    setFormData({ title: '', description: '', priority: '' }) // repeating here.
  }

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>

      <div className="form-group">
        <input
          id="newTodo-title"
          name="title"
          className="form-control"
          placeholder="Title"
          onChange={handleChange}
          value={title}
          aria-label="Title"
        />
      </div>

      <div className="form-group">
        <textarea
          id="newTodo-description"
          name="description"
          className="form-control"
          placeholder="Description"
          onChange={handleChange}
          value={description}
          aria-label="Description"
        />
      </div>

      <div className="form-group d-flex justify-content-between">
        <div className="w-75 d-flex justify-content-between">
          <label htmlFor="newTodo-priority"
            className="d-inline-flex">Priority:&nbsp;&nbsp;
            </label>
          <select id="newTodo-priority"
            name="priority"
            value={priority}
            onChange={handleChange}
            className="form-control form-control-sm d-inline-flex"
          >
            <option value={1}>Ultra-Über</option>
            <option value={2}>Über</option>
            <option value={3}>Meh</option>
          </select>
        </div>
        <button className="btn-primary rig btn btn-sm NewTodoForm-addBtn">
          Gø!
          </button>
      </div>

    </form>
  );
}

export default TodoForm;
