import styled from 'styled-components';

const SocialMediaWrapper = styled.div`
	margin: auto;
	padding: 10px;
	text-align: center;
	width: 100%;

	&.mainMenuLogoWrapper {
		display: none;
		margin: 0;

		@media only screen and (min-width: 768px) {
			display: inline-block;
			float: right;
			margin: 0;
			padding: 0;
			width: auto;
		}
	}
`;

const Logo = styled.i`
	color: #000;
	font-size: 20px;
	transition: color 1s;

	:hover {
		color: #5fccdc;
	}

	&.footerLogo {
		color: #bbb;

		:hover {
			color: #000;
		}
	}
`;

const LogoA = styled.a`
	display: inline-block;
	margin: 0 7px;
	padding: 0 7px;

	:first-child {
		margin: 0 7px 0 0;
	}

	:last-child {
		margin: 0 0 0 7px;
	}

	@media only screen and (min-width: 576px) {
		margin: 0 15px;
		padding: 0 15px;

		:first-child {
			margin: 0 15px 0 0;
		}
	
		:last-child {
			margin: 0 0 0 15px;
		}
	}
`;

export {
  SocialMediaWrapper,
  Logo,
  LogoA
};