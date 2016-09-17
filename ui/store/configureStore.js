import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import rootReducer from '../reducers'

export default () => {
  const middlewares = [thunk, apiMiddleware]
  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  )
  
	if (module.hot) {
    	module.hot.accept('../reducers', () => {
      		System.import('../reducers').then(nextRootReducer =>
        		store.replaceReducer(nextRootReducer.default)
      		)
    	})
  	}

	return store
}