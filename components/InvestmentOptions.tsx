import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Colors from '../colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import {Button} from 'react-native-paper';
import mutualFundsData from '../data';
import FundCard from './FundCard';

function InvestmentOptions() {
  const investmentOptions = [
    'Mutual Fund',
    'Fixed Deposit',
    'Bonds',
    'Stocks',
    'Gold',
    'Debt',
  ];
  const [selectedInvestment, setSelectedInvestment] = useState(
    investmentOptions[0],
  );

  return (
    <View>
      <ScrollView horizontal style={styles.investmentTabs}>
        {investmentOptions.map(investment => (
          <Text
            key={investment}
            style={
              investment === selectedInvestment
                ? {...styles.option, ...styles.activeOption}
                : styles.option
            }
            onPress={() => setSelectedInvestment(investment)}>
            {investment}
          </Text>
        ))}
      </ScrollView>
      <View style={styles.investmentsContainer}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>TAX Associated</Text>
          <FontAwesomeIcon icon={faCircleXmark} style={styles.closeIcon} />
        </View>
        <ScrollView contentContainerStyle={styles.funds}>
          {mutualFundsData.map(fund => (
            <FundCard fundDetails={fund} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  investmentTabs: {
    borderBottomColor: Colors.LIGHT_GREY,
    borderBottomWidth: 1,
    width: '100%',
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontWeight: '600',
    fontSize: 12,
    color: Colors.BLACK,
  },
  activeOption: {
    borderBottomColor: Colors.BLUE,
    borderBottomWidth: 3,
  },
  investmentsContainer: {
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.BLUE,
    padding: 6,
    paddingHorizontal: 10,
    borderRadius: 25,
    width: '38%',
    marginBottom: 25,
  },
  badgeText: {
    color: Colors.WHITE,
    marginRight: 10,
    fontSize: 12,
  },
  closeIcon: {
    color: Colors.WHITE,
  },
  funds: {
    alignItems: 'center',
  },
});

export default InvestmentOptions;
