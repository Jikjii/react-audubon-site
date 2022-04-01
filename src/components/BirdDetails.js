import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const BirdDetails = ({ id }) => {
    const [bird, setBird] = useState({})

    const params = useParams()

    useEffect(() => {
        fetch(`https://audubon-api.herokuapp.com/api/birds/${params.id}` ) //<-- the url as a string
        // Wait for the response and convert it to json
        .then((res) => res.json())
        // Take the json and do something with it
        .then((json) => {
            // the json parameter holds the json data
            // so here's where you will need to
         // use the setBirds method put the json into state
         console.log(json)
         console.log('^^^')
         setBird(json)
        })
        // Catch and log any errors to the console
        .catch(console.error);
      }, []);

 


  return (
    <main>
      <div className="details-container">
        <img className="details-image" src={bird.image} alt={bird.name} />
        <div className="details">
          <h2>{bird.name}</h2>
          <h3>({bird.genus})</h3>
          <h4>Conservation Status</h4>
          <p>{bird.conservationStatus}</p>
          <a href={bird.homepage} target="_blank" rel="noopener" className="read-more">Read More</a>

        </div>
       
      </div>
  
    </main>
  )
}

export default BirdDetails