import React, { useContext, useState } from 'react';
import { View, Picker, TouchableHighlight, Image } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { ListItem } from 'react-native-elements'
import Constants from 'expo-constants';
import {MainContext} from '../context/MainContext';
import { Input } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
  } from 'react-native-popup-dialog';
import { Button } from 'react-native-elements';

export default function AddExpenseDialog(props) {
    const {types, users, addExpense, expenses} = useContext(MainContext);
    const [expense, setExpense] = useState({
        name: "",
        description: "",
        selectedType: -1,
        amount: 0,
        date: new Date()
      });

    return (
        <Dialog
                onDismiss={() => {
                    props.setDefaultAnimationDialog(false);
                }}
                width={0.9}
                visible={props.defaultAnimationDialog}
                rounded
                actionsBordered
                dialogTitle={
                    <DialogTitle
                    title="Default Animation Dialog Simple"
                    style={{
                        backgroundColor: '#F7F7F8',
                    }}
                    hasTitleBar={false}
                    align="left"
                    />
                }
                footer={ 
                    <DialogFooter>
                    <DialogButton
                        text="CANCEL"
                        bordered
                        onPress={() => {
                            props.setDefaultAnimationDialog(false);
                        }}
                        key="button-1"
                    />
                    <DialogButton
                        text="OK"
                        bordered
                        onPress={() => {
                            addExpense(expense);
                            props.setDefaultAnimationDialog(false);
                        }}
                        key="button-2"
                    />
                    </DialogFooter>
                }>
                <DialogContent
                    style={{
                    backgroundColor: '#F7F7F8',
                    }}>
                    <View style={{margin: 20}}>
                <Input
                placeholder='Name'
                errorStyle={{ color: 'red' }}
                errorMessage='ENTER A VALID ERROR HERE'
                onChangeText={text => setExpense({
                    ...expense,
                    name: text
                })}
                value={expense.name}
                />
                <Input
                placeholder='Description'
                multiline={true}
                numberOfLines={4}
                errorStyle={{ color: 'red' }}
                errorMessage='ENTER A VALID ERROR HERE'
                onChangeText={text => setExpense({
                    ...expense,
                    description: text
                })}
                value={expense.description}
                />
                <Picker
                selectedValue={expense.selectedType}
                onValueChange={(itemValue, itemIndex) =>
                    setExpense({
                    ...expense,
                    selectedType: itemValue
                    })
                }>
                    <Picker.Item label="Selectionnez un type" value={undefined} />
                    {
                    types.map((type) => {
                        return <Picker.Item label={type.name} value={type.id} />
                    })
                    }
                </Picker>
                <Input
                placeholder='Amount'
                keyboardType='numeric'
                errorStyle={{ color: 'red' }}
                errorMessage='ENTER A VALID ERROR HERE'
                onChangeText={text => setExpense({
                    ...expense,
                    amount: text
                })}
                value={expense.amount}
                />
                <DatePicker
                date={expense.date} //initial date from state
                mode="date" //The enum of date, datetime and time
                placeholder="select date"
                format="DD-MM-YYYY"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                    },
                    dateInput: {
                    marginLeft: 36,
                    },
                }}
                onDateChange={date => {
                    setExpense({
                    ...expense,
                    date: date
                    })
                }}
                />
            </View>
          </DialogContent>
        </Dialog>
    );
}