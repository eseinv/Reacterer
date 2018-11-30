import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
	position: relative;
	color: ${props => (props.active === 'true' ? '#fff' : '#eee')};
	font-size: ${props => (props.active === 'true' ? '105%' : '100%')};
	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 3px;
		background: ${props =>
			props.active === 'true' ? 'white' : 'transparent'};
	}
	&:hover {
		color: #fff;
	}
	&:focus {
		box-shadow: none;
	}
`;

const NavItems = [
	{ name: 'Αρχική', link: '/frouta/' },
	{ name: 'Τιμοκατάλογος', link: '/frouta/pricelist' },
	{ name: 'Επικοινωνία', link: '/frouta/contact' },
];

const NavLi = () => (
	<div className="row h-100 align-items-center d-flex">
		<Button
			className="ml-3 btn"
			active={
				window.location.href === 'http://localhost:3000/frouta/'
					? 'true'
					: 'false'
			}
			to="/frouta/"
		>
			Αρχική
		</Button>

		<Button
			className="ml-3 btn"
			active={
				window.location.href === 'http://localhost:3000/frouta/'
					? 'true'
					: 'false'
			}
			to="/frouta/pricelist"
		>
			Τιμοκατάλογος
		</Button>

		<Button
			className="ml-3 btn"
			active={
				window.location.href === 'http://localhost:3000/frouta/'
					? 'true'
					: 'false'
			}
			to="/frouta/contact"
		>
			Επικοινωνία
		</Button>
	</div>
);

const NavList = () => <div className="row h-100">{NavLi}</div>;

export { NavLi };
