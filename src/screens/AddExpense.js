import React, { useContext, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import {MainContext} from '../context/MainContext';
import DateTimePicker from "react-native-modal-datetime-picker";
import { Button } from 'react-native-elements';
import { View, Picker } from 'react-native';
import DatePicker from 'react-native-datepicker';

export default function AddExpense() {
  const [expense, setExpense] = useState({
    name: "",
    description: "",
    selectedType: -1,
    amount: 0,
    date: new Date()
  });
  const {types, users, addExpense} = useContext(MainContext);
  const [date, setDate] = useState(new Date());

    return (
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
        <Button
          title="Solid Button"
          onPress={() => {
            addExpense(expense);
          }}
        />
      </View>
      );
};