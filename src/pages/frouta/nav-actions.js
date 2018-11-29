import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import signIn from './icons/sign-in-alt-solid.svg';
import cart from './icons/shopping-cart-solid.svg';
import { SignInAltSolid } from './icons/sign-in-alt-solid';

const ActionIcon = styled.img`
	max-width: 25px;
`;

const NavActions = props => {
	if (props.user) {
		return <SignInAltSolid color="#373535" />;
	}
	return <SignInAltSolid color="#373535" />;
};

NavActions.propTypes = {
	user: PropTypes.bool,
};

export { NavActions };
