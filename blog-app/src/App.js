import React, { Component } from 'react'
import './App.css';
import { newsCategory } from './components/newsCategory'
import Header from './components/header'
import Pagination from './components/pagination'
import ListNews from './components/listNews';
import NewsClass from './components/newsClass'

const news = new NewsClass(newsCategory.business)

class App extends Component {
  state = {
    data: {},
    pageValue: ''
  }

  componentDidMount() {
    news.getNews()
      .then(data => {
        this.setState({
          data: data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  changeCategory = (item) => {
    news.changeCategory(item)
      .then(data => {
        this.setState({
          data: data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  next = () => {
    news.nextPage()
      .then(data => {
        this.setState({
          data: data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  prev = () => {
    news.prevPage()
      .then(data => {
        this.setState({
          data: data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }


  gotoPage = () => {
    news.jumpPage(this.state.pageValue)
      .then(data => {
        this.setState({
          data: data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  onChangeValue = (e) => {
    this.setState({
      pageValue: e.target.value
    })
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App container">
        <h1>Blog App</h1>
        <Header
          category={this.state.data.category}
          changeCategory={this.changeCategory}
          value={this.state.value}
          onChangeHandler={this.onChangeHandler} />
        <div className="d-flex  ">
          <p><strong>Total Result  {this.state.data.totalResults}</strong></p>
          <p className="ml-auto">Page {this.state.data.currentPage} out of {this.state.data.totalPages}</p>
        </div>
        <ListNews news={this.state.data.data} />
        <Pagination
          nextPage={this.next}
          prevPage={this.prev}
          jumpPageValue={this.onChangeValue}
          gotoPage={this.gotoPage}
          isPrevPage = {this.state.data.isPrevPage}
          isNextPage = {this.state.data.isNextPage} />
      </div>
    )
  }
}

export default App
