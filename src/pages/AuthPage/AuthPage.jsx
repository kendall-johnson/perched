import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm';
import "../../index.css"
import Footer from '../../components/Footer/Footer';


export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  
  return (
    <>
    <main className="AuthPage">
      {showLogin ? <LoginForm setUser={setUser} showLogin={showLogin} setShowLogin={setShowLogin}/> : <SignUpForm setUser={setUser} showLogin={showLogin} setShowLogin={setShowLogin}/>}
    </main>
    <Footer />
</>    
  );
}