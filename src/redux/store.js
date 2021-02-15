import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import tableReducer from './tableReducer';
import appReducer from './appReducer';
import thunk from "redux-thunk";


const rootReducer = combineReducers({
  tableData: tableReducer,
  app: appReducer
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ));

export default store;