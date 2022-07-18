import { createContext, useReducer } from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import JobCreator from '../../components/Job/JobCreator';
import JobList from '../../components/Job/JobList';
import { jobReducer, initialState } from "../../store/JobStore";

const JobContext = createContext();

const Job = () => {
  const [{ jobNextId, jobs }, dispatch] = useReducer(jobReducer, initialState);

  const getJobStateFromStorage = (jobsKey, jobNextIdKey) => {
    try {
      const jobs = JSON.parse(localStorage.getItem(jobsKey));
      const jobNextId = JSON.parse(localStorage.getItem(jobNextIdKey));
      if (jobs && jobs.length > 0) {
        dispatch({ type: "set", jobs: jobs, jobNextId: jobNextId });
      }
    } catch (error) {
      throw new Error('LocalStorage Error', error);
    }
  }

  const setJobStateToStorage = (jobs, jobNextId) => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
    localStorage.setItem('jobId', JSON.stringify(jobNextId));
  }

  useEffect(() => {
    getJobStateFromStorage('jobs', 'jobNextId');
  }, []);

  useEffect(() => {
    setJobStateToStorage(jobs, jobNextId);
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