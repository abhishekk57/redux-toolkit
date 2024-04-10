import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { ThemeContext } from "../../util/theme-wrapper";
function ActivityIndicatorView() {

    const { theme } = useContext(ThemeContext);
    return (<View style={styles.c}>
        <ActivityIndicator size={"large"} color={theme.colors.text}></ActivityIndicator>
    </View>);
}

const styles = StyleSheet.create({
    c: {
        width: "100%", justifyContent: "center",
        alignItems: "center"
    }
});

export { ActivityIndicatorView };