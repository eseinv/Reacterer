import React from 'react';
import styled from 'styled-components';

const Current = styled.a`
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
	<div className="col-2 text-center mt-4" key={index}>
		<Current underline={index === 0}>{item}</Current>
	</div>
));

const NavList = () => <div className="row">{NavLi}</div>;

export { NavList };
