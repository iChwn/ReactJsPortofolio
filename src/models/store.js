import { createStore, combineReducers } from "redux"
import sampleReducer from "./sampleRedux/reducers"

const reducers = combineReducers({
  sampleReducer
})

function configureStore(state = {}) {
  return createStore(reducers, state)
}

export default configureStore
