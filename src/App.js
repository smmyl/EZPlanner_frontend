import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'
import Planner from './components/Planner'
import moment from 'moment'

const App = () => {
  const [home, setHome] = useState(true)
  const [planner, setPlanner] = useState(false)
  const [profile, setProfile] = useState(false)
  const [login, setLogin] = useState(false)
  const [weather, setWeather] = useState([])
  const [quote, setQuote] = useState([])
  const [navigation, setNavigation] = useState('')

  //2023-04-28T08:08:46
  const date1 = moment().format().slice(0, 19)
  //2023-04-28
  const date2 = moment().format().slice(0, 10)

  const getWeather = () => {
    axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/02128/${date1}?key=URZ2JCLABATC4FSQCFUQGGN4U`).then((response) => {
      console.log(response)
      setWeather(response.data.currentConditions)
    }).catch((error) => {
      console.log(error.response)
    })
  }
  const getQuote = () => {
    axios.get('https://api.api-ninjas.com/v1/quotes?category=', {headers: {'X-Api-Key': 'UZ91Y3CjRyh8j5Xd7zlGCg==a7jckUfbrWqDos3b'}}).then((response) => {
      console.log(response)
      setQuote(response.data[0])
      console.log(quote)
    }).catch((error) => {
      console.log(error.response)
    })
  }

  const homeToggle = () => {
    setHome(true)
    setPlanner(false)
    setProfile(false)
    setLogin(false)
    setNavigation('')
  }
  const plannerToggle = () => {
    setHome(false)
    setPlanner(true)
    setProfile(false)
    setLogin(false)
    setNavigation('> Planner')
  }
  const profileToggle = () => {
    setHome(false)
    setPlanner(false)
    setProfile(true)
    setLogin(false)
    setNavigation('> Profile')
  }
  const loginToggle = () => {
    setHome(false)
    setPlanner(false)
    setProfile(false)
    setLogin(true)
    setNavigation('> Sign In / Up')
  }

  useEffect(() => {
    getWeather()
    getQuote()
  }, [])

  return (
    <>
      <Navbar
        homeToggle={homeToggle}
        plannerToggle={plannerToggle}
        profileToggle={profileToggle}
        loginToggle={loginToggle}
        navigation={navigation}
      />
      {home ?
      <Home
        homeToggle={homeToggle}
        plannerToggle={plannerToggle}
        profileToggle={profileToggle}
        loginToggle={loginToggle}
        weather={weather}
        quote={quote}
      />
      :planner ?
      <Planner
        homeToggle={homeToggle}
        plannerToggle={plannerToggle}
        profileToggle={profileToggle}
        loginToggle={loginToggle}
      />
      :profile ?
      <Profile
        homeToggle={homeToggle}
        plannerToggle={plannerToggle}
        profileToggle={profileToggle}
        loginToggle={loginToggle}
      />
      :login ?
      <Login
        homeToggle={homeToggle}
        plannerToggle={plannerToggle}
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
