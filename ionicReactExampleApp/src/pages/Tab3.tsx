import React from "react";
import { IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { IonButton } from "@ionic/react";
import axios from "axios";
import "./Tab3.css";

const URL = "https://api.github.com/users/ku-ki/repos";
//const URL ="https://api.openweathermap.org/data/2.5/onecall?lat=49.01&lon=19.79&lang=sk&units=metric&appid=818410d880dcff6e70533861931d785d";
const fetchRepos = () => {
  return axios.get(URL).then((response) => {
    console.log(response);
    return response.data;
  });
};

const Tab3: React.FC = () => {
  const [repos, setRepos] = React.useState([]);
  // const items: any[] = [];
  React.useEffect(() => {
    fetchRepos().then((data) => setRepos(data));
  }, []);
  let por = 0;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Remote JSON Repositories</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList color="primary">
          {repos.map((a) => {
            return (
              <IonItem key={por++}>
                {a["name"]}
                <IonButton href={a["html_url"]} color="primary" slot="end">
                  Read
                </IonButton>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
