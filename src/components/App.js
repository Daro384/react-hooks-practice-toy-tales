import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false)
  const [toys, setToys] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3001/toys").then(resp => resp.json())
    .then(fetchedToys => setToys(fetchedToys))
  },[])

  const donateToy = id => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method:"delete"
    })
    setToys(
      toys.filter(toy => toy.id !== id)
    )
  }

  const addToy = toy => {
    fetch(`http://localhost:3001/toys`, {
      method:"post",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(toy)
    }).then(resp => resp.json())
    .then(newToy => setToys([...toys, newToy]))
    
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} donateToy={donateToy}/>
    </>
  );
}

export default App;
