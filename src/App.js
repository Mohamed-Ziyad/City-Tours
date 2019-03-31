import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TouList';
import './App.scss';

class App extends Component {
	render() {
		return (
			<main>
				<TourList />
				<Navbar />
			</main>
		);
	}
}

export default App;
