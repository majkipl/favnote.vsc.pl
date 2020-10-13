import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import MainTemplate from "templates/MainTemplate";
import Notes from "views/Notes";
import Twitters from "views/Twitters";
import Articles from "views/Articles";

const Root = () => {
  return (
    <>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/notes" />} />
            <Route path="/notes" component={Notes} />
            <Route path="/articles" component={Articles} />
            <Route path="/twitters" component={Twitters} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </>
  );
};

export default Root;
