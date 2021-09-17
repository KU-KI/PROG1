import React from "react";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonContent,
  IonSlides,
  IonSlide,
} from "@ionic/react";

import "./Welcome.css";

const Welcome = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome</IonTitle>
          <IonButtons slot="end">
            <IonButton href="/login">Skip</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSlides>
          <IonSlide>
            <img src="https://init.page/img/templates/slides/slide1.png" />
            <h1>Welcome</h1>
            <p>This app is really nice, I think you'll love it</p>
          </IonSlide>
          <IonSlide>
            <img src="https://init.page/img/templates/slides/slide2.png" />
            <h1>How to use the app</h1>
            <p>Tap the buttons and navigate around</p>
          </IonSlide>
          <IonSlide>
            <img src="https://init.page/img/templates/slides/slide4.png" />
            <h1>Get Started</h1>
            <p>Tap the button to begin.</p>
            <IonButton href="/tabs">Get Started</IonButton>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
