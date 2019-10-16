import React, { useContext, useState } from 'react';
import { View, Picker, SafeAreaView } from 'react-native';
import { ListItem } from 'react-native-elements'
import Constants from 'expo-constants';
import ActionButton from 'react-native-action-button';
import {MainContext} from '../context/MainContext';
import AddExpenseDialog from '../components/AddExpenseDialog';


export default function Expenses(props) {

    const {types, users, addExpense, expenses} = useContext(MainContext);
    const [expense, setExpense] = useState({
        name: "",
        description: "",
        selectedType: -1,
        amount: 0,
        date: new Date()
      });
    const [defaultAnimationDialog, setDefaultAnimationDialog] = useState(false);
    const {navigate} = props.navigation;

    return (
        <View style={{marginTop: Constants.statusBarHeight, flex: 1}}>
            <SafeAreaView >
                {
                    expenses.map((l, i) => (
                    <ListItem
                        key={i}
                        title={l.name}
                        subtitle={l.description}
                        bottomDivider
                    />
                    ))
                }
            </SafeAreaView>
            <AddExpenseDialog defaultAnimationDialog={defaultAnimationDialog} setDefaultAnimationDialog={setDefaultAnimationDialog}/>
            <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => {setDefaultAnimationDialog(true);}}>
                </ActionButton>
        </View>
    );
}