import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
	H3,
	LinkWrapper,
	Subtitle,
	SmallArticleImage,
	SmallArticleImageContainer,
	ArticleDescription as ArticleFooter,
	ArticleHeader,
	SmallArticleContainer,
	SmallArticleBody
} from 'atoms';
import { renderFooter as buildFooter } from 'utils';

export default class ArticleCardSmall extends Component {
	static propTypes = {
		article: PropTypes.shape({
			title: PropTypes.string.isRequired,
			subtitle: PropTypes.string,
			subtitleLink: PropTypes.string,
			description: PropTypes.string,
			children: PropTypes.node,
			to: PropTypes.string,
			imageAttributes: PropTypes.shape({
				src: PropTypes.string.isRequired,
				alt: PropTypes.string.isRequired,
				isLeft: PropTypes.bool
			})
		}),
		renderFooter: PropTypes.func,
		footerProps: PropTypes.array
	};

	renderTitle = ({ article: { to, title } = {} }) => (
		<LinkWrapper to={to}>
			<H3 fontSize={[0, 2, 2]} fontWeight="bold" mb={0}>
				{title}
			</H3>
		</LinkWrapper>
	);

	renderSubtitle = ({ article: { subtitleLink, subtitle } = {} }) => (
		<LinkWrapper to={subtitleLink}>
			<Subtitle fontSize={0} is="div">
				{subtitle}
			</Subtitle>
		</LinkWrapper>
	);

	renderImage = ({ article: { imageAttributes, to } = {} }) => {
		const LinkWrapperStyled = styled(LinkWrapper)`
			order: -1;
		`;
		return (
			<LinkWrapperStyled to={to}>
				<SmallArticleImageContainer>
					<SmallArticleImage {...imageAttributes} />
				</SmallArticleImageContainer>
			</LinkWrapperStyled>
		);
	};

	renderFooterSection = ({ footerProps, article, renderFooter }) => {
		if (!renderFooter || !footerProps) return null;
		return <ArticleFooter>{buildFooter(footerProps, article, renderFooter)}</ArticleFooter>;
	};

	render = () => {
		const { article: { title, subtitle } = {}, renderFooter, footerProps, ...attrs } = this.props;

		return (
			<SmallArticleContainer {...attrs}>
				<SmallArticleBody>
					<ArticleHeader>
						{title && this.renderTitle(this.props)}
						{subtitle && this.renderSubtitle(this.props)}
					</ArticleHeader>
					{this.renderFooterSection(this.props)}
				</SmallArticleBody>
				{this.renderImage(this.props)}
			</SmallArticleContainer>
		);
	};
}