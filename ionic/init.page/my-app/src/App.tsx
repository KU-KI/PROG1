import React from "react";

import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Tabs from "./pages/Tabs";
import Search from "./pages/Search";
import CardFeed from "./pages/CardFeed";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

import "@ionic/react/css/ionic.bundle.css";

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/welcome" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/tabs" render={() => <Tabs />} />
          <Route path="/search" component={Search} />
          <Route path="/card-feed" component={CardFeed} />
          <Route path="/profile" component={Profile} />
          <Route path="/settings" component={Settings} />
          <Route exact path="/" render={() => <Redirect to="/welcome" />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
