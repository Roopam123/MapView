import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splesh = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      handelNavigate();
    }, 2000);
  }, []);
  const handelNavigate = async () => {
    const userData = await AsyncStorage.getItem('user');
    if (!userData) {
      navigation.navigate('Login');
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.splesh}>
      <StatusBar backgroundColor={'rgb(59, 103, 148)'} />
      <Text style={styles.spleshText}>My 💬</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  splesh: {
    flex: 1,
    backgroundColor: 'rgb(59, 103, 148)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spleshText: {
    color: 'rgb(227, 221, 34)',
    fontSize: 27,
    fontWeight: '600',
  },
  spleshBtn: {
    backgroundColor: 'rgb(55, 100, 222)',
    borderRadius: 10,
    marginTop: 20,
  },
  text: {
    paddingHorizontal: 30,
    paddingVertical: 6,
    fontSize: 18,
    fontWeight: '600',
  },
});
export default Splesh;
