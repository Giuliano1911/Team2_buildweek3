import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router'
import { useEffect, useState } from 'react'

import Profile from './types/Profile'
import NotFound from './components/NotFound'
import ProfilePage from './components/ProfilePage'
import LinkedInNavbar from './components/LinkedInNavbar'

function App() {
  const APIKEY =
    'BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVmZWIxZjBlYTI4NjAwMTUyOGI5MzIiLCJpYXQiOjE3MzQzNDM1NzgsImV4cCI6MTczNTU1MzE3OH0.v7lEVOe2QDdJlK5ak5I4FmtNPgqcmd8kXKzCk7W8hCc'

  const [profile, setProfile] = useState<Profile | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  const getProfile = async () => {
    fetch('https://striveschool-api.herokuapp.com/api/profile/me', {
      headers: {
        Authorization: APIKEY,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('no ok')
        }
      })
      .then((data: Profile) => {
        console.log(data)
        setProfile(data)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsError(true)
        console.log(error)
      })
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <BrowserRouter>
      <LinkedInNavbar
        profile={profile!}
        isLoading={isLoading}
        isError={isError}
      />

      <Routes>
        <Route
          path="/"
          element={
            <ProfilePage
              profile={profile!}
              isLoading={isLoading}
              isError={isError}
              APIKEY={APIKEY}
            />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
