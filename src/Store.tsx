import { createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    )
    
    )
    
    export default store
    import rootReducer from './Reducers'