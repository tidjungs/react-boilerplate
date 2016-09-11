import { createStore } from 'redux'
import rootReducer from '../reducers'

export default () => {
	const store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension())

	if(module.hot) {
		System.import('../reducers').then(nextRootReducer =>
    		store.replaceReducer(nextRootReducer.default)
    	)
	}
	return store
}