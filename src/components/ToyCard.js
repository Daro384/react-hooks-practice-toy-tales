import React, {useState} from "react";

function ToyCard({name, image, toyLikes, id, donateToy}) {

  const [likes, setLikes] = useState(toyLikes)

  const like = () => {
    const newLikes = likes + 1
    fetch(`http://localhost:3001/toys/${id}`, {
      method:"PATCH",
      headers: {
        "content-type":"application/json"
      },
      body:JSON.stringify({
        likes:newLikes
      })
    })
    setLikes(newLikes)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={like} >Like {"<3"}</button>
      <button className="del-btn" onClick={() => donateToy(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
