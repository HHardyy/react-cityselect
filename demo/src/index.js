import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { 
    BrowserRouter,
    Route 
} from 'react-router-dom'
import { city } from './citySelect.redux'
import CitySelect from './cityselect.js'
const store=createStore(city)
ReactDOM.render(
	(
		 <Provider store={store}>
            <BrowserRouter>
            <div>
                <Route path="/" exact component={ App } ></Route>
                <Route path="/selectcity" component={ CitySelect }></Route>
            </div>
        </BrowserRouter>
        </Provider>
	)
	, document.getElementById('root'));
serviceWorker.unregister();

