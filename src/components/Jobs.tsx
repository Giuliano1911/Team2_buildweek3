import { useEffect, useState } from 'react'
import Job from '../types/Job'
import JobsResponse from '../types/JobsResponse'
import JobsCentralColumn from './JobsCentralColumn'

interface JobsProps {
  APIKEY: string
  setJobs: React.Dispatch<React.SetStateAction<Job[] | null>>
  search: string
  jobs: Job[] | null
}

const Jobs = ({ APIKEY, setJobs, search, jobs }: JobsProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  const getJobs = async () => {
    fetch(
      `https://strive-benchmark.herokuapp.com/api/jobs?search=${search}&limit=50`,
      {
        headers: {
          Authorization: APIKEY,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('no ok')
        }
      })
      .then((data: JobsResponse) => {
        console.log(data)
        setJobs(data.data)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsError(true)
        console.log(error)
      })
  }

  useEffect(() => {
    getJobs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return (
    <>
      <JobsCentralColumn jobs={jobs} isLoading={isLoading} isError={isError} />
    </>
  )
}
export default Jobs
