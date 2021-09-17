import React from "react";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  IonIcon,
  IonToggle,
} from "@ionic/react";
import {
  notificationsOutline,
  helpCircleOutline,
  informationCircleOutline,
  lockClosedOutline,
} from "ionicons/icons";

import "./Settings.css";

const Settings = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader>
            <IonLabel>Settings</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonIcon icon={notificationsOutline} slot="start" />
            <IonLabel>Enable notifications</IonLabel>
            <IonToggle slot="end" name="notifications"></IonToggle>
          </IonItem>
          <IonListHeader>
            <IonLabel>Support & Feedback</IonLabel>
          </IonListHeader>
          <IonItem detail>
            <IonIcon icon={notificationsOutline} slot="start" />
            <IonLabel>Contact Us</IonLabel>
          </IonItem>
          <IonItem detail>
            <IonIcon icon={helpCircleOutline} slot="start" />
            <IonLabel>Help</IonLabel>
          </IonItem>
          <IonItem detail>
            <IonIcon icon={informationCircleOutline} slot="start" />
            <IonLabel>About</IonLabel>
          </IonItem>
          <IonItem detail>
            <IonIcon icon={lockClosedOutline} slot="start" />
            <IonLabel>Privacy</IonLabel>
          </IonItem>
          <IonItem detail>
            <IonLabel>Log out</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
