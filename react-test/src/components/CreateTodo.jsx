import React, { useState, useEffect } from 'react';
import DisplayTodo from './DisplayTodo';

function CreateTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Clear the input fields after todos are updated
    setTitle('');
    setDescription('');
  }, [todos]);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleTodo() {
    setTodos([
      ...todos,
      {
        id: `${todos.length + 1}`,
        title: title,
        description: description,
        complete:false
      },
    ]);
  }

  return (
    <div>
      <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
      <input type="text" placeholder="Description" value={description} onChange={handleDescriptionChange} />
      <button onClick={handleTodo}>Add todo</button>
      <br />
      {/* <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
          </div>
        ))}
      </div> */}
      <DisplayTodo todos={todos}></DisplayTodo>
    </div>
  );
}

export default CreateTodo;
