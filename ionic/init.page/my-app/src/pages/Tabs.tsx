import React from "react";

import { IonPage, IonTabs, IonTab, IonNav, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from "@ionic/react";
import { home, search, person } from "ionicons/icons";

import { Redirect, Route } from "react-router-dom";
import CardFeed from "./CardFeed";
import Search from "./Search";
import Profile from "./Profile";

import "./Tabs.css";

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/card-feed" />
        <Route path="/tabs/card-feed" render={() => <CardFeed />} exact={true} />
        <Route path="/tabs/search" render={() => <Search />} exact={true} />
        <Route path="/tabs/profile" render={() => <Profile />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tabs/card-feed">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/search">
          <IonIcon icon={search} />
          <IonLabel>Search</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tabs/profile">
          <IonIcon icon={person} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
