import React from "react";

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

import LandingPage from '../../landing-screen';
import SettingPage from "../../setting";


function BottomTabStack() {
  return (
    <Tab.Navigator
      // activeIndicatorStyle={{ backgroundColor: "#fff" }}
      barStyle={{ backgroundColor: '#FFF', }}>
      <Tab.Screen options={{
        title: "",
        tabBarIcon: ({ color, focused }) => (
          <MaterialCommunityIcons name="home" color={color} size={28} />
        ),
      }} name="LandingPage" component={LandingPage} />
      <Tab.Screen options={{
        title: '',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={28} />
        ),
      }} name="WebviewA" component={SettingPage} />
    </Tab.Navigator>
  );
}

export default BottomTabStack;