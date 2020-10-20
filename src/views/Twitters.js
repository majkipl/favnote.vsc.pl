import React, { Component } from "react";
import GridTemplate from "templates/GridTemplate";
import Card from "components/molecules/Card/Card";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchItems } from "actions";

class Twitters extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { fetchTwitters } = this.props;
    fetchTwitters();
  }

  render() {
    const { twitters } = this.props;

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
  }
}

// const Twitters = ({ twitters }) => {};

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      cardType: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
  fetchTwitters: PropTypes.func.isRequired,
};

Twitters.defaultProps = {
  twitters: [],
};

const mapStateToProps = (state) => {
  // destrukturyzujemy state
  const { twitters } = state;

  return { twitters }; // odpowiednik -> return{ twitters: twitters };
};

const mapDispatchToProps = (dispatch) => ({
  fetchTwitters: () => dispatch(fetchItems("twitters")),
});

export default connect(mapStateToProps, mapDispatchToProps)(Twitters);
