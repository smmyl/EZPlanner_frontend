import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'

const App = () => {
  const [home, setHome] = useState(true)
  const [profile, setProfile] = useState(false)
  const [login, setLogin] = useState(false)

  const homeToggle = () => {
    setHome(true)
    setProfile(false)
    setLogin(false)
  }
  const profileToggle = () => {
    setHome(false)
    setProfile(true)
    setLogin(false)
  }
  const loginToggle = () => {
    setHome(false)
    setProfile(false)
    setLogin(true)
  }

  useEffect(() => {
  }, [])

  return (
    <>
      {home ?
      <Home
        homeToggle={homeToggle}
        profileToggle={profileToggle}
        loginToggle={loginToggle}
      />
      :profile ?
      <Profile
        homeToggle={homeToggle}
        profileToggle={profileToggle}
        loginToggle={loginToggle}
      />
      :login ?
      <Login
        homeToggle={homeToggle}
        profileToggle={profileToggle}
        loginToggle={loginToggle}
      />
      :
      <>
      </>
      }
    </>
  )
}

export default App;
