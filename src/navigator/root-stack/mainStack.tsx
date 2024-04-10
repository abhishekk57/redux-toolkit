import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { HomePage, WebViewScreen, MenuPage } from "../../screens";

const Stack = createNativeStackNavigator();

const MainStack: React.FC = () => {

    return (<Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen options={{ title: '', headerShown: false }} name="WebViewPage" component={WebViewScreen} />
        <Stack.Screen name="MenuPage" component={MenuPage} />
    </Stack.Navigator>);
};

export default MainStack;