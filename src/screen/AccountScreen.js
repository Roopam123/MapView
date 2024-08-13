import {View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native';
import React from 'react';

const AccountScreen = () => {
  return (
    <View style={styles.account}>
      <Text style={styles.title}>Account</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  account: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: 'black',
  },
});

export default AccountScreen;
