import React, { Component } from 'react'

import Form from './component/Form'

class App extends React.Component {
  state = {
    users: []
  }

  createUser = user => {
    user.id = new Date().getTime().toString()
    this.setState({
      users: [...this.state.users, user]
    })
  }

  render() {
    console.log(this.state.users)
    return (
      <div>
        <Form users={this.createUser} />
        {this.state.users.map(user => (
          <ul
            key={user.id}>
            <li>{user.email}</li>
          </ul>
        ))}

      </div>
    )
  }
}

export default App

// import Hook from './component/Hook/App'

// react-component-tree-props-passing
// import Son from './component/rctpp/Son'
// import {DadaProvider} from './component/rctpp/Mycontext'

// route-with-url-params
// import Router from './component/route-with-url-params/Router'

// lifecyclemethod
// import Lifecyclemethod from './component/lifecyclemethod/lifecyclemethod'

//style
// import Style from './component/style/inline.js'

// import Uncontrolled from './component/uncontrolForm'


// import Router from './component/react-router'
// function App() {
//   return (
//     <div className="App">
{/* <Hook/> */ }
{/* react-component-tree-props-passing */ }
{/* <DadaProvider value = "Dada send love for Puti"> */ }
{/* <Son name={"Puti name is salam"}></Son> */ }
{/* <Son/>
      </DadaProvider> */}

{/* route-with-url-params  */ }
{/* <Router/> */ }

{/* <Lifecyclemethod/> */ }
{/* <Lifecyclemethod count={100}/> */ }

{/* <Router/> */ }

{/* Style */ }
{/* <Style /> */ }

{/* <Uncontrolled/> */ }

// </div>
//   )
// }

// export default App




// import React, { Component } from 'react'

// class App extends Component {
//   render() {
//     return React.createElement('div', {className: 'App'}, [
//       React.createElement('h1', null, 'Hi I am shuvo')
//     ])
//   }
// }

// export default App

// const App = {
//   type: 'div',
//   props: {
//     className: 'App',
//     title: 'anything'
//   },
//   children: ['p', h1] || null,
// }

// import React, { Component } from 'react'

// class Check extends React.Component {

//   render() {
//     console.log(this)

//     this.props.func(this)
//     return <h2>I am check</h2>
//   }
// }

// class App extends React.Component {
//   state = { count: 0 }
//   getContext(context) {
//     console.log(context)
//   }
//   // count = 0
//   render() {
//     // console.log(this)
//     return (
//       <div>
//         {/* {this.props} */}
//         <h1>Hi this is props</h1>
//         <Check func={this.getContext} />
//         {/* <button onClick={()=> {this.count ++; console.log(this.count)}}
//         >{this.count}</button>
//         <button onClick={() => {
//           this.setState({ count: this.state.count + 1 })
//           console.log(this.state.count)
//         }}
//         >{this.state.count}</button> */}
//       </div>
//     )
//   }
// }

// export default App


// import React, { Component } from 'react'

// class App extends Component {
//   state = {
//     count: 0
//   }

//   render() {
//     console.log(this.state.count)
//     return (
//       <div>
//         <button onClick={() => this.setState(prev => {
//           return {
//             count: prev.count + 1
//           }
//         }, () => console.log(this.state.count))} >{this.state.count}</button>
//       </div>
//     )
//   }
// }

// export default App



// //four mehtod to style react app
// // inline css 
// // css class
// // css module
// // jss(styled component) css in js




