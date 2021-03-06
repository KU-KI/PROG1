import Menu from './components/Menu';
import React, { useState } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Home from './pages/Home/Home';
import Temperature from './pages/Temperature/Temperature';

interface AppContextInterface {
    location: any,
    setLocation: any
}


export const Context = React.createContext<AppContextInterface | null>(null);

const App: React.FC = () => {
    const [location, setLocation] = useState('')
    const [weatherData, setweatherData] = useState('')

    const handler = (location) => {
        setLocation(location)
        console.log('location =>', location);
    }

    return (
        <IonApp>
            <IonReactRouter>
                <IonSplitPane contentId="main">
                    <Menu />

                    <IonRouterOutlet id="main">
                        <Route path="/Home" render={ () => <Home sendLocationtoParent={ handler } /> } exact />
                        <Route path="/Temperature" render={ () => <Temperature location={ location } /> } exact />
                        <Redirect from="/" to="/Home" exact />
                    </IonRouterOutlet>

                </IonSplitPane>
            </IonReactRouter>
        </IonApp>
    );
};

export default App;
