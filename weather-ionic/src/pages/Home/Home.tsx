import React, { useState } from 'react'
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton } from '@ionic/react'
import { IonItem, IonLabel, IonInput, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react'
import './Home.css'
import axios from 'axios';

function Home({ sendLocationtoParent }) {
    const [location, setLocation] = useState('')
    const [temp, setTemp] = useState(null)
    const [weatherData, setweatherData] = useState('')

    const search = () => {
        /* axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ location }&appid=761054a7adf90be0fd31535e2b0cbf31&units=metric`)
            .then(res => {
                console.log(res);
                setweatherData(res.data.name);
                setTemp(res.data.main.temp);
                console.log(res.data.main.temp);
                console.log(weatherData);
                console.log(temp);
                sendLocationtoParent(res.data);
            }) */
        sendLocationtoParent(location);
    }

    return (
        <div>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton />
                        </IonButtons>
                        <IonTitle>{ temp ? location : 'Home' }</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <div className="ion-padding">
                        <IonItem >
                            <IonLabel position="floating">Location</IonLabel>
                            <IonInput onIonChange={ e => setLocation(e.detail.value!) }></IonInput>
                        </IonItem><br />
                        <IonButton color="danger" routerLink='/Temperature' onClick={ search }>Search</IonButton>
                        { temp ? (<IonCard>
                            <IonCardHeader>
                                <IonCardSubtitle>City - { location }</IonCardSubtitle>
                                <IonCardTitle>Temperature - { temp } °C</IonCardTitle>
                            </IonCardHeader>

                            <IonCardContent>
                                Keep close to Nature's heart... and break clear away, once in awhile,
                                and climb a mountain or spend a week in the woods. Wash your spirit clean.
                    </IonCardContent>
                        </IonCard>) : '' }
                    </div>
                </IonContent>
            </IonPage>
        </div>
    )
}

export default Home
