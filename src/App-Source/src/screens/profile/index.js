import React, { useRef, useEffect, useContext } from "react";
import { View, SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';

import { webUrl1, webUrl2 } from "../../util/constant";
import { ThemeContext } from '../../util/theme-wrapper';
function ProfilePage() {

    const webViewA = useRef(null);
    const webViewB = useRef(null);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {

    }, []);

    const handleWebViewMessage = (event) => {
        const messageA = event.nativeEvent.data;
        const jsCode = `
        window.postMessage('${messageA}', '*');
    `;
        console.log(jsCode)
        webViewB.current.injectJavaScript(jsCode);
    };
    const handleWebViewBMessage = (event) => {
        const messageB = event.nativeEvent.data;
        const jsCode = `
        window.postMessage('${messageB}', '*');
    `;
        webViewA.current.injectJavaScript(jsCode);
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <View style={{ flex: 1 }}>
                <WebView
                    ref={webViewA}
                    source={{ uri: webUrl1 }}
                    style={{ flex: 1, margin: 10 }}
                    onMessage={handleWebViewMessage}
                    javaScriptEnabled={true}
                />
            </View>
            <View style={{ flex: 1 }}>

                <WebView
                    ref={webViewB}
                    source={{ uri: webUrl2 }}
                    style={{ flex: 1, margin: 10 }}
                    onMessage={handleWebViewBMessage}
                    javaScriptEnabled={true}
                />
            </View>
        </SafeAreaView>
    )
}
export default ProfilePage;