import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewTransactionPage from '../NewTransactionPage/NewTransactionPage';
import TransactionHistoryPage from '../TrasactionHistoryPage/TransactionHistoryPage'
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';

export default function App() {
  const [user, setUser] = useState(getUser())
  const [balance, setBalance] = useState(0)

  return (
    <main className="App">
      
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/transactions/new" element={ <NewTransactionPage balance={ balance } setBalance={ setBalance } /> }/>
            <Route path="/transactions" element={ <TransactionHistoryPage balance={ balance } /> }/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}