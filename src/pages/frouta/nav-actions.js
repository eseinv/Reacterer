import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import signIn from './icons/sign-in-alt-solid.svg';
import cart from './icons/shopping-cart-solid.svg';

const ActionIcon = styled.img`
	max-width: 25px;
`;

const NavActions = props => {
	if (props.user) {
		return <ActionIcon src={cart} alt="cart-icon" />;
	}
	return <ActionIcon src={signIn} alt="sign-in" />;
};

NavActions.propTypes = {
	user: PropTypes.bool,
};

export { NavActions };
