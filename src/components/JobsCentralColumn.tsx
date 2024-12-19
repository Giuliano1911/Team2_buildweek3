import { Card } from 'react-bootstrap'
import Job from '../types/Job'
import Error1 from './Error1'
import Loading from './Loading'
import SingleJob from './SingleJob'
import Profile from '../types/Profile'

interface JobsCentralColumnProps {
  jobs: Job[] | null
  isLoading: boolean
  isError: boolean
  profile: Profile
  isLoadingP: boolean
  isErrorP: boolean
}

const JobsCentralColumn = ({
  jobs,
  isLoading,
  isError,
  profile,
  isErrorP,
  isLoadingP,
}: JobsCentralColumnProps) => {
  return (
    <>
      <Card>
        {isErrorP && <Error1 />}
        {isLoadingP && <Loading />}
        {!isLoadingP && !isErrorP && <></>}
      </Card>
      <Card className="mt-2 p-2">
        <h4 className=" fw-bold ps-1 pt-1">Consigliato per te</h4>
        <p className=" opacity-50 ps-1">
          Sulla base del tuo profilo e della tua cronologie ricerche
        </p>
        {isError && <Error1 />}
        {isLoading && <Loading />}
        {!isLoading &&
          !isError &&
          jobs?.map((j) => {
            return <SingleJob j={j} key={j._id} />
          })}
      </Card>
    </>
  )
}
export default JobsCentralColumn
