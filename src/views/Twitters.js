import React from "react";
import GridTemplate from "templates/GridTemplate";
import Card from "components/molecules/Card/Card";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Twitters = ({ twitters }) => {
  return (
    <>
      <GridTemplate pageType="twitters">
        {twitters.map(({ title, content, created, twitterName, id }) => (
          <Card
            cardType="twitters"
            title={title}
            content={content}
            twitterName={twitterName}
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
  // destrukturyzujemy state
  const { twitters } = state;

  return { twitters }; // odpowiednik -> return{ twitters: twitters };
};

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Twitters);
