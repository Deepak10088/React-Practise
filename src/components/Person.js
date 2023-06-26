import React from 'react'

function Person({perso}) {
  return (
    <div>
      <h3>
        I am {perso.name}, I am {perso.age} year old, I know {perso.skill}
      </h3>
    </div>
  )
}

export default Person
