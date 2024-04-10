import React from 'react';
import PropTypes from 'prop-types';
import { View, Pressable, Text, StyleSheet } from 'react-native';
// import { Image } from 'expo-image';

function ProductItem({ item, navigation }) {

    const navigate = () => {

    }

    return (<Pressable onPress={() => navigate(item)}
        key={item.id + '' + new Date().getTime()} style={{ width: "93%", margin: 10, padding: 10, backgroundColor: "#FFF" }}>
        <View style={{ flex: 1 }}>
            {/* <View style={{ width: "100%", height: 200 }}>
                <Image
                    style={styles.image}
                    source={item.thumbnail}
                    contentFit="contain"
                    cachePolicy={"memory-disk"}
                    transition={0}
                    autoplay={false}
                    fadeDuration={0}
                />
            </View> */}
            <View style={{ width: "100%", padding: 5 }}>
                <Text style={{ fontSize: 14, color: "#000", fontWeight: "700" }}>{item.title}</Text>
                <Text style={{ fontSize: 11, color: "#000" }}>{item.description}</Text>
            </View>
        </View>
    </Pressable>)
}

ProductItem.propTypes = {
    item: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    textStyle: { color: "#FFF", padding: 10 },
    image: {
        flex: 1,
        width: '100%',
    }
});


export { ProductItem };