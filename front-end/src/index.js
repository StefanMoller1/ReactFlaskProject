import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
	// reducer, /* preloadedState, */
  	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  	applyMiddleware(thunk)
)

ReactDOM.render(
  	<Provider store={store}>
    	<App />
  	</Provider>,
  	document.getElementById('root')
)

registerServiceWorker();
