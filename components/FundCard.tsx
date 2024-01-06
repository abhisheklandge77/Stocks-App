import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClockFour, faStar} from '@fortawesome/free-regular-svg-icons';
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons';

function FundCard({fundDetails}: any) {
  const {name, image, marketCap, rating, description, type, risk, metrics} =
    fundDetails;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardInfo}>
        <View style={styles.cardHeader}>
          <View style={styles.cardImageContainer}>
            <Image source={image} />
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subTitle}>{marketCap}</Text>
          </View>
          <View style={styles.ratings}>
            <FontAwesomeIcon icon={faStar} size={13} />
            <Text style={styles.ratingNum}>{rating}</Text>
          </View>
        </View>
        <View style={styles.metricsContainer}>
          {metrics.map((metric: any) => (
            <View style={styles.metricInfo}>
              <Text style={styles.label}>{metric?.label}</Text>
              <Text style={styles.value}>{metric?.value}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.cardFooter}>
        <View style={styles.footerInfo}>
          <FontAwesomeIcon
            icon={faClockFour}
            style={styles.footerIcon}
            size={16}
          />
          <Text style={styles.footerText}>{type}</Text>
        </View>
        <View style={styles.footerInfo}>
          <Image
            source={require('../assets/risk-meter.png')}
            style={styles.riskMeterIcon}
          />
          <Text style={styles.footerText}>{risk}</Text>
        </View>
        <FontAwesomeIcon
          icon={faCircleInfo}
          style={styles.footerIcon}
          size={20}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.CHARCOAL,
    width: '85%',
    height: 200,
    borderRadius: 10,
    padding: 3,
    marginBottom: 20,
  },
  cardInfo: {
    paddingVertical: 20,
    paddingHorizontal: 13,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderBottomColor: Colors.LIGHT_GREY,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  cardImageContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: Colors.LIGHT_GREY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    width: '75%',
    paddingHorizontal: 10,
  },
  title: {
    color: Colors.CHARCOAL,
    fontSize: 12,
    fontWeight: 'bold',
  },
  subTitle: {
    color: Colors.CHARCOAL,
    fontSize: 12,
  },
  ratings: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingNum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.GREY,
    marginLeft: 2,
  },
  metricsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  metricInfo: {
    width: '20%',
  },
  label: {
    color: Colors.GREY,
    marginBottom: 5,
    fontSize: 12,
  },
  value: {
    color: Colors.CHARCOAL,
    fontSize: 12,
    fontWeight: '600',
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  footerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  footerIcon: {
    color: Colors.WHITE,
    backgroundColor: Colors.GREY,
    borderRadius: 50,
  },
  footerText: {
    color: Colors.LIGHT_GREY,
    textTransform: 'uppercase',
    fontSize: 12,
    marginLeft: 5,
  },
  riskMeterIcon: {
    width: 16,
    height: 16,
  },
});

export default FundCard;
