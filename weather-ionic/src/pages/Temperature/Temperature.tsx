import React, { useEffect, useState } from 'react'
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/react'
import './Temperature.css'
import axios from 'axios';

function Temperature(props) {
    const [temp, setTemp] = useState()
    const [main, setMain] = useState()
    const [humidity, setHumidity] = useState()
    const [weatherData, setweatherData] = useState()

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ props.location }&appid=761054a7adf90be0fd31535e2b0cbf31&units=metric`)
            .then(res => {
                console.log(res);
                setTemp(res.data.main.temp);
                setHumidity(res.data.main.humidity);
                setMain(res.data.weather[0].main);
            })
    })

    return (
        <div> <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Temp</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="background">
                <div className="location">{ props.location.toUpperCase() }</div>
                <div className="temp"> { temp }°C</div>
                <div className="temp"> { main }</div>
                <div className="temp"> { humidity }</div>

            </IonContent>
        </IonPage>

        </div>
    )
}

export default Temperature
