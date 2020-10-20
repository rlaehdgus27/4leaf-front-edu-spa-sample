import React from "react";
import { Route } from "react-router-dom";
import MM00 from "../Screens/UsersScreen/MM00";
import MM01 from "../Screens/UsersScreen/MM01";
import MM02 from "../Screens/UsersScreen/MM02";
import MM03 from "../Screens/UsersScreen/MM03";

const Contents = () => {
  return (
    <main className="Contents">
      <Route exact path="/" component={MM00} />
      <Route exact path="/page1" component={MM01} />
      <Route exact path="/page2" component={MM02} />
      <Route exact path="/page3" component={MM03} />
    </main>
  );
};

export default Contents;
