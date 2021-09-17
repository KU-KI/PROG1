import React from "react";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonSearchbar,
  IonContent,
  IonList,
  IonItem,
} from "@ionic/react";

import "./Search.css";

const Search = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonContent fullscreen>
          <IonList>
            <IonItem>Amsterdam</IonItem>
            <IonItem>Bogota</IonItem>
            <IonItem>Buenos Aires</IonItem>
            <IonItem>Cairo</IonItem>
            <IonItem>Dhaka</IonItem>
            <IonItem>Edinburgh</IonItem>
          </IonList>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Search;
