import React, { useState, useEffect } from 'react'
import { View, Text, Button, ActivityIndicator } from 'react-native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import styles from './styles'

import * as Location from 'expo-location';
import api from './services/api'
import Weather from './utils/apiKey'

export default ({ permission }) => {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState({})
    const [loading, setLoading] = useState(true)
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()


    const getCoords = async () => {
        try {
            let latitude = ((await Location.getCurrentPositionAsync({})).coords.latitude)
            let longitude = ((await Location.getCurrentPositionAsync({})).coords.longitude)

            setLatitude(latitude);
            setLongitude(longitude)
        } catch (error) {
            console.log(error)
        }

        getWeatherData()
    }

    const getWeatherData = async () => {
        setLoading(true)

        try {
            const response = await api.get(`?lat=${latitude}&lon=${longitude}&units=metric&appid=${Weather.apiKey}`)

            setWeather(response.data.main)
            setCity(response.data.name)

        } catch (error) {
            console.log(error)
        }

        setLoading(false)
    }

    useEffect(() => {
        getCoords()
    }, [])

    if (!loading && permission) {
        return (
            <View style={styles.container}>
                <View style={styles.infoView}>
                    <Text style={styles.city}>{city}</Text>

                    <View style={styles.tempView}>
                        <Icon name="weather-night-partly-cloudy" size={25} color="#8194F5" />
                        <Text style={styles.temp}>
                            {weather.temp}°C
                        </Text>
                    </View>

                    <Button
                        title="Atualizar"
                        onPress={() => getWeatherData()}
                        color="#20615E"
                    />
                </View>
            </View>
        )
    }

    if(!permission) {
        return (
            <View style={styles.container}>
                <Text style={styles.warning}>Permissão não concedida.</Text>
            </View>
        )
    }

    return (
        <View style={styles.activityIndicator}>
            <ActivityIndicator color="#20615E" size="large" animating />
        </View>
    )
}