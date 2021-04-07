import React, { Component } from 'react'
import Axios from 'axios'
import '../App.css'

class ShowImg extends Component {
  state = {
    getImg: []
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/upload/get')
      .then(result => {
        this.setState({ getImg: result.data.response })
      })
      .catch(res => console.log(res))
  }

  render() {
    return (
      <div className="text-center">
        {this.state.getImg.map(img => {
          return (
            <div>
              <h2>Name: {img.name}</h2>
              <img className='imgStyle'
                src={`http://localhost:5000/${img.image}`} alt="img"
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default ShowImg