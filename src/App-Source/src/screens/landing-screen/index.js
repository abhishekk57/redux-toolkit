import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { styles } from '../../util/constant';
import { ThemeContext } from '../../util/theme-wrapper';

function LandingPage({ navigation }) {


    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => { }, []);


    const navigateToPage1 = () => {
        navigation.navigate('HomePage');
    }
    const navigateToPage2 = () => {
        navigation.navigate('WebviewB');
    }
    const navigateToPage3 = () => {
        navigation.navigate('Logs');
    }

    return (<View style={[cStyle.container, {backgroundColor:theme.colors.background}]}>
        <Pressable style={[styles.buttonStyle]} onPress={() => { navigateToPage1(); }}>
            <Text style={[cStyle.textStyle,{color: theme.colors.text}]}>{'WebView PageA'}</Text>
        </Pressable>
        <Pressable style={[styles.buttonStyle]} onPress={() => { navigateToPage2(); }}>
            <Text style={[cStyle.textStyle,{color: theme.colors.text}]}>{'WebView PageB'}</Text>
        </Pressable>
        <Pressable style={[styles.buttonStyle]} onPress={() => { navigateToPage3(); }}>
            <Text style={[cStyle.textStyle,{color: theme.colors.text}]}>{'Logs'}</Text>
        </Pressable>
    </View>)
}

export default LandingPage;

LandingPage.propTypes = {
    navigation: PropTypes.object.isRequired,
};

const cStyle = StyleSheet.create({
    textStyle: { fontSize: 16, letterSpacing: 1, fontWeight: "700" },
    container: {
        flex: 1, justifyContent: "center", alignItems: "center",
        backgroundColor: "#006899"
    }
});