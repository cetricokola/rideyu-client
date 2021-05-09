import React from 'react';
import App from './App'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './store'
const store = configureStore({ reducer: rootReducer })

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
