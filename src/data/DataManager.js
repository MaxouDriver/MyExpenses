import React, {useState} from 'react';
import Expenses from '../mock/expenses.json';
import Users from '../mock/users.json';
import Types from '../mock/types.json';

const expenses = undefined;
const users = undefined;
const types = undefined;

    export const getExpenses = () => {
        if (!expenses) expenses = Expenses;
        return expenses;
    };

    export const getUsers = () => {
        if (!users) users = Users;
        return users;
    };

    export const getTypes = () => {
        if (!types) types = Types;
        return types;
    };

    export const addExpense = (expense) => {
      expenses.push(expense);
  }

  const addUser = () => {

  }