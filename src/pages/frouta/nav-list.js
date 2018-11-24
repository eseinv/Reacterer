import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
	display: inline-block;
	list-style-type: none;
	margin: 0 0 0 0;
	padding: 0 0 0 0;
`;

const Li = styled.li`
	display: inline;
	color: #fff;
	font-family: DejaVu Math TeX Gyre;
	font-size: 20px;
	margin-left: 10px;
`;

const NaviWrap = styled.div`
	display: inline-block;
	margin: 24.2px 0 0 30px;
	position: absolute;
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

const NavItems = ['Αρχική', 'Τιμοκατάλογος', 'Επικοινωνία'];

const NavLi = NavItems.map((item, key) => (
	<Li key={key}>
		{item} <Active />
	</Li>
));

const NavList = () => (
	<NaviWrap>
		<Ul>{NavLi}</Ul>
	</NaviWrap>
);

export { NavList };
