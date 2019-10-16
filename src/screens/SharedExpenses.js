import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { ListItem } from 'react-native-elements'
import Constants from 'expo-constants';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import ActionButton from 'react-native-action-button';

const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
  ];

export default function SharedExpenses(props) {
    const {navigate} = props.navigation;
    return (
        <View style={{marginTop: Constants.statusBarHeight, flex: 1}}>
            <SafeAreaView >
                {
                    list.map((l, i) => (
                        <ListItem
                            key={i}
                            title={l.name}
                            subtitle={l.description}
                            bottomDivider
                        />
                    ))
                }
            </SafeAreaView>
            <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => {navigate("AddExpense")}}>
            </ActionButton>
        </View>
    );
}