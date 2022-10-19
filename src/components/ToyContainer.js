import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, donateToy}) {

  const toyCards = toys.map(toy => {
    return (
      <ToyCard 
        key={toy.id} 
        name={toy.name} 
        image={toy.image} 
        toyLikes={toy.likes} 
        id={toy.id} 
        donateToy={donateToy}
      />
    )
  })

  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
