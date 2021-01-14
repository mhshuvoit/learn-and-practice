// serial
// constructor(ekbar) ->  Getderivedstatefromprops() -> render -> componentDidMount(ekbar)(dom element access, asynconous task, jquery, gsap(animation))-> componentDidUpdate(state, component update nile eta call hobe) ->componentWillUnmount(subscribtion remove, component remove, window er sathe eventlistener remv kora)
import React, { Component } from 'react'

class WillUnmount extends Component {
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    render() {
        return (
            <div>
                <p>test</p>
            </div>
        )
    }
}


class Lifecyclemethod extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Mh shuvo',
            count: 0
        }
        // console.log('I am from constructor')
        this.divRef = React.createRef()
        this.btnRef = React.createRef()
    }

    // componentDidMount(prevProps, prevState, snapshot) {
    //     // console.log('I am from componentD')
    //     console.log('from compoD', this.divRef.current)
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log(snapshot)
    // }

    // static getDerivedStateFromProps(props, state) {
    //     if (props.count !== state.count) {
    //         return { count: props.count }
    //     }
    //     return null //('jodi state change na hoy')
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextState.count <= 5
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) { // age ki silo seta janar jonno.
    //     const btn = this.btnRef.current
    //     console.dir(btn)
    //     return btn.offsetTop || null
    // }

    render() {
        // console.log('I am from render')
        // console.log(this.divRef)
        return (
            <div ref={this.divRef}>
                {this.state.name}
                {this.state.count}
                {/* {this.state.count % 2 === 0 && <WillUnmount />} */}
                <button onClick={() => this.setState({ count: this.state.count + 1 })}
                    ref={this.btnRef}
                >button</button>
            </div>
        )
    }
}

export default Lifecyclemethod
