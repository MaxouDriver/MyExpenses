import React from 'react'
import { ScrollView, SafeAreaView, Dimensions, Text, StyleSheet } from 'react-native'
import Constants from 'expo-constants';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit'

const screenWidth = Dimensions.get("window").width - 20;

const chartConfig = {
    backgroundColor: '#3F51B5',
    backgroundGradientFrom: '#3F51B5',
    backgroundGradientTo: '#3F51B5',
    color: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage:0.5
  }
  const labelStyle = {
    color: "#000000",
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 16
  }

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      data: [ 20, 45, 28, 80, 99, 43 ],
      color: (opacity = 1) => `rgba(255,255,255, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }]
  }
  

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={labelStyle}>Bezier Line Chart</Text>
                <LineChart
                    style={{borderRadius: 15}}
                    data={data}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                />
                <Text style={labelStyle}>Bezier Line Chart</Text>
            <LineChart
                style={{borderRadius: 15}}
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
            <Text style={labelStyle}>Bezier Line Chart</Text>
            <LineChart
                style={{borderRadius: 15}}
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
            <Text style={labelStyle}>Bezier Line Chart</Text>
            <LineChart
                style={{borderRadius: 15}}
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
            </ScrollView>
        </SafeAreaView>
      )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    scrollView: {
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 42,
    },
});