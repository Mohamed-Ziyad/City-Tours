import React, { Component } from 'react';
import Tour from '../Tour/Tour';
import './TourList.scss';
import { tourData } from './tourData';

class TourList extends Component {
	state = {
		tours: tourData,
	};
	render() {
		console.log(this.state.tours);

		const { tours } = this.state;

		return (
			<section className="tourlist">
				{tours.map(tour => {
					return <Tour key={tour.id} tour={tour} />;
				})}
			</section>
		);
	}
}

export default TourList;
