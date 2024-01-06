import {View, StyleSheet, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import Colors from '../colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBell} from '@fortawesome/free-regular-svg-icons';

function Header() {
  const riskTypes = [
    {
      type: 'LOW RISK',
      image: require('../assets/low-risk.png'),
      style: {
        color: '#14437D',
        fontWeight: 'bold',
        marginLeft: 8,
        fontSize: 12,
      },
    },
    {
      type: 'MEDIUM RISK',
      image: require('../assets/medium-risk.png'),
      style: {
        color: '#228569',
        fontWeight: 'bold',
        marginLeft: 8,
        fontSize: 12,
      },
    },
    {
      type: 'HIGH RISK',
      image: require('../assets/high-risk.png'),
      style: {
        color: '#937024',
        fontWeight: 'bold',
        marginLeft: 8,
        fontSize: 12,
      },
    },
    {
      type: 'VERY HIGH RISK',
      image: require('../assets/very-high-risk.png'),
      style: {
        color: '#812C2C',
        fontWeight: 'bold',
        marginLeft: 8,
        fontSize: 10,
      },
    },
  ];

  return (
    <View style={styles.headerContainer}>
      <ImageBackground
        source={require('../assets/header-world-map.png')}
        style={styles.headerBackground}>
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Image source={{uri: 'test'}} style={styles.userImage} />
            <View>
              <Text style={styles.welcomeText}>Hello, welcome</Text>
              <Text style={styles.userNameText}>Santu Dey</Text>
            </View>
          </View>
          <FontAwesomeIcon icon={faBell} size={20} style={styles.bellIcon} />
        </View>
        <View style={styles.riskTypesContainer}>
          {riskTypes.map(risk => (
            <View style={styles.riskItem} key={risk.type}>
              <Image source={risk.image} style={styles.riskImg} />
              <Text style={risk.style}>{risk.type}</Text>
            </View>
          ))}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.LIGHT_BLUE,
    height: 200,
    paddingHorizontal: 20,
  },
  headerBackground: {
    flex: 1,
    backgroundColor: Colors.LIGHT_BLUE,
    marginTop: 29,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    top: -20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    height: 42,
    width: 42,
    borderRadius: 50,
    backgroundColor: Colors.WHITE,
    borderWidth: 2,
    borderColor: Colors.BLUE,
    marginRight: 8,
  },
  welcomeText: {
    color: Colors.GREY,
    fontSize: 12,
  },
  userNameText: {
    color: Colors.DARK_BLUE,
    fontSize: 14,
    fontWeight: '600',
  },
  bellIcon: {
    color: Colors.DARK_BLUE,
  },
  riskTypesContainer: {
    backgroundColor: Colors.WHITE,
    width: '100%',
    height: 113,
    borderRadius: 16,
    marginTop: 38,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    padding: 12,
  },
  riskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: Colors.BLUISH_GREY,
    paddingVertical: 7,
    paddingHorizontal: 12,
  },
  riskImg: {
    width: 40,
    height: 26,
  },
});

export default Header;
