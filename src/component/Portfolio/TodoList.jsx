import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import './TodoList.css';
import { push, ref, getDatabase, remove, update, onValue } from 'firebase/database';

function TodoList() {
  const [data,setData] = useState([])
  const [item,setItem] = useState('')
  const [index,setIndex] = useState(0)
  const [editingItem,setEditingItem] = useState(null);

  function addItem(e){
    e.preventDefault()
    setItem('')
   if (editingItem) {
    update(ref(getDatabase(),`todos/${editingItem.key}`),{
      name:item,
      date:new Date().toString()
    })
    setEditingItem(null)
   }else{
    push(ref(getDatabase(),`todos`),{
      name:item,
      date:new Date().toString()
    })
   }
  }


function showButtons(it){
  document.getElementById(it.key).style.display = 'flex';
  document.getElementById(it.key).style.width = 70;
  document.getElementById(it.key).style.justifyContent = 'space-between';
}
function hideButtons(it){
  document.getElementById(it.key).style.display = 'none'
}
function deleteThis(it){
  // delete
  remove(ref(getDatabase(),`todos/${it.key}`))
}
function editThis(it){
  setItem(it.val().name)
  setEditingItem(it)
}

useEffect(() => {
  onValue(ref(getDatabase(),`todos`),(todos) => {
    let todosArray = []
    todos.forEach((todo) => {
      todosArray.push(todo)
    })
    let sorted = todosArray.sort((a,b) => {
      if (a.val().name > b.val().name) {
        return 1
      }
      if (a.val().name < b.val().name) {
        return -1
      }
      return 0
    })
    setData(sorted)
  })
},[])

  return (
    <div className="App">
      <header className="App-header">
        <div className='parent'>
          <h1>To Do List</h1>
        <form className='form'
        onSubmit={addItem}>
        <input 
        value={item}
        onChange={(event) => setItem(event.target.value)}
        placeholder='Type item..'
        className='search-input' 
        type="text" name="" id="" required />
        <button className='button' type='submit'>Add</button>
        </form>
        </div>

        <div className='items'>
          {
            data.map((item,index) => {
              return <div
              onMouseOver={() => showButtons(item,index)}
              onMouseLeave={() => hideButtons(item,index)}
              className='item'
              key={index}>
                <div>
                  {index+1}.{item.val().name}
                </div>
             <div id={item.key} style={{ display:'none', width:70,flexDirection:'row',justifyContent:'space-between' }}>
             <MdEdit className='pointer' onClick={() => editThis(item)} />
              <MdDelete className='pointer' onClick={() => deleteThis(item)} />
              </div>
              </div>
            })
          }
        </div>
      </header>
    </div>
  );
}

export default TodoList;
