import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import menuIcon from '../assets/icons/menuIcon.png';
import userIcon from '../assets/icons/user.png';
import globeIcon from '../assets/icons/globe.png';

const Dashboard = ({ navigation }) => {
 
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [50, 100, 200, 150, 300, 400, 500, 600, 700, 800, 1200, 1000], 
        color: () => 'rgba(134, 65, 244, 1)', 
        strokeWidth: 2,
      },
      {
        data: [1000, 1500, 2000, 1800, 2200, 3000, 4000, 4500, 5000, 6000, 8000, 7000], 
        color: () => 'rgba(34, 202, 34, 1)',
        strokeWidth: 2,
      },
    ],
    legend: ['Orders', 'Income'], 
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIconContainer} onPress={() => navigation.goBack()}>
          <Image source={menuIcon} style={styles.menuIcon} />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Image source={globeIcon} style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={userIcon} style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.dashboardTitle}>Dashboard</Text>
        <Text style={styles.dashboardSubtitle}>Overview of key metrics</Text>

        <View style={styles.cardContainer}>
          <Card iconColor="orange" iconName="Pending Orders" value="3" />
          <Card iconColor="red" iconName="Total Orders" value="9" />
          <Card iconColor="coral" iconName="Total Booking" value="8" />
          <Card iconColor="green" iconName="Available Credit" value="$0.00" />
        </View>

        {/* Graph Section */}
        <View style={styles.graphContainer}>
          <Text style={styles.graphTitle}>Show monthly wise income & order graph</Text>
          <LineChart
            data={chartData}
            width={Dimensions.get('window').width - 40} 
            height={220}
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
            style={styles.chartStyle}
          />
        </View>
        <View style={styles.recentOrdersContainer}>
        <View style={styles.recentOrdersHeader}>
          <View style={styles.redCircle}>
            <Text style={styles.circleText}>0</Text>
          </View>
          <Text style={styles.recentOrdersText}>Recent Orders</Text>
        </View>
        <TouchableOpacity style={styles.viewMoreButton}>
          <Text style={styles.viewMoreText}>View More</Text>
        </TouchableOpacity>
        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Name</Text>
            <Text style={styles.tableHeader}>Status</Text>
          </View>
        </View>
      </View>
      <View style={styles.ownerBox}>
          <View style={styles.ownerTopBox}>
            <Image source={userIcon} style={styles.ownerIcon} />
            <Text style={styles.ownerTitle}>Restaurant Owner</Text>
            <Text style={styles.ownerSubtitle}>Restaurant owner</Text>
          </View>
          <View style={styles.ownerDetailsBox}>
            {[1, 2, 3, 4].map((item, index) => (
              <View key={index} style={styles.rowContainer}>
                <Image source={userIcon} style={styles.rowIcon} />
                <Text style={styles.rowText}>Placeholder text for row {item}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const Card = ({ iconColor, iconName, value }) => {
  return (
    <View style={styles.card}>
      <View style={[styles.cardIcon, { backgroundColor: iconColor }]} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{iconName}</Text>
        <Text style={styles.cardValue}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: 'red',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIconContainer: {
    padding: 10,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  content: {
    padding: 20,
  },
  dashboardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dashboardSubtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'column',
    gap: 10, 
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  cardIcon: {
    width: 60,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardValue: {
    fontSize: 18,
  },
  graphContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  graphTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  chartStyle: {
    borderRadius: 16,
  },
  recentOrdersContainer: {
    margin: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  recentOrdersHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  redCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: 'white',
    fontWeight: 'bold',
  }, recentOrdersText: {
    color: 'red',
    fontSize: 16,
    marginLeft: 10,
  },
  viewMoreButton: {
    marginTop: 10,
    backgroundColor: 'red',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  viewMoreText: {
    color: 'white',
    fontWeight: 'bold',
  },  tableContainer: {
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableHeader: {
    fontWeight: 'bold',
  },
  ownerContainer: {
    margin: 20,
  },
  ownerBox: {
    marginBottom: 20,
  },
  ownerTopBox: {
    backgroundColor: 'red',
    alignItems: 'center',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  ownerIcon: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  ownerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ownerSubtitle: {
    color: 'white',
    fontSize: 14,
  },
  ownerDetailsBox: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rowIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  rowText: {
    fontSize: 16,
  },
});

export default Dashboard;
