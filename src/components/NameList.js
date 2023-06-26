import React from 'react'
import Person from './Person'

function NameList() {
   const persons = [{
    id : 1,
    name : 'bruce',
    age : 23,
    skill : 'python'
   },{
    id : 2,
    name : 'clark',
    age : 25,
    skill : 'java'
   },{
    id : 3,
    name : 'diana',
    age : 20,
    skill : 'flask'
   }]
   const personList = persons.map(person => <Person perso={person} />)
   return <div>{personList}</div>
}

export default NameList



// // const name = ['Bruce', 'Clark', 'Diana']
// return (
//       <div>
//         <h2>{name[0]}</h2>
//         <h2>{name[1]}</h2>
//         <h2>{name[2]}</h2>
//       </div>
//     )

// const name = ['Bruce', 'Clark', 'Diana']
// return (
//   <div>{
//     name.map(names => <h2>{names}</h2>)
//   }
//   </div>
// )


// const name = ['Bruce', 'Clark', 'Diana']
//     const nameList = name.map(names => <h2>{names}</h2>)