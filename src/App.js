import { useEffect, useState } from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);

  const hendleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      title: value,
      id: new Date().getTime(),
      isChecked:false,
    }

    setTodo([...todo, newTodo])

    setValue("");
  }



  const hendleDelete = (id) => {
    let newIsCheck = todo.filter(item => item.id != id )
   
    setTodo(newIsCheck);

  }

  const hendleCheck = (id) => {
    let newIsCheck = todo.map(item => {
      if(item.id == id){
        item.isChecked = !item.isChecked
      }
      return item
    })
   
    setTodo(newIsCheck);

  }

  const hendleClear = () => {
    setTodo([])
  }




  return (
    <>
      <main className='ps-3'>
        <section className='todo'>
          <div>
            <h1>
              Todo list
            </h1>

            <form className='d-flex align-items-center' onSubmit={hendleSubmit}>
              <input className='form-control w-25' placeholder='Add todo' required value={value} onChange={(e) => setValue(e.target.value)} />

              <button type='submit' className='btn btn-primary ms-3'>
                Add
              </button>
              <button type='submit' className='btn btn-danger ms-2' onClick={hendleClear}>
                Clear
              </button>
            </form>

            <ul className='list-unstyled w-25 mt-4'>
              {
                todo.map((item) => (
                  <li className='card p-3 mt-2' key={item.id}>
                    <div className='d-flex justify-content-between'>
                      <div className='d-flex align-items-center '>
                        <input className='me-2' type={'checkbox'} onChange={()=> hendleCheck(item.id)}  />
                        <span className={item.isChecked ? "text-decoration-line-through" : "text-decoration-none"} > {item.title}</span>
                      </div>
                      <button className='btn btn-close' onClick={() => hendleDelete(item.id)}></button>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
