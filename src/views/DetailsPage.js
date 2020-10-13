import React, { Component } from "react";
import DetailsTemplate from "templates/DetailsTemplate";
import PropTypes from "prop-types";
import { routes } from "../routes/index";

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageType: "notes",
    };
  }

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.twitter:
        this.setState({ pageType: "twitters" });
        break;
      case routes.note:
        this.setState({ pageType: "notes" });
        break;
      case routes.article:
        this.setState({ pageType: "articles" });
        break;
      default:
        console.log("Something went wrong with matching paths");
    }
  }

  render() {
    const { pageType } = this.state;

    return (
      <>
        <DetailsTemplate pageType={pageType}>
          <p>{pageType}</p>
        </DetailsTemplate>
      </>
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default DetailsPage;
