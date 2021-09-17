import React, { useState, ReactNode, useContext } from 'react'
import { IonItem, IonLabel, IonInput, IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react'
import { search } from 'ionicons/icons'
import axios from 'axios';
import { Context } from '../../../App';



function Search({ sendLocationtoParent }) {

    let locationContext = useContext(Context)

    // const [location, setLocation] = useState('')
    const [temp, setTemp] = useState()

    const search = (event) => {
        console.log(locationContext?.location)
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ locationContext?.location }&appid=761054a7adf90be0fd31535e2b0cbf31&units=metric`)
            .then(res => {
                console.log(res);
                setTemp(res.data.main.temp);
            })
        // sendLocationtoParent(location);
    }


    return (
        <div>
            <div className="ion-padding">
                <IonItem >
                    <IonLabel position="floating">Location</IonLabel>
                    <IonInput onIonChange={ e => locationContext?.setLocation(e.detail.value!) }></IonInput>
                </IonItem><br />
                <IonButton color="danger" onClick={ search }>Search</IonButton>
                { temp ? (<IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle>City - { locationContext?.location }</IonCardSubtitle>
                        <IonCardTitle>Temperature - { temp } °C</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        { locationContext }
                        Keep close to Nature's heart... and break clear away, once in awhile,
                        and climb a mountain or spend a week in the woods. Wash your spirit clean.
                    </IonCardContent>
                </IonCard>) : '' }

            </div>
        </div>
    )
}

export default Search