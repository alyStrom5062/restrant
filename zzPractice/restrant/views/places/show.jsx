const React = require('react')
const Def = require('../layouts/default')

function Show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>

            <img src={data.place.pic} alt={data.place.name}/>

          <h3>Rating</h3>
          <p>Not Rated</p>
          <h3>Description</h3>
          <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>
          <h3>Comments</h3>
          <p>No comments yet!</p>

          </main>
        </Def>
    )
}

module.exports = Show