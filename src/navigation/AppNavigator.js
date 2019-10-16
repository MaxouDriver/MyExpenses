import React, {Component} from 'react';
//Import required react-navigation component
import {
  createAppContainer
} from 'react-navigation';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  Text,
} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Users from '../screens/Users';
import SharedExpenses from '../screens/SharedExpenses';
import Expenses from '../screens/Expenses';
import AddExpense from '../screens/AddExpense';

//Import Custom Sidebar
import CustomSidebarMenu from '../modules/CustomSidebarMenu.js';
global.currentScreenIndex = 0;

//Navigation Drawer Structure for all screen
class NavigationDrawerStructure extends Component {
  //Top Navigation Header with Donute Button
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('../../assets/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

//Stack Navigator for the First Option of Navigation Drawer
const HomeStack = createStackNavigator({
  //All the screen from the First Option will be indexed here
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      header: null
    }),
  },
});
const SharedExpensesStack = createStackNavigator({
  //All the screen from the Second Option will be indexed here
  SharedExpenses: {
    screen: SharedExpenses,
    navigationOptions: ({ navigation }) => ({
      title: 'SharedExpenses',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      header: null
    }),
  },
});
const ExpensesStack = createStackNavigator({
  //All the screen from the Second Option will be indexed here
  Expenses: {
    screen: Expenses,
    navigationOptions: ({ navigation }) => ({
      title: 'Expenses',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      header: null
    }),
  },
  AddExpense: {
    screen: AddExpense
  }
});
const UsersStack = createStackNavigator({
  //All the screen from the Second Option will be indexed here
  Users: {
    screen: Users,
    navigationOptions: ({ navigation }) => ({
      title: 'Users',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      header: null
    }),
  },
  AddExpense: {
    screen: AddExpense
  }
});

export default createAppContainer(
  createDrawerNavigator(
    {
      //Drawer Optons and indexing
      Home: {
        screen: HomeStack,
        navigationOptions: {
          drawerLabel: 'Home',
        },
      },
      SharedExpenses: {
        screen: SharedExpensesStack,
        navigationOptions: {
          drawerLabel: 'SharedExpenses',
        },
      },
      Expenses: {
        screen: ExpensesStack,
        navigationOptions: {
          drawerLabel: 'Expenses',
        },
      },
      Users: {
        screen: UsersStack,
        navigationOptions: {
          drawerLabel: 'Users',
        },
      }
    },
    {
      //For the Custom sidebar menu we have to provide our CustomSidebarMenu
      contentComponent: CustomSidebarMenu,
      //Sidebar width
      drawerWidth: Dimensions.get('window').width - 130
    }
  )
);