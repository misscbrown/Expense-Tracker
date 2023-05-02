import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    {
      title: 'Toilet Paper',
      amount: 94.17,
      date: new Date(2021, 4, 28)
    },
    {
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 6, 21)
    },
    {
      title: 'Petrol',
      amount: 494.67,
      date: new Date(2021, 7, 18)
    },
    {
      title: 'Mortgage',
      amount: 994.67,
      date: new Date(2021, 9, 25)
    },
  ]

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
