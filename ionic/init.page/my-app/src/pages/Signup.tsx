import React from "react";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/react";

import "./Signup.css";

const Signup = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign up</IonTitle>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <img
          className="logo"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8ZyBpZD0iTGF5ZXJfMSI+Cgk8Zz4KCQk8cGF0aCBmaWxsPSIjNEE4QUY5IiBkPSJNMjU2LDEzOS4zYy02NC4zLDAtMTE2LjcsNTIuMy0xMTYuNywxMTYuN2MwLDY0LjMsNTIuMywxMTYuNywxMTYuNywxMTYuN1MzNzIuNywzMjAuMywzNzIuNywyNTYKCQkJQzM3Mi43LDE5MS43LDMyMC4zLDEzOS4zLDI1NiwxMzkuM3oiLz4KCQk8Zz4KCQkJPGNpcmNsZSBmaWxsPSIjNEE4QUY5IiBjeD0iNDIzLjUiIGN5PSI5Ni41IiByPSI1My4yIi8+CgkJPC9nPgoJCTxwYXRoIGZpbGw9IiM0QThBRjkiIGQ9Ik00ODksMTQ5LjlsLTIuMi00LjlsLTMuNiw0Yy04LjcsOS45LTE5LjgsMTcuNS0zMi4xLDIyLjFsLTMuNCwxLjNsMS40LDMuM2MxMC42LDI1LjUsMTYsNTIuNSwxNiw4MC4yCgkJCWMwLDExNS4zLTkzLjgsMjA5LjItMjA5LjIsMjA5LjJTNDYuOCwzNzEuMyw0Ni44LDI1NlMxNDAuNyw0Ni44LDI1Niw0Ni44YzMxLjMsMCw2MS41LDYuOCw4OS42LDIwLjJsMy4zLDEuNmwxLjQtMy4zCgkJCWM1LjEtMTIsMTMuMy0yMi43LDIzLjYtMzFsNC4yLTMuNGwtNC44LTIuNUMzMzYuOCw5LjYsMjk3LjMsMCwyNTYsMEMxMTQuOCwwLDAsMTE0LjgsMCwyNTZjMCwxNDEuMiwxMTQuOCwyNTYsMjU2LDI1NgoJCQlzMjU2LTExNC44LDI1Ni0yNTZDNTEyLDIxOS4xLDUwNC4zLDE4My40LDQ4OSwxNDkuOXoiLz4KCTwvZz4KPC9nPgo8ZyBpZD0iTGF5ZXJfMiI+CjwvZz4KPGcgaWQ9IkxheWVyXzMiPgo8L2c+Cjwvc3ZnPgo="
        />
        <form>
          <IonList>
            <IonItem>
              <IonLabel>Name</IonLabel>
              <IonInput type="text"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Email</IonLabel>
              <IonInput type="email"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Password</IonLabel>
              <IonInput type="password"></IonInput>
            </IonItem>
          </IonList>
        </form>
        <div className="buttons">
          <IonButton expand="block" href="/home">
            Sign up
          </IonButton>
          <IonButton color="light" expand="block" href="/login">
            Already have an account?
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
