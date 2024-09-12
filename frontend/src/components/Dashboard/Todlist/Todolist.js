import React, { useState } from 'react';
import './Todolist.css'; // Ensure this CSS file is updated with your styles

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const addTodo = (e) => {
    e.preventDefault();
    if (text && day) {
      setTodos([...todos, { text, day, completed: false }]);
      setText('');
      setDay('');
      setShowAddForm(false); // Hide the form after adding a task
    }
  };

  
  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const resetTasks = () => {
    setTodos([]);
  };

  return (
    <div className="Todolist">
      <header className="header">
        <h1 className='task-h'>My Tasks({todos.length})</h1>
        <div className="icons">
          <button id='add-icon' className="icon" onClick={() => setShowAddForm(!showAddForm)}>
            +
          </button>
          <div className="dropdown">
            <button id='menu' className="icon" onClick={() => setShowDropdown(!showDropdown)}>
              <i className="fa fa-ellipsis-v"></i>
            </button>
            {showDropdown && (
              <div className="dropdown-content">
                <button onClick={resetTasks}>Reset Tasks</button>
              </div>
            )}
          </div>
        </div>
      </header>
      {showAddForm && (
        <form onSubmit={addTodo} className="add-todo-form">
          <input
            type="text"
            placeholder="Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="text"
            placeholder="Day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
          <button className='btn' type="submit">Add</button>
        </form>
      )}
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div
            key={index}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
          ><input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
              className='todo-tic'
            />            
            <span className="todo-text">{todo.text}</span>
            <span className="todo-day">{todo.day}</span>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;