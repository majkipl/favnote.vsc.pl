import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import Heading from "components/atoms/Heading/Heading";
import Button from "components/atoms/Button/Button";
import LinkIcon from "assets/icons/link.svg";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { removeItem as removeItemAction } from "actions";
import withContext from "hoc/withContext";

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px 10px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : "white")};
  position: relative;

  :first-of-type {
    z-index: 9;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin: 0 0 5px;
`;

const StyleHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitters};
  position: absolute;
  right: 25px;
  top: 25px;
  border-radius: 50%;
`;

const StyledLinkButton = styled.a`
  width: 47px;
  display: block;
  height: 47px;
  border-radius: 50%;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 50%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const {
      id,
      pageContext,
      title,
      articleUrl,
      twitterName,
      content,
      removeItemProps,
    } = this.props;

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageContext}/${id}`} />;
    }

    return (
      <StyledWrapper>
        <InnerWrapper onClick={this.handleCardClick} activeColor={pageContext}>
          <StyleHeading>{title}</StyleHeading>
          {pageContext === "twitters" && (
            <StyledAvatar src={`https://unavatar.now.sh/${twitterName}`} />
          )}
          {pageContext === "articles" && <StyledLinkButton href={articleUrl} target="_blank" />}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <Button secondary onClick={() => removeItemProps(pageContext, id)}>
            REMOVE
          </Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  pageContext: PropTypes.oneOf(["notes", "twitters", "articles"]),
  title: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  removeItemProps: PropTypes.func.isRequired,
};

Card.defaultProps = {
  pageContext: "notes",
  twitterName: null,
  articleUrl: null,
};

const mapDispatchToProps = (dispatch) => ({
  removeItemProps: (itemTypeProps, idProps) => dispatch(removeItemAction(itemTypeProps, idProps)),
});

export default connect(null, mapDispatchToProps)(withContext(Card));
