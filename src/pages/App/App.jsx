import { useState } from 'react'
import { getUser } from '../../utilities/users-service';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import GigsPage from '../GigsPage/GigsPage';
import GigForm from '../../components/GigForm/GigForm';
import GigEditForm from '../../components/GigEditForm/GigEditForm';
import Navbar from '../../components/Navbar/Navbar';
import GigPage from '../GigPage/GigPage';
import ProfilePage from '../ProfilePage/ProfilePage';




function App() {
  const [user, setUser] = useState(getUser())


  function updateUser(userState) {
    setUser(userState);
  }

  return (
    <>
      <main className="App main-background">
        {user ? (
          user.role === 'customer' ? (
            <>
              <Navbar user={user} updateUser={updateUser} className="w-64" />
              <div className="flex-1">
                <Routes>
                  <Route path="/gigs" element={<GigsPage user={user} />} />
                  <Route path="*" element={<Navigate to="/gigs" />} />
                </Routes>
              </div>
            </>
          ) : (
            <>
              <Navbar user={user} updateUser={updateUser} className="w-64" />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage user={user} updateUser={updateUser}/>} />
                  <Route path="/gigs" element={<GigsPage user={user} />} />
                  <Route path="/create-gig" element={<GigForm user={user} />} />
                  <Route path="/edit-gig/:gigId" element={<GigEditForm />} />
                  <Route path="/gigs/:gigId" element={<GigPage user={user}/>} />
                  <Route path="/profile/:userId" element={<ProfilePage user={user} />} />
                  <Route path="*" element={<Navigate to="/gigs" />} />
                </Routes>
              </div>
            </>
          )
        ) : (
          <><Navbar user={user} updateUser={updateUser} className="w-64" />
          <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage user={user} updateUser={updateUser}/>} />
            <Route path="/login" element={<AuthPage setUser={updateUser} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
          </div>
          </>
        )}
      </main>
    </>
  )
}

export default App
