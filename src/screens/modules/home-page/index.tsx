import React, { useState } from "react";
import { View, ActivityIndicator, Alert } from "react-native";
import { WebView } from "react-native-webview";

const WebViewScreen: React.FC = () => {

    const [loading, setLoading] = useState(true);

    return (<View style={{ flex: 1 }}>
        {loading && <ActivityIndicator size="large" color="#00ff00" />}
        {<WebView
            onNavigationStateChange={(navState: any) => {
                console.log(navState);
                if (navState.url === 'https://reactnative.dev/') {
                    Alert.alert('Do you want to navigate below url - https://reactnative.dev/');
                }
            }}
            source={{ uri: 'https://reactnative.dev/' }}
            onLoadEnd={(syntheticEvent: any) => {
                const { nativeEvent } = syntheticEvent;
                setLoading(nativeEvent.loading);
            }}
            onLoadStart={(syntheticEvent: any) => {
                const { nativeEvent } = syntheticEvent;
                setLoading(nativeEvent.loading);
            }}
            useWebView2={true} 
            style={{ flex: 1 }} />}
    </View>);
}

export default WebViewScreen;