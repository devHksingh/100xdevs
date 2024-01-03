import React from 'react'
import { useState } from 'react'

function DisplayTodo({todos}) {
  return (
    <div>
        {todos.map((todo)=>(
            <div key={todo.id}>
                <h2>{todo.title}</h2>
                <p>{todo.description}</p>
                
            </div>
        ))}
    </div>
  )
}



export default DisplayTodo