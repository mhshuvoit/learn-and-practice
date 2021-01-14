import React, { useState } from 'react'

function HookCounterFour() {
	const [items, setItems] = useState([])
    
    const addItem = () => {
        const tests = {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }
        setItems([...items, tests])
    }

	return (
		<div>
			<button onClick={addItem}>Add a number</button>
			<ul>
				{items.map(item => (
					<li key={item.id}>{item.value}</li>
				))}
			</ul>
		</div>
	)
}

export default HookCounterFour

// import React, { Component } from 'react'

// class HookCounterFour extends Component {
//     state = {
//         items: []
//     }

//     clickHandler = () => {
//         const tests = {
//             id: this.state.items.length,
//             value: Math.floor(Math.random() * 10) + 1
//         }
//         const items = [ ...this.state.items, tests]
//         this.setState({ items: items })
//     }

//     render() {
//         console.log(this.state.items)
//         return (
//             <div>
//                 <button
//                     onClick={this.clickHandler} >add</button>
//                 <ul>
//                     {this.state.items.map(item => (
//                         <li key={item.id}>{item.value}</li>
//                     ))}
//                 </ul>
//             </div>
//         )
//     }
// }

// export default HookCounterFour
