import { createStore, combineReducers } from "redux"
import sampleReducer from "./sampleRedux/reducers"
import loadingReducer from "./progressLoadPage/reducers"

const reducers = combineReducers({
  sampleReducer,
  loadingReducer
})

function configureStore(state = {}) {
  return createStore(reducers, state)
}

export default configureStore
