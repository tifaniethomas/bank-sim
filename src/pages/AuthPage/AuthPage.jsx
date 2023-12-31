import { useState } from 'react';
import LoginForm from "../../components/LoginForm/LoginForm"
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

export default function AuthPage({setUser}) {
    const [showSignUp, setShowSignUp] = useState(false);
    return (
    <main>
        <Header />
        <section id="login">
            <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
        { showSignUp ?
            <SignUpForm setUser={setUser} />
            :
            <LoginForm setUser={setUser} />
        }
        </section>
        <Footer />
    </main>
    )
}