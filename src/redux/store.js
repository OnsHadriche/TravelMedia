import { applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers/rootReducer'
import { configureStore } from '@reduxjs/toolkit'



export const store = configureStore({reducer: rootReducer}, composeWithDevTools(applyMiddleware(thunk)))
