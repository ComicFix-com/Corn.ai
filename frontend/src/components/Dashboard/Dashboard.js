import React from 'react'
import '../Dashboard/Dashboard.css'
import Calendar from './Calender/Calender';
import TodoList from './Todlist/Todolist';
function Dashboard() {
  return (
    <div className='dashboard'>
      <div className="inp">
        <div className="inp-box">
          <input type="search" name="" className='search-bar' id="search" placeholder='Search  for  Conversation' />
          <i class="fa fa-search"></i>
        </div>
        <button className='create-tsk'>Create  task</button>
        <button className='edit'><i class="fa fa-pencil"></i></button>
        <button className='filter'><i class="fa fa-filter"></i></button>

      </div>
      <div className="row-2">
        <div className="item1">
        <Calendar/>


        </div>
        <div className="item2">
          <TodoList/>

        </div>
        <div className="item3">

        </div>
      </div>
      <div className="row-3">
        <div className="item4">

        </div>
        <div className="item5">
          
        </div>
        <div className="add-wid">
          <button className='wid-btn'>Add widget   <i class="fa fa-plus"></i></button>

        </div>
      </div>
    </div>
  )
}

export default Dashboard;
