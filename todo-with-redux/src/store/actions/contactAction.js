import * as Types from './types'
import { contact } from '../../data.js'

export const loadContacts = () => dispatch => {
    dispatch({
        type: Types.LOAD_CONTACT,
        payload: {
            contacts: contact
        }
    })
}

export const addContacts = Addcontact => dispatch => {
    dispatch({
        type: Types.CREATE_CONTACT,
        payload: {
            contacts: Addcontact
        }
    })
}

export const deleteContact = id => dispatch => {
    dispatch({
        type: Types.REMOVE_CONTACT,
        payload: { id: id }
    })
}

export const updateContact = (id, contact) => dispatch => {
    dispatch({
        type: Types.UPDATE_CONTACT,
        payload: {
            id: id,
            contacts: contact
        }
    })
}

export const isComplete = id => dispatch => {
    dispatch({
        type: Types.IS_COMPLETE,
        payload: {
            id: id
        }
    })
}

export const filterHandler = filter => dispatch => {
    dispatch({
        type: Types.FILTER_HANDLER,
        payload: {
            filter: filter
        }
    })
}

export const handleSearch = (event) => dispatch => {
    dispatch({
        type: Types.HANDLE_SEARCH,
        payload: {
            search: event.target.value
        }
    })
}

export const searchResult = (searchResult) => dispatch => {
    dispatch({
        type: Types.SEARCH_RESULT,
        payload: {
            searchResult: searchResult
        }
    })
}