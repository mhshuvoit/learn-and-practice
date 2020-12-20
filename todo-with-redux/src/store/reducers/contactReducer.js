import * as Types from '../actions/types'

const init = {
    allContacts: [],
    search: ''
}

const contactReducer = (state = init, action) => {
    switch (action.type) {
        case Types.LOAD_CONTACT: {
            return {
                allContacts: action.payload.contacts,
                search: 'all'
            }
        }
        case Types.CREATE_CONTACT: {
            let allState = state.allContacts
            allState.unshift(action.payload.contacts)
            return allState
        }
        case Types.REMOVE_CONTACT: {
            let allState = state.allContacts
            return allState.filter(cont => {
                return cont.id !== action.payload.id
            })
        }
        case Types.UPDATE_CONTACT: {
            let allState = [...state]
            return allState.map(cont => {
                if (cont.id === action.payload.id) {
                    return action.payload.contacts
                }
                return cont
            })
        }
        case Types.IS_COMPLETE: {
            let allState = [...state]
            let states = allState.find(cont => cont.id === action.payload.id)
            states.isComplete = !states.isComplete
            return allState
        }
        case Types.FILTER_HANDLER: {
            let allState = [...state]
            let filterCon = action.payload.filter
            console.log(filterCon)
            if (filterCon === 'complete') {
                return allState.filter(sta => sta.isComplete)
            } else if (filterCon === 'running') {
                return !allState.filter(sta => !sta.isComplete)
            } else {
                return allState
            }
        }
        case Types.HANDLE_SEARCH: {
            let search = action.payload.search
            return { search: search }
        }
        case Types.SEARCH_RESULT: {
            let tempContacts = [...state]
            let contacts = tempContacts.contacts
            let search = tempContacts.search
            contacts.filter(con => con.name.toLowerCase()
                .includes(search.toLowerCase())
            )
        }
        default: return state
    }
}

export default contactReducer