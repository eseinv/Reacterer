import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
	position: relative;
	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background: ${props => (props.underline ? 'white' : 'transparent')};
	}
`;

const NavItems = ['Αρχική', 'Τιμοκατάλογος', 'Επικοινωνία'];

const NavLi = NavItems.map((item, index) => (
	<div className="d-flex h-100 align-items-center">
		<Button className="ml-3 btn" underline={index === 0}>
			{item}
		</Button>
	</div>
));

const NavList = () => <div className="row h-100">{NavLi}</div>;

export { NavList };
