import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import './Page.css';

/* Components */
import Home from '../pages/Home/Home';

const Page: React.FC = () => {
    const [location, setLocation] = useState('')

    const handler = (locationChild) => {
        setLocation(locationChild)
    }

    const { name } = useParams<{ name: string; }>();

    return (
        <IonPage>
            <IonHeader  >
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{ name }</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <Home sendLocationtoParent={ handler } />
            </IonContent>
        </IonPage>
    );
};

export default Page;
