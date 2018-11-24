import React from 'react';
import { ProductList } from '../../product-list';
import { NavBar } from './nav-bar';

const all = ProductList.map((product, index) => (
	<div key={index} className="col-4">
		{ProductList[index].id} <br /> {ProductList[index].name} <br />
		{ProductList[index].info}
	</div>
));

const Frouta = () => (
	<React.Fragment>
		<NavBar />
		<div className="row  text-justify mt-5 p-5">{all}</div>
	</React.Fragment>
);

export { Frouta };
