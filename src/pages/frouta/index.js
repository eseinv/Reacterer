import React from 'react';
import { ProductList } from '../../product-list';
import { NavBar } from './nav-bar';
import fp from './images/fp.png';

const all = ProductList.map((product, index) => (
	<div key={index} className="col-4 text-justify">
		<div className="card">
			<img
				className="card-img-top w-25 mt-4 ml-4"
				src={fp}
				alt="Card cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{ProductList[index].name}</h5>
				<p className="card-text">{ProductList[index].info}</p>
			</div>
		</div>
	</div>
));

const Frouta = () => (
	<div>
		<NavBar />
		<div className="row container-fluid">{all}</div>
	</div>
);

export { Frouta };
