import React from 'react';
import styled from 'styled-components';
import { MainProductList } from '../../main-product-list';
import fp from './images/fp.png';

const ProductCard = styled.div`
	border-radius: 5px;
	&:hover {
		cursor: pointer
		box-shadow: 0 10px 30px 0 rgba(0,0,0,0.10);
	}
`;

const H5 = styled.h5`
	color: #707070;
`;

const P = styled.p`
	color: #707070;
`;
/* There's a few problems here.
1: no need for 'fucntion' keyword. It's bad practice mostly cuz you mispell it
2: You're checking 3 conditions when you should be checking two. Check what I did
3: Really important - always use arrow function unless you specifically need to
use `this` INSIDE the function, which shouldn't be THIS from the scope you're in.
It's almost never, so simply always use arrow functions
4: UI/UX wise, I don't think you should round products in a row differently.
Try adding 4 rows it'll look bad.
*/

const ProductList = MainProductList.map((product, index) => (
	<div key={index} className="col-4 text-justify p-3">
		<ProductCard className="card border-0" i={index}>
			<img
				className="card-img-top w-25 mt-4 ml-4"
				src={fp}
				alt={MainProductList[index].name}
			/>
			<div className="card-body">
				<H5 className="card-title">{MainProductList[index].name}</H5>
				<P className="card-text">{MainProductList[index].info}</P>
			</div>
		</ProductCard>
	</div>
));

/*
	One cool thing you can pass is a bool prop. Check this out:
	<ProductBorder className="card" i={i = ProductList.length - 1}>
	This will set props.i to TRUE when the condition is true, else {
	it'll be false. In this specific case, no need to use it, but it would
	eliminate the need for a function
	}
*/

export { ProductList };
