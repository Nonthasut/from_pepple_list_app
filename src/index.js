import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import ListFormState from './store/reducer/ListFormState'
import NameListFormState from './store/reducer/NameListState'
import AgeListFormState from './store/reducer/AgeListState'

const rootReducer = combineReducers({
  ppList : ListFormState,
  ppNameList : NameListFormState,
  ppAgeList: AgeListFormState
})

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
  ,
  document.getElementById('root')
);
