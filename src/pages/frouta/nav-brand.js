import React from 'react';
import styled from 'styled-components';
import fp from './images/fp.png';

const LogoWrap = styled.div`
	height: 80px;
	width: 60px;
	margin: 0 0 0 100px;
	display: inline-block;
	position: absolute;
`;

const FP = styled.img`
	height: 60.46px;
	width: 60px;
	display: inline-block;
	margin-top: 10px;
`;

const BrandDiv = styled.div`
	margin-left: 180px;
	display: inline-block;
	height: 80px;
	max-width: 290px;
	line-height: 0.8;
`;

const BrandName = styled.span`
	color: #fff;
	font-size: 35px;
	font-family: Amiri;
	font-style: italic;
	font-weight: bold;
	letter-spacing: 1.2px;
	display: inline-block;
	padding: 26px 0 0 0;
`;

const BrandPhrase = styled.span`
	color: #fff;
	font-size: 14px;
	display: inline-block;
	font-family: DejaVu Math TeX Gyre;
`;

const NavBrand = () => (
		<React.Fragment>
			<LogoWrap>
				<FP src={fp} />
			</LogoWrap>
			<BrandDiv>
				<BrandName> FARMA PALATIA </BrandName>
				<BrandPhrase> Εργαστήριο αποξηραμένων φρούτων </BrandPhrase>
			</BrandDiv>
		</React.Fragment>
	);

export { NavBrand };
