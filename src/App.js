import React from 'react';
import {Route ,Switch} from 'react-router-dom'

import Home from './routes/home'
import Login from './routes/login'
import Signup from './routes/signup'
import Root from './routes/root'

import './App.css';

const App = () => {
	return(
		<div>
			<Switch>
				<Route exact path="/" component={Root} />
				<Route path="/home" component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} /> 
			</Switch>
		</div>
	)
}

export default App;
