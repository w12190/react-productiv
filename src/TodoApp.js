import React, { useState } from "react";
import uuid from "uuid/v4";

import EditableTodoList from "./EditableTodoList";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp() {

  /** add a new todo to list */
  function create(newTodo) { }

  /** update a todo with updatedTodo */
  function update(updatedTodo) { }

  /** delete a todo by id */
  function remove(id) { }

  /** get highest-priority todo */
  function getTopTodo() { }

  return (
      <main className="TodoApp">
        <div className="row">
          <div className="col-md-6">
            <EditableTodoList />
          </div>
          <div className="col-md-6">
            <section className="mb-4">
              <h3>Top Todo</h3>
              FIXME
            </section>
            <section>
              <h3 className="mb-3">Add Nü</h3>
              FIXME
            </section>
          </div>
        </div>

      </main>
  );
}

export default TodoApp;