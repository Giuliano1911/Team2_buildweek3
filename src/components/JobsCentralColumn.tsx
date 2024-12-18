import { Card } from 'react-bootstrap'
import Job from '../types/Job'
import Error1 from './Error1'
import Loading from './Loading'
import SingleJob from './SingleJob'

interface JobsCentralColumnProps {
  jobs: Job[] | null
  isLoading: boolean
  isError: boolean
}

const JobsCentralColumn = ({
  jobs,
  isLoading,
  isError,
}: JobsCentralColumnProps) => {
  return (
    <>
      <Card className="mt-5">
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
