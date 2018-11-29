import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
	position: relative;
	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 3px;
		background: ${props =>
			props.underline === 'true' ? 'white' : 'transparent'};
	}
	&:hover {
		color: #fff;
	}
	&:focus {
		box-shadow: none;
	}
`;

const Current = styled.span`
	color: ${props => (props.active ? '#fff' : '#eee')};
	font-size: ${props => (props.active ? '105%' : '100%')};
	&:hover {
		color: ${props => (props.active ? '#fff' : '#fff')};
	}
`;

const NavItems = [
	{ name: 'Αρχική', link: '/frouta/1' },
	{ name: 'Τιμοκατάλογος', link: '/frouta/2' },
	{ name: 'Επικοινωνία', link: '/frouta/3' },
];

const NavLi = NavItems.map((item, index) => (
	<div key={index} className="d-flex h-100 align-items-center">
		<Button
			className="ml-3 btn"
			underline={index === 0 ? 'true' : 'false'}
			to={item.link}
		>
			<Current active={index === 0}>{item.name}</Current>
		</Button>
	</div>
));

const NavList = () => <div className="row h-100">{NavLi}</div>;

export { NavList };
