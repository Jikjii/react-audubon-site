import React, { useState, useEffect } from 'react'
import '../index.css'
import { Link, useParams } from 'react-router-dom'
// import axios from 'axios'

const Birds = () => {
    const [birds, setBirds] = useState([])

    useEffect(() => {
        fetch('https://audubon-api.herokuapp.com/api/birds') //<-- the url as a string
        // Wait for the response and convert it to json
        .then((res) => res.json())
        // Take the json and do something with it
        .then((json) => {
            // the json parameter holds the json data
            // so here's where you will need to
         // use the setBirds method put the json into state
         //console.log(json)
         setBirds(json)
        })
        // Catch and log any errors to the console
        .catch(console.error);

    }, [])

   



  return (
        <section className="container">
            {birds.map((bird, idx) => (
                <Link to={`/details/${bird.id}`} key={bird.id}>
                <div className="card">
                <div className="card-image">
                <img
                    src={bird.image}
                    alt={bird.name}
                />
                </div>
                <div className="card-title">
                <h3>{bird.name}</h3>
                </div>
                </div>
                </Link>
            ))}
        </section>
  )
}

export default Birds