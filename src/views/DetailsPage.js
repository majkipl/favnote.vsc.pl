import React, { Component } from "react";
import DetailsTemplate from "templates/DetailsTemplate";
import PropTypes from "prop-types";
import withContext from "hoc/withContext";
import { connect } from "react-redux";
import axios from "axios";
import { routes } from "../routes/index";

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        title: "",
        content: "",
        articleUrl: "",
        twitterName: "",
      },
    };
  }

  componentDidMount() {
    if (this.props.activeItem) {
      const [activeItem] = this.props.activeItem;

      this.setState({ activeItem });
    } else {
      const { id } = this.props.match.params;
      axios
        .get(`http://localhost:9000/api/note/${id}`)
        .then(({ data }) => {
          this.setState({ activeItem: data });
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    const { activeItem } = this.state;

    return (
      <>
        <DetailsTemplate
          title={activeItem.title}
          content={activeItem.content}
          twitterName={activeItem.twitterName}
          articleUrl={activeItem.articleUrl}
        />
      </>
    );
  }
}

DetailsPage.propTypes = {
  activeItem: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.pageContext);

  if (state[ownProps.pageContext]) {
    return {
      activeItem: state[ownProps.pageContext].filter(
        (item) => item._id === ownProps.match.params.id,
      ),
    };
  }

  return null;
};

export default withContext(connect(mapStateToProps)(DetailsPage));
