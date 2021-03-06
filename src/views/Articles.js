import React from "react";
import GridTemplate from "templates/GridTemplate";
import Card from "components/molecules/Card/Card";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Articles = ({ articles }) => {
  return (
    <>
      <GridTemplate pageType="articles">
        {articles.map(({ title, content, created, articleUrl, id }) => (
          <Card
            cardType="articles"
            title={title}
            content={content}
            articleUrl={articleUrl}
            created={created}
            key={id}
            id={id}
          />
        ))}
      </GridTemplate>
    </>
  );
};

const mapStateToProps = (state) => {
  const { articles } = state;

  return { articles };
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      cardType: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

export default connect(mapStateToProps)(Articles);
