import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HomeIcon from 'react-native-vector-icons/FontAwesome5';
import LiveIcons from 'react-native-vector-icons/Fontisto';
import AccountIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Add from 'react-native-vector-icons/MaterialIcons';
import AccountScreen from './AccountScreen';
import MapViewPage from './MapViewPage';
import AddAmbulance from './AddAmbulance';
import AllAmbulance from './AllAmbulance';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeTab = () => {
  useEffect(() => {
    getUserType();
  }, []);
  const [mapViewTab, setMapViewTab] = useState('MapView');
  const [allAmbulance, seAllAmbulance] = useState('');
  const [account, setAccount] = useState('');
  const [userTypeData, setUserTypeData] = useState('');

  const getUserType = async () => {
    const userType = await AsyncStorage.getItem('user_type');
    setUserTypeData(userType);
  };
  return (
    <View style={styles.homeContent}>
      {mapViewTab == 'MapView' && (
        <View style={styles.titleGroup}>
          <Text style={styles.title}>Search Ambulance</Text>
        </View>
      )}
      {/* conditional tabs */}
      {mapViewTab == 'MapView' && <MapViewPage />}

      {allAmbulance == 'allAmbulance' && userTypeData == 'Patient' && (
        <AllAmbulance />
      )}
      {account == 'Account' && <AccountScreen />}
      <View style={styles.buttomTab}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setMapViewTab('MapView');
            setAccount('');
            seAllAmbulance('');
          }}>
          <HomeIcon name="home" size={18} />
          <Text style={styles.TabText}>Home</Text>
        </TouchableOpacity>
        {userTypeData == 'Patient' && (
          <TouchableOpacity
            style={styles.tab}
            onPress={() => {
              setMapViewTab('');
              setAccount('');
              seAllAmbulance('allAmbulance');
            }}>
            <LiveIcons name="livestream" size={16} />
            <Text style={styles.TabText}>All Ambulance</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setMapViewTab('');
            seAllAmbulance('');
            setAccount('Account');
          }}>
          <AccountIcons name="account" size={20} />
          <Text style={styles.TabText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  homeContent: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  buttomTab: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width,
    alignItems: 'center',
    position: 'absolute',
    bottom: 1,
    backgroundColor: 'white',
    elevation: 2,
    height: 70,
  },
  tab: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TabText: {
    fontSize: 14,
  },
  titleGroup: {
    position: 'absolute',
    zIndex: 10,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: 'green',
  },
});

export default HomeTab;
