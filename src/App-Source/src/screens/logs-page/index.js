import { View, FlatList, Text } from "react-native";
import React, { useEffect, useState, useContext } from "react";

import { getTableRecord } from '../../util/sqlite';
import { ThemeContext } from '../../util/theme-wrapper';
function LogsPage() {

    const [records, setRecords] = useState([]);
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        getTableRecord('logs').then((data) => {
            setRecords(data);
        }).catch((error) => {
            console.log(error)
        });
    }, []);

    const renderItems = (item) => {
        return (<View style={{ width: "93%", height: 'auto', backgroundColor: "#FFF", margin: 10, padding: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "700", padding: 10 }}>{item?.name}</Text>
        </View>)
    }

    return (<View style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <FlatList
            data={records}
            renderItem={({ item }) => {
                return renderItems(item)
            }}
            keyExtractor={(item) => item.id}
        />
    </View>)
}
export default LogsPage;