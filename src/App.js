import React, { useState } from 'react';
import './App.css';

function App() {
   //   let text = React.createRef();
  //   const [names, setInputfield] = useState([]);

  //   const addName = () => {
  //     let name = text.current.value;
  //     names.push(name);
  //     setInputfield(names.slice());
  //   }

  //   const deleteName = (index) => {
  //     names.splice(index, 1);
  //     setInputfield(names.slice());
  //   }

  // return (
  //   <div className="App">
  //     <input name="data" ref={text} />
  //     <button onClick={addName}>Save</button>
  //     <div class='container'>  
  //       {
  //         names.map((name, index) => (

  //             <div className='row align-items-start'>
  //             <div className='col-9 border'>
  //               <b>{name}</b> 
  //             </div>
  //             <div className='col-3'>
  //               <button onClick={() => deleteName(index)}><i className="material-icons">&#xE872;</i></button>
  //               </div>
  //               </div>
  //         ))
  //       }   
  //     </div>
  //   </div>
  // );
  let text = React.createRef();
  const [names, setInputfield] = useState([]);
  const [listTwo, setInputfield1] = useState([]);

  const addName = () => {
    let name = text.current.value;
    names.push(name);
    setInputfield(names.slice());
    text.current.value = ""; // to reset textbox
    text.current.focus()
  }

  const deleteItem = (index) => {
    names.splice(index, 1);
    setInputfield(names.slice());
  }

  const packedItem = (index) => {
    const item = names[index];
    names.splice(index, 1);
    listTwo.push(item);
    setInputfield1(listTwo.slice());
    console.log(listTwo);
  }

  const unpackItem = (index) => {
    const tempItem = listTwo[index];
    listTwo.splice(index, 1);
    names.push(tempItem);

    setInputfield(names.slice());
    console.log(names, index);
  }

  return (
    <div className='App'>
      <input name="data"
        ref={text} />
      <button onClick={addName}>Add name</button>
      <div class='container'>
        <h2>List 1</h2>
        {
          names.map((name, index) => (
            <div className='row align-items-start'>
              <div className='col-9 border'>
                <b>{name}</b>
              </div>
              <div className='col-sm'>
                <button onClick={() => packedItem(index)}>Pack</button>
                {/* </div> */}
                {/* <div className='col-sm'> */}
                <button onClick={() => deleteItem(index)}>Remove</button>
              </div>
            </div>
          ))
        }
      </div>
      <div className='container'>
        <h2>List 2</h2>
        {
          listTwo.map((names, index) => (
            <div className='row align-items-start'>
              <div className='col-9 border'>
                <b>{names}</b>
              </div>
              <div className='col-sm'>
                <button onClick={() => unpackItem(index)}>Unpack</button>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )


}

export default App;
