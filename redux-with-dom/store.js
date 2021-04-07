// // Basic Implementation of Redux
// const createStore = (reducer, initState) => {
//     const store = {}
//     store.state = initState

//     store.listeners = []

//     store.getState = () => store.state

//     store.subscribe = listener => store.listeners.push(listener)

//     store.dispatch = action => {
//         store.state = reducer(store.state, action)
//         store.listeners.forEach(listener => listener())
//     }

//     return store
// }

// // Use of Redux

// const reducer = (state, action) => {
//     // return state
//     if (action.type === 'ADD') {
//         return state + 10
//     }

//     if (action.type === 'SUB') {
//         return state - 5
//     }
//     return state
// }

// const store = createStore(reducer, 0)

// store.subscribe(() => {
//     console.log(store.getState())
// })

// store.dispatch({ type: 'ADD' })
// store.dispatch({ type: 'SUB' })
// store.dispatch({ type: 'SUB' })
// store.dispatch({ type: 'SUB' })
// store.dispatch({ type: 'ADD' })



const createStore = (reducer, init) => {
    const store = {
        state: init,
        listeners: [],

        getState: function () {
            return this.state
        },
        subscribe: function (listener) {
            return this.listeners.push(listener)
        },
        dispatch: function (action) {
            this.state = reducer(this.state, action)
            this.listeners.forEach(listener => listener())
        }
    }
    return store
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD': {
            return state + action.payload
        }
        case 'SUB': {
            return state - action.payload
        }
        default: return state
    }
}

const store = createStore(reducer, 0)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({ type: 'ADD', payload: 20 })
store.dispatch({ type: 'SUB', payload: 2 })