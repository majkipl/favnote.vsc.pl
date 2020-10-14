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
    const dummyArticle = {
      id: 1,
      title: "My best note ever",
      content:
        "Born and raised in Illinois, Davis left his studies at the Juilliard School in New York City and made his professional debut as a member of saxophonist Charlie Parker's bebop quintet from 1944 to 1948. Shortly after, he recorded the Birth of the Cool sessions for Capitol Records, which were instrumental to the development of cool jazz. In the early 1950s, Miles Davis recorded some of the earliest hard bop music while on Prestige Records but did so haphazardly due to a heroin addiction. After a widely acclaimed comeback performance at the Newport Jazz Festival in 1955, he signed a long-term contract with Columbia Records and recorded the 1957 album 'Round About Midnight.[2] It was his first work with saxophonist John Coltrane and bassist Paul Chambers, key members of the sextet he led into the early 1960s. During this period, he alternated between orchestral jazz collaborations with arranger Gil Evans, such as the Spanish-influenced Sketches of Spain (1960), and band recordings, such as Milestones (1958) and Kind of Blue (1959).",
      twitterName: "hello_roman",
      articleUrl: "https://youtube.com/helloroman",
      created: "1 day",
    };

    const { pageType } = this.state;

    // console.log(notes);

    return (
      <>
        <DetailsTemplate
          pageType={pageType}
          title={dummyArticle.title}
          created={dummyArticle.created}
          content={dummyArticle.content}
          twitterName={dummyArticle.twitterName}
          articleUrl={dummyArticle.articleUrl}
        />
      </>
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default DetailsPage;
