import React from 'react';
import { ProductList } from '../../product-list';
import { NavBar } from './nav-bar';

const all = ProductList.map((product, index) => (
	<div key={index} className="col-4 text-justify">
		{ProductList[index].id} <br /> {ProductList[index].name} <br />
		{ProductList[index].info}
	</div>
));

const Frouta = () => (
	<React.Fragment>
		<NavBar />
		<div className="container">
			<div className="row mt-5">{all}</div>
		</div>
	</React.Fragment>
);

export { Frouta };
