import { combineReducers } from 'redux'
import pages from './pages'
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
	form: formReducer,
	pages
})