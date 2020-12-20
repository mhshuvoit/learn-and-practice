import React from 'react'
const myStyle = {
    color: '#424242',
    backgroundColor: 'blue',
}
function Inline() {
    return (
        <div>
            <p style={myStyle}>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
            <h1 style={myStyle}>kdjfkdjfdjf</h1>
            <p style={{
               color: '#424242',
               backgroundColor: 'blue',
            }}>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
        </div>
    )
}

export default Inline
