import React, { useEffect, useRef, useState, useContext } from "react";
import { Switch, SafeAreaView, ScrollView, View, Text } from "react-native";

import PropTypes from 'prop-types';
import { EventRegister } from 'react-native-event-listeners';

import { ThemeContext } from '../../util/theme-wrapper';

function SettingPage({ route, navigation }) {

    const [isEnabled, setIsEnabled] = useState(false);
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [isBottomOpen, setBottomOpen] = useState(false);
    const listener = useRef(null);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const toggleSwitch = () => {
        toggleTheme();
        setIsEnabled((previousState) => !previousState);
    };

    const openDrawerMenu = () => {
        setDrawerOpen(true);
        setBottomOpen(false);
        EventRegister.emit('root', "drawertab");
    }
    const openBottomTabMenu = () => {
        setDrawerOpen(false);
        setBottomOpen(true);
        EventRegister.emit('root', "bottomtab");
    }

    useEffect(() => {
        return () => {
            EventRegister.removeEventListener(listener.current)
        }
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <ScrollView style={{ flex: 1, padding: 20 }}>
                <View style={{ elevation: 7, backgroundColor: "#CCC" }}>
                    <View style={{
                        flex: 1, height: 65,
                        backgroundColor: theme.colors.viewBg, margin: 10, justifyContent: 'space-between',
                        flexDirection: "row", borderRadius: 26
                    }}>
                        <Text style={{
                            width: 'auto', color: theme.colors.text,
                            paddingTop: 20, paddingLeft: 20
                        }}>{"Change Theme"}</Text>
                        <Switch
                            style={{ width: 100, marginRight: 20 }}
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor="#f5dd4b"
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>

                    <View style={{
                        flex: 1, height: 65,
                        backgroundColor: theme.colors.viewBg, margin: 10, justifyContent: 'space-between',
                        flexDirection: "row", borderRadius: 26
                    }}>
                        <Text style={{
                            width: 'auto', color: theme.colors.text,
                            paddingTop: 20, paddingLeft: 20
                        }}>{"Open Drawer Menu"}</Text>
                        <Switch
                            style={{ width: 100, marginRight: 20 }}
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor="#f5dd4b"
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={openDrawerMenu}
                            value={isDrawerOpen}
                        />
                    </View>


                    <View style={{
                        flex: 1, height: 65,
                        backgroundColor: theme.colors.viewBg, margin: 10, justifyContent: 'space-between',
                        flexDirection: "row", borderRadius: 26
                    }}>
                        <Text style={{
                            width: 'auto', color: theme.colors.text,
                            paddingTop: 20, paddingLeft: 20
                        }}>{"Open Bottom Tab Menu"}</Text>
                        <Switch
                            style={{ width: 100, marginRight: 20 }}
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor="#f5dd4b"
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={openBottomTabMenu}
                            value={isBottomOpen}
                        />
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SettingPage;

SettingPage.propTypes = {
    navigation: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};