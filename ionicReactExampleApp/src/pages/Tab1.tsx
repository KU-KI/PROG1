import React from "react";
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "./Tab1.css";
import Users from "../assets/input.json";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Local JSON Users list</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {Users.map((user) => (
            <IonItem key={user.empId}>
              <IonLabel>{user.empId}</IonLabel>
              <IonLabel>{user.empName}</IonLabel>
              <IonLabel>{user.deptName}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
