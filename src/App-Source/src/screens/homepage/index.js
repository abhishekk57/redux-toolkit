import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { ActivityIndicatorView, ProductItem } from '../../component';
import { GetNetworkStatus } from '../../util/network-status';
import { createTable, insertIntoTable, getTableValue } from '../../util/sqlite';
import { getApiData } from '../../util/network-call';
import { API_URL } from "../../util/constant";
/**  import { registerBackgroundFetchTask, registerBackgroundFetchTask2 } from '../../util/background-call/BackgroundTasks';*/

import { ThemeContext } from '../../util/theme-wrapper';

export default function HomePage({ navigation }) {

  const [isloading, setloading] = useState(true);
  const [status, setStatus] = useState(true);
  const [records, setRecords] = useState([]);


  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000)
  }, [])

  /**  useEffect(() => {
  //   registerBackgroundFetchTask();
  //   registerBackgroundFetchTask2();
  // }, []);*/


  useEffect(() => {
    GetNetworkStatus().then((status) => {
      if (typeof (status) === "object") {
        setStatus(status.isConnected);
      }
    }).catch(() => { })
  }, [status]);


  useEffect(() => {
    // console.log(status)
    if (status) {

      getApiData(API_URL).then((response) => {
        setRecords(response.products);
        insertNewRecord(JSON.stringify(response.products), 1);
      }).catch((error) => {
        console.log(error);
        getLocalRecord().then((result) => {
          // console.log(result)
          result.products ? setRecords(result.products) : setRecords(result);
        }).catch((error) => {
          console.log(error)
        });
      });
    } else {
      getLocalRecord().then((result) => {
        // console.log(result)
        result.products ? setRecords(result.products) : setRecords(result);
      }).catch((error) => {
        console.log(error)
      });
    }
  }, [status])


  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar style="dark" />

      {isloading && <ActivityIndicatorView />}

      {!isloading && <FlatList
        data={records}
        renderItem={({ item }) => {
          return (<ProductItem item={item} navigation={navigation} />)
        }}
        keyExtractor={(item) => item.id}
      />}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonStyle: { backgroundColor: "black", borderRadius: 16, width: "90%", marginTop: 20 },
  textStyle: { color: "#FFF", padding: 10 },
});

HomePage.propTypes = {
  navigation: PropTypes.object.isRequired,
};


const insertNewRecord = (inName, value, result = []) => {
  createTable().then(() => {
    insertIntoTable(inName, value).then((result) => result);
  });
  return result;
}

const getLocalRecord = () => {
  return new Promise((resolve, _) => {
    createTable().then(() => {
      getTableValue().then((res) => {
        if (res && res.length > 0) {
          resolve(JSON.parse(res[0].name));
        }
      });
    });
  });
}
