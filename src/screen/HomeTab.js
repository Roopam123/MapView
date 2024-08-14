import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HomeIcon from 'react-native-vector-icons/FontAwesome5';
import LiveIcons from 'react-native-vector-icons/Fontisto';
import AccountIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Add from 'react-native-vector-icons/MaterialIcons';
import LiveScreen from './LiveScreen';
import AccountScreen from './AccountScreen';
import MapViewPage from './MapViewPage';
import AddAmbulance from './AddAmbulance';

const HomeTab = () => {
  const [mapViewTab, setMapViewTab] = useState('MapView');
  const [live, setLive] = useState('');
  const [account, setAccount] = useState('');
  const [addAmbulance, setAddAmbulance] = useState('');
  return (
    <View style={styles.homeContent}>
      {/* conditional tabs */}
      {mapViewTab == 'MapView' && <MapViewPage />}
      {live == 'Live' && <LiveScreen />}
      {account == 'Account' && <AccountScreen />}
      {addAmbulance == 'addAmbulance' && <AddAmbulance />}
      <View style={styles.buttomTab}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setMapViewTab('MapView');
            setLive('');
            setAccount('');
            setAddAmbulance('');
          }}>
          <HomeIcon name="home" size={25} />
          <Text style={styles.TabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setMapViewTab('');
            setLive('Live');
            setAccount('');
            setAddAmbulance('');
          }}>
          <LiveIcons name="livestream" size={22} />
          <Text style={styles.TabText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setMapViewTab('');
            setLive('');
            setAccount('');
            setAddAmbulance('addAmbulance');
          }}>
          <Add name="add" size={32} />
          <Text style={styles.TabText}>Add Ambulance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setMapViewTab('');
            setLive('');
            setAddAmbulance('');
            setAccount('Account');
          }}>
          <AccountIcons name="account" size={32} />
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
    fontSize: 16,
  },
});

export default HomeTab;
