import React from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
	return (
		<>
			<Router>
				<Header />
				<main className='py-3'>
					<Container>
						<Route path='/product/:id' component={withRouter(ProductScreen)} />
						<Route exact path='/' component={withRouter(HomeScreen)} />
					</Container>
				</main>
				<Footer />
			</Router>
		</>
	);
};

export default App;
