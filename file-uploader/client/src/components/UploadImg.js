import React from 'react'
import Axios from 'axios'
import '../App.css'

class UploadImg extends React.Component {
  state = {
    name: '',
    selectedFile: null
  }

  changeHandler = event => {
    this.setState({
      name: event.target.value
    })
  }

  fileSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  fileUploadHandler = (event) => {
    event.preventDefault()
    const fd = new FormData()
    fd.append('name', this.state.name)
    fd.append('image', this.state.selectedFile)
    Axios.post('http://localhost:5000/upload/add', fd, {
      onUploadProgress: ProgressEvent => {
        console.log('Upload Progress: ' + Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%')
      }
    })
      .then(res => {
        window.location = "/allimg"
      })
      .catch(res => {
        console.log(res.data)
      })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.fileUploadHandler}>
          <div className="form-group">
            <label htmlFor="name"> Name: </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={this.state.name}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name"> Image: </label>
            <input
              style={{ display: 'none' }}
              type='file'
              onChange={this.fileSelectedHandler}
              ref={fileInput => this.fileInput = fileInput} />
              <p className="pStyle" onClick={() => this.fileInput.click()}>Pick File</p>
            <button style={{margin: 'auto'}} className="btn btn-primary my-3 d-block">Upload</button>
          </div>
        </form>
      </div>
    )
  }
}

export default UploadImg
