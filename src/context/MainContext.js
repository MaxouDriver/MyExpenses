import React, { useState, useEffect } from 'react';
import Expenses from '../mock/expenses.json';
import Users from '../mock/users.json';
import Types from '../mock/types.json';

const MainContext = React.createContext([{}, () => { }]);

const MainProvider = (props) => {
    console.log("hey");
    useEffect(() => {
        setState({
            ...state,
            expenses: Expenses,
            users: Users,
            types: Types
        });
    }, []);

  const addExpense = (expense) => {
      let temp = Object.assign([], state.expenses);
      temp.push(expense);
    setState({
        ...state,
        expenses: temp
    });
  }

  const addUser = () => {

  }

  const [state, setState] = useState({
    expenses: [],
    users: [],
    types: [],
    addExpense,
    addUser
  });

  return (
    <MainContext.Provider value={state}>
      {props.children}
    </MainContext.Provider>
  );
}

export { MainContext, MainProvider };