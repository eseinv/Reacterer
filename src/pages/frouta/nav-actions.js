import React from 'react';
import PropTypes from 'prop-types';

import { SignInAltSolid } from './icons/sign-in-alt-solid';

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
