import React,{useState} from "react"

function ToyForm({addToy}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    const newToy = {
      name:name,
      image:image,
      likes:0
    }
    addToy(newToy)
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(event) => setImage(event.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
