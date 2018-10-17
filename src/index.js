import React from 'react'
import ReactDom from 'react-dom'
import App from './App.js'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducer'
import { receiveDataSuccess } from './actions'
const { FETCH_CHARA } = require('./socketEvent')

const logger = createLogger({
    diff:true,
    collapsed:true,
})

const store = createStore(
    rootReducer,
    applyMiddleware(logger)
)

const render = () => {
    ReactDom.render(
        <App store={store}/>,
        document.getElementById('container')
    )
}

socket.on(FETCH_CHARA, (arr) => {
    store.dispatch(receiveDataSuccess(arr))
})

store.subscribe(() => { render() })

render()