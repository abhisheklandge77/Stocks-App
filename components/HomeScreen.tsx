import {StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Colors from '../colors';
import Header from './Header';
import InvestmentOptions from './InvestmentOptions';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.LIGHT_BLUE}
      />
      <Header />
      <InvestmentOptions />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
  },
  headerContainer: {
    backgroundColor: Colors.LIGHT_BLUE,
    height: 200,
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
