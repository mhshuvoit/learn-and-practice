import React, { Component } from 'react'

class App extends Component {
    state = {
        count: 0
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }

    intervalId = null

    //   startTime = () => {
    //     if (this.state.count > 0 && !this.intervalId) {
    //       this.intervalId = setInterval(() => {
    //         this.setState({ count: this.state.count - 1 }, () => {
    //           if (this.state.count === 0) {
    //             alert('Finished')
    //             clearInterval(this.intervalId)
    //           }
    //         })
    //       }, 1000)
    //     }
    //   }

    startTime = () => {
        if (this.state.count > 0) {
            this.intervalId = setInterval(() => {
                this.setState({ count: this.state.count - 1 }, () => {
                    if (this.state.count === 0) {
                        alert('Finished')
                        clearInterval(this.intervalId)
                    }
                })
            }, 1000)
        }
    }

    stopTimer = () => {
        if (this.intervalId) {
            clearInterval(this.intervalId)
            this.intervalId = null
        }
    }

    resetTimer = () => {
        this.setState({ count: 0 })
        clearInterval(this.intervalId)
        this.intervalId = null
    }

    render() {
        console.log(this.intervalId)
        return (
            <div className="container text-center">
                <button onClick={this.decrement}
                >-</button>

                <button onClick={this.increment}
                >+</button>

                <span>{this.state.count}</span>
                <button onClick={this.startTime}
                >Start</button>

                <button onClick={this.stopTimer}
                >Stop</button>

                <button onClick={this.resetTimer}
                >Reset</button>
            </div>
        )
    }
}

export default App