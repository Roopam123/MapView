import {
  View,
  StyleSheet,
  Dimensions,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import mapStyle from '../mapStyle.json';

const HomePage = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [hasPermission, setHasPermission] = useState(false);

  const getUserCurrentLocation = () => {
    Geolocation.getCurrentPosition(currentPostion =>
      setCurrentLocation(currentPostion?.coords),
    );
  };

  const requestLocationPersmission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Got permission');
        setHasPermission(true);
        getUserCurrentLocation();
      } else {
        Alert.alert(
          'Permission deny',
          'Location permission is requred for the shaowing your current location',
        );
      }
    } catch (error) {
      console.log('Error on the granted permission location-->', error);
    }
  };

  useEffect(() => {
    requestLocationPersmission();
  }, []);

  return (
    <View style={styles.mapView}>
      {hasPermission && (
        <MapView
          customMapStyle={mapStyle}
          initialRegion={{
            latitude: currentLocation?.latitude,
            longitude: currentLocation?.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          onRegionChangeComplete={data =>
            console.log('onChnageComplete-->', data)
          }
          // showsUserLocation={true}
          style={styles.map}>
          <Marker
            coordinate={{
              latitude: currentLocation?.latitude,
              longitude: currentLocation?.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            // title={'Test'}
            // description={'Hello I am Testing'}
            onPress={data =>
              console.log('marker press-->', data.nativeEvent.coordinate)
            }
          />
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mapView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default HomePage;
