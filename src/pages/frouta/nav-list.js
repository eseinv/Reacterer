import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
	position: relative;
	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 3px;
		background: ${props => (props.underline ? 'white' : 'transparent')};
	}
	&:hover {
		color: #fff;
	}
`;

const Current = styled.span`
	color: ${props => (props.is ? '#fff' : '#000')};
	font-size: ${props => (props.is ? '105%' : '100%')};
	&:hover {
		color: ${props => (props.is ? '#fff' : '#eee')};
	}
`;

const NavItems = ['Αρχική', 'Τιμοκατάλογος', 'Επικοινωνία'];

const NavLi = NavItems.map((NavItem, index) => (
	<div key={index} className="d-flex h-100 align-items-center">
		<Button className="ml-3 btn" underline={index === 0}>
			<Current is={index === '0'}>{NavItem}</Current>
		</Button>
	</div>
));

const NavList = () => <div className="row h-100">{NavLi}</div>;

export { NavList };
