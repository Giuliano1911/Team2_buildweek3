import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router'
import { useEffect, useState } from 'react'

import Profile from './types/Profile'
import NotFound from './components/NotFound'
import ProfilePage from './components/ProfilePage'
import LinkedInNavbar from './components/LinkedInNavbar'
import HomePage from './components/HomePage'
import Jobs from './components/Jobs'
import Job from './types/Job'
import FriendProfilePage from './components/FriendProfilePage'
import Company from './components/Company'

function App() {
  const APIKEY =
    'BEARER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzY0MjllMDk5MDYxMDAwMTViNjc4YmEiLCJpYXQiOjE3MzQ2MTc1NjgsImV4cCI6MTczNTgyNzE2OH0.Fv6lYZpaTNofky2UWNoDgj02ecQEkEGsQt38EpPFV3E'

  const [profile, setProfile] = useState<Profile | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  const [jobs, setJobs] = useState<Job[] | null>(null)
  const [search, setSearch] = useState<string>('s')

  const [restart, setRestart] = useState<boolean>(false)

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
        setRestart(false)
      })
      .catch((error) => {
        setIsError(true)
        console.log(error)
      })
  }

  useEffect(() => {
    getProfile()
  }, [restart])

  return (
    <BrowserRouter>
      <LinkedInNavbar
        profile={profile!}
        isLoading={isLoading}
        isError={isError}
        setSearch={setSearch}
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
              setRestart={setRestart}
            />
          }
        />
        <Route
          path="/homepage"
          element={
            <HomePage
              profile={profile!}
              isLoading={isLoading}
              isError={isError}
              APIKEY={APIKEY}
            />
          }
        />
        <Route
          path="/profile/:id"
          element={<FriendProfilePage APIKEY={APIKEY} />}
        />
        <Route
          path="/jobs"
          element={
            <Jobs
              APIKEY={APIKEY}
              setJobs={setJobs}
              search={search}
              jobs={jobs}
              profile={profile!}
              isLoadingP={isLoading}
              isErrorP={isError}
            />
          }
        />
        <Route path="/company/:name" element={<Company APIKEY={APIKEY} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
