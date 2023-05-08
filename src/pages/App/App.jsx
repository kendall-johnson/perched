import { useState } from 'react'
import './App.css'
import { getUser } from '../../utilities/users-service';
import { Routes, Route } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';




function App() {
  const [user, setUser] = useState(getUser())


  function updateUser(userState) {
    setUser(userState);
  }

  return (
    <>
      <main className="App main-background">
        {/* <div className="h-screen flex flex-row"> */}
          {/* {user ? (
            <>
              <Sidebar user={user} updateUser={updateUser} className="w-64" />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                </Routes>
              </div>
            </>
          ) : (
            <div className="flex-1">
              <AuthPage setUser={updateUser} />
            </div>
          )} */}

          <Routes>
            <Route path="/" element={<HomePage user={user} updateUser={updateUser}/>} />
            <Route path="/login" element={<AuthPage setUser={updateUser} />} />
          </Routes>          
        {/* </div> */}
      </main>
    </>
  )
}

export default App
