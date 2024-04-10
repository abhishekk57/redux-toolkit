import React from 'react';
import { View, Pressable, Text, StyleSheet, Image } from 'react-native';

interface ProductProps {
    readonly item: any,
    readonly onNavigationClick: () => void
}

function ProductItem({ item, onNavigationClick = () => null }: ProductProps) {


    return (<Pressable
        onPress={onNavigationClick}
        key={item.id + '' + new Date().getTime()} style={{
            width: "93%",
            margin: 10, padding: 10, height: 'auto',
            backgroundColor: "#FFF", borderRadius: 26
        }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ width: 100, padding: 10, }}>
                <Image style={{ width: 96, height: 96, borderRadius: 96 }} source={{ uri: item?.thumbnail }}></Image>
            </View>
            <View style={{ width: "100%", marginStart: 10, padding: 5 }}>
                <Text style={{ fontSize: 14, color: "#000", paddingTop: 20, fontWeight: "700" }}>{item.title}</Text>
                <Text style={{ fontSize: 11, color: "#000" }}>{item.description}</Text>
            </View>
        </View>
    </Pressable>);
}

const styles = StyleSheet.create({
    textStyle: { color: "#FFF", padding: 10 },
    image: {
        flex: 1,
        width: '100%',
    }
});


export { ProductItem };