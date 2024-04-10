import React from "react";
import { Provider } from 'react-redux'
import { store } from "./redux";
import { NavigationContainer } from '@react-navigation/native';

import { MainStack } from "./navigator";

const AppRoutes: React.FC = () => {
    return (<NavigationContainer>
        <Provider store={store}>
            <MainStack />
        </Provider>
    </NavigationContainer>)
}

export default AppRoutes;