import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'
import moment from 'moment'

const App = () => {
  const [home, setHome] = useState(true)
  const [profile, setProfile] = useState(false)
  const [login, setLogin] = useState(false)
  const [weather, setWeather] = useState([])
  const [quote, setQuote] = useState([])

  const date1 = moment().format().slice(0, 19)
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
    getWeather()
    getQuote()
  }, [])

  return (
    <>
      {home ?
      <Home
        homeToggle={homeToggle}
        profileToggle={profileToggle}
        loginToggle={loginToggle}
        weather={weather}
        quote={quote}
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
