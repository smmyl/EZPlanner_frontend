import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'
import Planner from './components/Planner'
import Notes from './components/Tools/Notes'
import moment from 'moment'

const App = () => {
  const [home, setHome] = useState(true)
  const [planner, setPlanner] = useState(false)
  const [profile, setProfile] = useState(false)
  const [login, setLogin] = useState(false)
  const [notes, setNotes] = useState(false)
  const [notesInfo, setNotesInfo] = useState([])
  const [profileInfo, setProfileInfo] = useState([])
  const [weather, setWeather] = useState([])
  const [quote, setQuote] = useState([])
  const [navigation, setNavigation] = useState('')

  //2023-04-28T08:08:46
  const date1 = moment().format().slice(0, 19)
  //2023-04-28
  const date2 = moment().format().slice(0, 10)

  const getWeather = () => {
    axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${profileInfo[0].zipcode}/${date1}?key=URZ2JCLABATC4FSQCFUQGGN4U`).then((response) => {
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
  //=====Notes=====
  const getNotesInfo = () => {
    axios.get('http://localhost:8000/api/notes').then((response) => {
      setNotesInfo(response.data)
    })
  }
  const handleCreateNotesInfo = (note) => {
    axios.post('http://localhost:8000/api/notes', note).then((response) => {
      console.log(response)
      getNotesInfo()
    }).catch((error) => {
      console.log(error.response)
    })
  }
  const handleDeleteNotesInfo = (event) => {
    axios.delete(`http://localhost:8000/api/notes/${event.target.value}`).then((response) => {
        getNotesInfo()
    })
  }
  const handleUpdateNotesInfo = (note) => {
    console.log(note)
    axios.put('http://localhost:8000/api/notes/'+ note.id, note).then((reponse) => {
      getNotesInfo()
    }).catch((error) => {
      console.log(error.response)
    })
  }
  //=====Profile=====
  const getProfileInfo = () => {
    axios.get('http://localhost:8000/api/profile').then((response) => {
      setProfileInfo(response.data)
    })
  }
  const handleCreateProfileInfo = (profile) => {
    axios.post('http://localhost:8000/api/profile', profile).then((response) => {
      console.log(response)
      getProfileInfo()
    }).catch((error) => {
      console.log(error.response)
    })
  }
  const handleDeleteProfileInfo = (event) => {
    axios.delete(`http://localhost:8000/api/profile/${event.target.value}`).then((response) => {
        getProfileInfo()
    })
  }
  const handleUpdateProfileInfo = (profile) => {
    console.log(profile)
    axios.put('http://localhost:8000/api/profile/'+ profile.id, profile).then((reponse) => {
      getProfileInfo()
    }).catch((error) => {
      console.log(error.response)
    })
  }

  const homeToggle = () => {
    setHome(true)
    setPlanner(false)
    setProfile(false)
    setLogin(false)
    setNotes(false)
    setNavigation('')
  }
  const plannerToggle = () => {
    setHome(false)
    setPlanner(true)
    setProfile(false)
    setLogin(false)
    setNotes(false)
    setNavigation('> Planner')
  }
  const profileToggle = () => {
    setHome(false)
    setPlanner(false)
    setProfile(true)
    setLogin(false)
    setNotes(false)
    setNavigation('> Profile')
  }
  const loginToggle = () => {
    setHome(false)
    setPlanner(false)
    setProfile(false)
    setLogin(true)
    setNotes(false)
    setNavigation('> Sign In / Up')
  }
  const notesToggle = () => {
    setHome(false)
    setPlanner(false)
    setProfile(false)
    setLogin(false)
    setNotes(true)
    setNavigation('> Notes')
  }

  useEffect(() => {
    getWeather()
    getQuote()
    getNotesInfo()
    getProfileInfo()
  }, [])

  return (
    <>
      <Navbar
        homeToggle={homeToggle}
        plannerToggle={plannerToggle}
        profileToggle={profileToggle}
        loginToggle={loginToggle}
        notesToggle={notesToggle}
        navigation={navigation}
      />
      {home ?
      <Home
        homeToggle={homeToggle}
        plannerToggle={plannerToggle}
        profileToggle={profileToggle}
        loginToggle={loginToggle}
        notesToggle={notesToggle}
        weather={weather}
        quote={quote}
        handleCreateNotesInfo={handleCreateNotesInfo}
      />
      :planner ?
      <Planner
        homeToggle={homeToggle}
        plannerToggle={plannerToggle}
        profileToggle={profileToggle}
        loginToggle={loginToggle}
        notesToggle={notesToggle}
      />
      :profile ?
      <Profile
        homeToggle={homeToggle}
        plannerToggle={plannerToggle}
        profileToggle={profileToggle}
        loginToggle={loginToggle}
        notesToggle={notesToggle}
        profileInfo={profileInfo}
        handleUpdateProfileInfo={handleUpdateProfileInfo}
      />
      :login ?
      <Login
        homeToggle={homeToggle}
        plannerToggle={plannerToggle}
        profileToggle={profileToggle}
        loginToggle={loginToggle}
        notesToggle={notesToggle}
      />
      :notes ?
      <Notes
        homeToggle={homeToggle}
        plannerToggle={plannerToggle}
        profileToggle={profileToggle}
        loginToggle={loginToggle}
        notesToggle={notesToggle}
        notesInfo={notesInfo}
        handleDeleteNotesInfo={handleDeleteNotesInfo}
      />
      :
      <>
      </>
      }
    </>
  )
}

export default App;
