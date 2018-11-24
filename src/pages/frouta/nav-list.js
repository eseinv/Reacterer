import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
	display: inline-block;
	list-style-type: none;
	margin: 0 0 0 0;
	padding: 0 0 0 0;
`;

const Li = styled.li`
	display: inline-block;
	color: #fff;
	font-family: DejaVu Math TeX Gyre;
	font-size: 20px;
	margin-left: 10px;
`;

const Active = styled.span`
	border: 1px solid #fff;
	position: absolute;
	bottom: -1px;
	height: 4px;
	right: 0;
	left: 0;
	background: #fff;
	margin-left: 10px;
`;
const Current = styled.a`
	position: relative;
	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 3px;
		background: ${props => (props.underline ? 'red' : 'transparent')};
	}
`;

const Span = styled.span`
	position: relative;
`;
const NavItems = ['Αρχική', 'Τιμοκατάλογος', 'Επικοινωνία'];

const NavLi = NavItems.map((item, index) => (
	<div className="col-2 text-center mt-4" key={index}>
		<Current underline={index === 0}>{item}</Current>
	</div>
));

const NavList = () => <div className="row">{NavLi}</div>;

export { NavList };
