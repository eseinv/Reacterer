import React from 'react';
import styled from 'styled-components';
import { MainProductList } from '../../product-list';
import fp from './images/fp.png';

const ProductLeft = styled.div`
	border-radius: ${props => (props.i === 0 ? '15px 5px 5px 15px' : '')};
	border-radius: ${props =>
		props.i > 0 && props.i < ProductList.length - 1
			? '5px 5px 5px 5px'
			: ''};
	border-radius: ${props =>
		props.i === ProductList.length - 1 ? '5px 15px 15px 5px' : ''};
`;

const ProductList = MainProductList.map((product, index) => (
	<div key={index} className="col-4 text-justify">
		<ProductLeft className="card" i={index}>
			<img
				className="card-img-top w-25 mt-4 ml-4"
				src={fp}
				alt="Card cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{MainProductList[index].name}</h5>
				<p className="card-text">{MainProductList[index].info}</p>
			</div>
		</ProductLeft>
	</div>
));

export { ProductList };
