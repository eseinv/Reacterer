import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SignInAltSolid } from './icons/sign-in-alt-solid';

const Button = styled.div`
	color: #373535;
	&:hover {
		color: #fff;
	}
`;

const NavActions = props => {
	if (props.user) {
		return (
			<Button>
				<SignInAltSolid color="currentColor" />
				<span>Log in</span>
			</Button>
		);
	}
	return <SignInAltSolid color="#373535" />;
};

NavActions.propTypes = {
	user: PropTypes.bool,
};

export { NavActions };
