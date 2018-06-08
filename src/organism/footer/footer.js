import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fontSize } from 'utils';
import { color, space, themeGet } from 'styled-system';
import PropTypes from 'prop-types';
import { noStyleLink } from 'styles';
import { HiddenText, Icon } from 'atoms';
import { InlineForm } from 'molecules';

const FooterSectionTitle = styled.h4.attrs({
	fontSize: [0, 1],
	color: 'gray.medium',
	m: 0,
	mb: 2
})`
	${fontSize};
	${color};
	${space};
	font-weight: 700;
	letter-spacing: .03rem;
	text-transform: uppercase;
`;

const FooterLinkContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
`;

const FooterLink = styled(Link).attrs({
	pb: 1
})`
	${space};
	font-weight: 500;
`;

const FooterLinkSectionContainer = styled.div.attrs({
	mx: [-2, -3, -4]
})`
	${space};
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
`;

const FooterLinkSection = styled.div.attrs({
	my: [3, 2],
	mx: [2, 3, 4]
})`
	${space};
`;

const FooterContainer = styled.footer.attrs({
	bg: 'gray.light',
	p: [2, 4, 5]
})`


	${space};
	${color};
`;

const FooterBox = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: flex-start;

	& > header {
		flex: 1;
	}

	& > div {
		flex: 2 800px;
	}
`;

const FooterHeader = styled.header.attrs({
	m: [3, 2]
})`
	max-width: 300px;
	min-width: 150px;
	${space};
`;

const FooterLegal = styled.div.attrs({
	fontSize: 0,
	color: 'grey.medium',
	pt: 4
})`
	${fontSize};
	${color};
	${space};
	margin: 0 auto;
`;

const NoStyleLink = styled.a`
	${noStyleLink};
	display: inline-block;
	margin: 0 4px;
	flex: 1 50px;

	& > svg {
		color: ${themeGet('colors.gray.medium', '#717171')} !important;
	}

	&:hover > svg {
		color: ${themeGet('colors.primary.main', '#717171')} !important;
	}
`;

const FlexBox = styled.div`
	display: flex;
	flex-flow: row wrap;
`;

export default class Footer extends Component {
	renderSocial = () => this.props.social.map(x => (
		<NoStyleLink key={x.name} href={x.href} target="_blank" rel="noopener noreferrer">
			<HiddenText>{x.text}</HiddenText>
			<Icon name={x.name} aria-hidden />
		</NoStyleLink>
	))

	render() {
		const { imageAttributes, footerLinks, newsLetter, legal, social } = this.props;
		return (
			<FooterContainer>
				<FooterBox>
					<FooterHeader>
						<img {...imageAttributes} />
						<FlexBox>
							{this.renderSocial()}
						</FlexBox>
					</FooterHeader>
					<div>
						<FooterLinkSectionContainer>
							{footerLinks && (
								footerLinks.map((list, index) => (
									<FooterLinkSection key={index}>
										<FooterSectionTitle>{list.title}</FooterSectionTitle>
										<FooterLinkContainer>
											{list.links.map(item => (
												<FooterLink to={item.to} key={item.to}>
													{item.text}
												</FooterLink>
											))}
										</FooterLinkContainer>
									</FooterLinkSection>
								))
							)}
						</FooterLinkSectionContainer>
						{newsLetter && (
							<div>
								<FooterSectionTitle>{newsLetter.title}</FooterSectionTitle>
								<div style={{ paddingBottom: '8px' }}>{newsLetter.message}</div>
								<InlineForm
									onSubmit={newsLetter.onSubmit}
									buttonText={newsLetter.buttonAttributes.text}
									buttonAttributes={newsLetter.buttonAttributes}
									inputAttributes={newsLetter.inputAttributes}
								/>
							</div>
						)}
						<FooterLegal>{legal}</FooterLegal>
					</div>
				</FooterBox>
			</FooterContainer>
		);
	}
}
