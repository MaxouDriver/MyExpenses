import React, { useContext } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { ListItem } from 'react-native-elements'
import Constants from 'expo-constants';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import {MainContext} from '../context/MainContext';


export default function Users(props) {
    const {users} = useContext(MainContext);

    return (
        <View style={{marginTop: Constants.statusBarHeight}}>
        {
          users.map((l, i) => (
            <ListItem
                key={i}
                Component={TouchableScale}
                friction={90} //
                tension={100} // These props are passed to the parent component (here TouchableScale)
                activeScale={0.95} //
                linearGradientProps={{
                    colors: ['#FF9800', '#F44336'],
                    start: [1, 0],
                    end: [0.2, 0],
                }}
                leftAvatar={{ rounded: true, source: { uri: l.avatar_url } }}
                title={l.name}
                titleStyle={{ color: 'white', fontWeight: 'bold' }}
                subtitleStyle={{ color: 'white' }}
                subtitle={l.subtitle}
            />
          ))
        }
      </View>
    );
}