import React from 'react'

function Functionclick(){
    function Clickhandler() {
        console.log('Button Click');
    }
    return (
        <div>
            <button onClick={Clickhandler}>click</button>
        </div>
    )
}

export default Functionclick