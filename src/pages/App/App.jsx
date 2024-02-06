import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewTransactionPage from '../NewTransactionPage/NewTransactionPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';

export default function App() {
  const [user, setUser] = useState(getUser())
  
  return (
    <main className="App">
      
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/transactions/new" element={ <NewTransactionPage /> }/>
            <Route path="/transactions" element={ <OrderHistoryPage /> }/>
          </Routes>
          <HomePage />
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}