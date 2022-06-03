import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import contactReducer from '../redux/contact/contactReducer'

const rootReducer = combineReducers({
    contactReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store