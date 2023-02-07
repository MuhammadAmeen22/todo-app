import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  let update = (event) => {
    setText(event.target.value);
  }

  let addItem = () => {
    items.push(text)
    setItems([...items])
    setText('');
  }

  let editItem = (i) => {
    let edited = prompt("Enter text : ")
    items[i] = edited
    setItems([...items])
  }


  let deleteItem = (i) => {
    items.splice(i,1)
    setItems([...items])
  }

  let deleteAll = ()=>{
    items.length=0;
    setItems([...items])
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='inputField'>
          <input onChange={update} type="text" placeholder='Enter item' />
          <button onClick={addItem}>Add</button>
          <button onClick={deleteAll}>Delete All</button>
        </div>

        <ol>
          {
            items.map((x, i) => {
              return (
                <div key={i}>
                  <li>{x} <button onClick={() => editItem(i)}>Edit</button><button onClick={() => deleteItem(i)}>Delete</button></li>
                </div>
              )
            })
          }
        </ol>

      </header>
    </div>
  );
}

export default App;
