import React from 'react';
import styled from 'styled-components';
import { NavList } from './nav-list';
import { NavBrand } from './nav-brand';

const Nav = styled.nav`
	background-color: #587c34;
	height: 80px;
`;

const NavBar = () => (
	<div className="container-fluid">
		<Nav className="row">
			<div className="col-4">
				<NavBrand />
			</div>
			<div className="col-8">
				<NavList />
			</div>
		</Nav>
	</div>
);

export { NavBar };
