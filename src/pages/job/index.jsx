import { createContext, useReducer } from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import JobCreator from '../../components/Job/JobCreator';
import JobList from '../../components/Job/JobList';
import { jobReducer, initialState } from "../../store/JobStore";

const JobContext = createContext();

const Job = () => {
  const [{ jobNextId, jobs }, dispatch] = useReducer(jobReducer, initialState);

  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem('jobs'));
    const jobNextId = JSON.parse(localStorage.getItem('jobNextId'));
    if (jobs && jobs.length > 0) {
      dispatch({ type: "set", jobs: jobs, jobNextId: jobNextId });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
    localStorage.setItem('jobId', JSON.stringify(jobNextId));
  }, [jobs, jobNextId])

  return (
    <JobContext.Provider value={{ dispatch: dispatch }}>
      <Container>
        <h1 className='mt-4'>Job Manager</h1>
        <JobCreator jobNextId={jobNextId} />
        <JobList jobs={jobs} />
      </Container>
    </JobContext.Provider>
  )
};

export { Job, JobContext };