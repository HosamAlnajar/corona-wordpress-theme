import React from 'react';
import Nav from "./Nav";
import About from "./About";
import Posts from "./Posts";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostDetail from "./PostDetail";

function App() {
	return (
		<Router>
			<div className="corona-App">
				<Nav/>
					<switch>
						<Route path="/" exact component={Home} />
						<Route path="/about" component={About} />
						<Route path="/posts" component={Posts} />
						<Route path="/post/:id" component={ PostDetail } />
					</switch>
			</div>
		</Router>

	)
}


const Home = () => (
	<div>
		<h1>Home Page</h1>
	</div>
);
export default App;
