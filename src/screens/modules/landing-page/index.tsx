import React, { useEffect } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";

import { useProductService, useSearchProductService } from '../../../services';
import { ProductItem } from '../../../component';

const HomePage: React.FC = ({ navigation }: any) => {

    const { data, fetchProduct } = useProductService();
    const { searchResult, fetchSearchProduct } = useSearchProductService();

    useEffect(() => {
        fetchProduct();
        fetchSearchProduct();
    }, []);

    const onNavigationClick = () => {
        navigation.navigate('WebViewPage',{})
    }


    return (
        <View style={{ flex: 1 }}>
            {searchResult?.loading && <ActivityIndicator size="large" color="#00ff00" />}
            {(data?.products && !searchResult?.loading) && <FlatList
                style={{ flex: 1 }}
                data={data?.products?.products}
                renderItem={({ item }) => {
                    return (<ProductItem item={item} onNavigationClick={onNavigationClick} />)
                }}
                keyExtractor={(item) => item.id}
            />}
        </View>
    )
}

export default HomePage;