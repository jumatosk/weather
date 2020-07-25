import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native'

import * as Location from 'expo-location';

import Home from './src/Home'

export default () => {
  return (
    <App />
  )
}

const App = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [permission, setPermission] = useState();

  useEffect(() => {
    try {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permissão negada!');
        }

        setPermission(true)
      })();
    } catch (error) {
      Alert.alert(errorMsg)
    }
  }, [])

  return (
    <Home permission={permission}/>
  )

}