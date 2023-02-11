import {combineReducers, createStore} from 'redux'
import sideBar from './sidebars'
import toast from './toast'
const rootReducer = combineReducers({
  sideBar,
  toast,
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
