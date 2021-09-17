import React from "react";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { cogOutline } from "ionicons/icons";

import "./Profile.css";

const Profile = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>@ionitron</IonTitle>
          <IonButtons slot="end">
            <IonButton fill="clear">
              <IonIcon icon={cogOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="avatar">
          <img src="https://avatars1.githubusercontent.com/u/6591344?s=460&u=043e4ecae76df7e50ff1ae5b223fa6d182ec76f1&v=4" />
        </div>
        <div className="info">
          <h2>Ionitron</h2>
          <p>A very cool robot</p>
        </div>
        <hr />
        <div>
          <h3 className="ion-padding">Posts</h3>
          <IonGrid>
            <IonRow>
              <IonCol>
                <div className="post"></div>
              </IonCol>
              <IonCol>
                <div className="post"></div>
              </IonCol>
              <IonCol>
                <div className="post"></div>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <div className="post"></div>
              </IonCol>
              <IonCol>
                <div className="post"></div>
              </IonCol>
              <IonCol>
                <div className="post"></div>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <div className="post"></div>
              </IonCol>
              <IonCol>
                <div className="post"></div>
              </IonCol>
              <IonCol>
                <div className="post"></div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
