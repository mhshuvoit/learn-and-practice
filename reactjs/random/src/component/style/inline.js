// import React from "react";
// const myStyle = {
//   color: "#424242",
//   backgroundColor: "blue",
// };

// function Inline() {
//   return (
//     <div>
//       <p style={myStyle}>
//         lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
//       </p>
//       <h1 style={myStyle}>kdjfkdjfdjf</h1>
//       <p
//         style={{
//           color: "#424242",
//           backgroundColor: "blue",
//         }}
//       >
//         lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
//       </p>
//     </div>
//   );
// }

// export default Inline;



// import React from 'react'

// class EventHan extends React.Component {
//   state = {
//     double: '',
//     name: 'mh shuvo',
//     forBig: false,
//     value: []
//   }

//   EventHandler = (event) => {
//     console.log(event)
//   }

//   DoubleClick = (event) => {
//     console.log(event)
//   }

//   DoubleClick = (event) => {
//     this.setState({ name: 'hm nayem' })
//   }

//   MouseEnter = (event) => {
//     console.log(event)

//   }

//   MouseLeave = (event) => {
//     console.log(event)
//   }

//   onChangeHandler = (event) => {
//     this.setState({ name: event.target.value })
//   }

//   onFocusHandler = (event) => {

//     this.setState({ forBig: true })

//   }

//   onBlurHandler = (event) => {
//     if (!this.state.name) {
//       alert('Please Enter a name')
//     }
//     this.setState({ forBig: false })

//   }

//   onChange = (event) => {
//     this.setState({value:event.target.value})
//     console.log(event.target.value)
//   }

//   render() {
//     return (
//       <div>
//         {this.state.forBig === false ?  <h1>{this.state.name}</h1> 
//         : <h3>{this.state.name}</h3>}
//         <button onClick={this.EventHandler}>button</button>
//         <button onDoubleClick={this.DoubleClick}>button</button>
//         <button onMouseEnter={this.MouseEnter}>button</button>
//         <button onMouseLeave={this.MouseLeave}>button</button>
//         <input
//           className="form-control"
//           value={this.state.name}
//           onChange={this.onChangeHandler}
//           onFocus={this.onFocusHandler}
//           onBlur={this.onBlurHandler}
//           type="text" placeholder='type' />
//           <select onChange={this.onChange}>
//             <option value="html">HTML</option>
//             <option value="css">CSS</option>
//             <option value="js">JS</option>
//           </select>
//           <h3>{this.state.value}</h3>
//       </div>
//     )
//   }
// }

// export default EventHan


import React, { Component } from 'react'

class inline extends Component {
  state = {
    name: '',
    country: '',
    bio: '',
    date: '',
    gander: '',
    agree: false,
    skills: []
  }
  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onCheckedHandler = (event) => {
    this.setState({
      agree: event.target.checked
    })
  }

  onCheckedskillHandler = (event) => {
    if (event.target.checked) {
      this.setState({
        skills: [...this.state.skills, event.target.value]
      })
    } else {
      let skills = this.state.skills.filter(skill => skill !== event.target.value)
      this.setState({
        skills: skills
      })
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.onChangeHandler}
          className="form-control" />
        <select
          name="country"
          value={this.state.country}
          onChange={this.onChangeHandler}>
          <option value='bangladesh'>Bangladesh</option>
          <option value='india'>India</option>
          <option value='srilanka'>Sri Lanka</option>
        </select>
        <input
          type="textarea"
          name="bio"
          value={this.state.bio}
          onChange={this.onChangeHandler}
          className="form-control" />
        <input
          type="date"
          name="name"
          value={this.state.name}
          onChange={this.onChangeHandler}
          className="form-control" />
        <div>
          <input
            type="radio"
            name="gander"
            value='Male'
            onChange={this.onChangeHandler} />Male
          <input
            type="radio"
            name="gander"
            value='Female'
            onChange={this.onChangeHandler} /> Female
        </div>

        <div>
          <input
            type="checkbox"
            name="agree"
            checked={this.state.agree}
            onChange={this.onCheckedHandler} /> I agree
       </div>

        <div>
          <input
            type="checkbox"
            value="html"
            checked={this.state.skills.includes('html')}
            onChange={this.onCheckedskillHandler} /> HTML
            <input
            type="checkbox"
            value="css"
            checked={this.state.skills.includes('css')}
            onChange={this.onCheckedskillHandler} /> CSS
            <input
            type="checkbox"
            value="js"
            checked={this.state.skills.includes('js')}
            onChange={this.onCheckedskillHandler} /> JS
       </div>

        <button onClick={() => console.log(this.state)}>button</button>
      </div>

    )
  }
}

export default inline
