import React, { Component } from 'react'
import CreateContact from './createContact/createContact'
import View from './controller/view'
import Filter from './controller/filter'
import ListView from './view/List'
import Table from './view/Table'
import SearchTodo from './controller/search'

class App extends Component {
  state = {
    modal: false,
    view: 'table'
  }

  openModal = () => {
    this.setState({ modal: true })
  }

  closeModal = () => {
    this.setState({ modal: false })
  }

  tableHandle = event => {
    this.setState({
      view: event.target.value
    })
  }

  render() {
    return (
      <div className="container text-center">
        <h1>Todo list</h1>

        <SearchTodo
          handleSearch={this.handleSearch}
          search={this.state.search} />

        <button
          onClick={this.openModal}
          className="btn btn-primary my-3">Add contact</button>

        <Filter />

        <View
          tableHandle={this.tableHandle}
          view={this.state.view} />

        {this.state.view === 'table' ?
          < Table/>
          :
          <ListView
          />
        }

        <CreateContact
          modalIsOpen={this.state.modal}
          closeModal={this.closeModal} />
      </div>
    )
  }
}

export default App