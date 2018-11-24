import React from 'react';
import styled from 'styled-components';
import { NavList } from './nav-list';
import { NavBrand } from './nav-brand';

const Nav = styled.nav`
	background-color: #587c34;
	height: 80px;
`;

const NavBar = () => (
	<Nav>
		<NavBrand />
		<NavList />
	</Nav>
);

export { NavBar };
