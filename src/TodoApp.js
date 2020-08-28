import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import EditableTodoList from "./EditableTodoList";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

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

function TodoApp({ initialTodos }) {

  const [todos, setTodos] = useState(initialTodos);
  /** add a new todo to list */
  function create(newTodo) {
    console.log("Here is newTodo", newTodo)
    const newTodoWithId = {
      ...newTodo,
      id: uuid()
    }
    setTodos(todos => [
      ...todos,
      newTodoWithId
    ]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodos(todos => todos.map(todo => {
      if (todo.id === updatedTodo.id) return updatedTodo;
      else return todo;
    }));
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  /** get highest-priority todo */

  // we can just use sort. Make our lives easier. 
  function getTopTodo() {
    let topTodo = todos.reduce((acc, cur) => {
      if (Object.keys(acc).length === 0) {
        acc = cur;
      }
      if (cur.priority < acc.priority) {
        acc = cur;
      }
      return acc;
    }, {});
    console.log(topTodo);
    return topTodo;
  }

  // /**  */
  // function handleSave(formData) {
  //   create(formData);
  // }

  // add some logic for when there are no top todos.
  return (
    <main className="TodoApp">
      <div className="row">
        <div className="col-md-6">
          <EditableTodoList todos={todos} update={update} remove={remove} />
        </div>
        <div className="col-md-6">
          <section className="mb-4">
            <h3>Top Todo</h3>
            <Todo todo={getTopTodo()} />
          </section>
          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={create} />
          </section>
        </div>
      </div>

    </main>
  );
}

export default TodoApp;