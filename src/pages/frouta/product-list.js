import React from 'react';
import styled from 'styled-components';
import { MainProductList } from '../../main-product-list';
import fp from './images/fp.png';

const ProductBorder = styled.div`
	border-radius: ${props => figureBorderRadius(props.i)};
	&:hover {
		cursor: pointer
		box-shadow: 1px 1px 5px 1px #587c34;
	}
`;

function figureBorderRadius(i) {
	let border;
	if (i === 0) {
		border = '15px 5px 5px 15px';
	} else if (i > 0 && i < ProductList.length - 1) {
		border = '5px 5px 5px 5px';
	} else if (i === ProductList.length - 1) {
		border = '5px 15px 15px 5px';
	}
	return border;
}

const ProductList = MainProductList.map((product, index) => (
	<div key={index} className="col-4 text-justify">
		<ProductBorder className="card" i={index}>
			<img
				className="card-img-top w-25 mt-4 ml-4"
				src={fp}
				alt={MainProductList[index].name}
			/>
			<div className="card-body">
				<h5 className="card-title">{MainProductList[index].name}</h5>
				<p className="card-text">{MainProductList[index].info}</p>
			</div>
		</ProductBorder>
	</div>
));

export { ProductList };
