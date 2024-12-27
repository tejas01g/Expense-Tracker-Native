import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { PieChart } from 'react-native-chart-kit';

// Home Screen Component
const HomeScreen = () => {
  const screenWidth = Dimensions.get('window').width;

  // Data for Pie Chart
  const pieData = [
    { name: 'Category 1', population: 13, color: '#8e44ad', legendFontColor: '#fff', legendFontSize: 12 },
    { name: 'Category 2', population: 61, color: '#3498db', legendFontColor: '#fff', legendFontSize: 12 },
    { name: 'Category 3', population: 26, color: '#e67e22', legendFontColor: '#fff', legendFontSize: 12 },
  ];

  // Sample Transactions Data
  const transactions = [
    { id: '1', icon: 'https://cdn-icons-png.flaticon.com/512/888/888857.png', name: 'Shell', date: 'Sep 02, 2022', amount: '-₹45' },
    { id: '2', icon: 'https://cdn-icons-png.flaticon.com/512/888/888857.png', name: 'SM Supermart', date: 'Sep 01, 2022', amount: '-₹235' },
    { id: '3', icon: 'https://cdn-icons-png.flaticon.com/512/888/888857.png', name: 'PinelabsPOS', date: 'Aug 31, 2022', amount: '-₹164' },
    { id: '4', icon: 'https://cdn-icons-png.flaticon.com/512/888/888857.png', name: 'AMAZON', date: 'Aug 31, 2022', amount: '-₹75' },
  ];

  // Render a Single Transaction Item
  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <Image source={{ uri: item.icon }} style={styles.transactionIcon} />
      <View>
        <Text style={styles.transactionName}>{item.name}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
      <Text style={styles.transactionAmount}>{item.amount}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>WELCOME</Text>
      </View>

      {/* Balance Section */}
      <View style={styles.balanceSection}>
        <Text style={styles.balanceTitle}>Available Balance</Text>
        <Text style={styles.balanceAmount}>₹1,05,284</Text>
      </View>

      {/* Pie Chart Section */}
      <View style={styles.pieChartSection}>
        <PieChart
          data={pieData}
          width={screenWidth - 40}
          height={150}
          chartConfig={{
            backgroundColor: '#1e1e2f',
            backgroundGradientFrom: '#1e1e2f',
            backgroundGradientTo: '#1e1e2f',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>

      {/* Transactions Section */}
      <Text style={styles.sectionTitle}>My transactions</Text>
      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.transactionList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
  },
  header: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#29293dd',
    marginTop: 10,
  },
  headerText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    // marginTop: 10,
  },
  balanceSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  balanceTitle: {
    fontSize: 16,
    color: '#fff',
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  pieChartSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#fff',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  transactionList: {
    paddingHorizontal: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  transactionName: {
    fontSize: 16,
    color: '#fff',
  },
  transactionDate: {
    fontSize: 12,
    color: '#888',
  },
  transactionAmount: {
    marginLeft: 'auto',
    fontSize: 16,
    color: '#fff',
  },
});

export default HomeScreen;
