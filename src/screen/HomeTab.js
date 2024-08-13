import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import HomePage from './HomePage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HomeIcon from 'react-native-vector-icons/FontAwesome5';
import LiveIcons from 'react-native-vector-icons/Fontisto';
import AccountIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LiveScreen from './LiveScreen';
import AccountScreen from './AccountScreen';

const HomeTab = () => {
  const [homeTab, setHomeTab] = useState('Home');
  const [live, setLive] = useState('');
  const [account, setAccount] = useState('');
  const [currentTab, setCurrentTab] = useState('Home');
  return (
    <View style={styles.homeContent}>
      {/* conditional tabs */}
      {homeTab == 'Home' && <HomePage />}
      {live == 'Live' && <LiveScreen />}
      {account == 'Account' && <AccountScreen />}
      <View style={styles.buttomTab}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setHomeTab('Home');
            setLive('');
            setAccount('');
            setCurrentTab('Home');
          }}>
          <HomeIcon name="home" size={25} />
          <Text style={styles.TabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setHomeTab('');
            setLive('Live');
            setAccount('');
            setCurrentTab('Live');
          }}>
          <LiveIcons name="livestream" size={22} />
          <Text style={styles.TabText}>Live</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setHomeTab('');
            setLive('');
            setAccount('Account');
            setCurrentTab('Account');
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
