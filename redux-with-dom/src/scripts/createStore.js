const createStore = (reducer, initialState) => {
    const store = {
        state: initialState,
        listeners: [],

        getState: function () {
            return this.state
        },

        subscribe: function (listener) {
            this.listeners.push(listener)
        },

        dispatch: function (action) {
            this.state = reducer(this.state, action)
            this.listeners.forEach(listener => listener())
        }
    }
    return store
}

export default createStore