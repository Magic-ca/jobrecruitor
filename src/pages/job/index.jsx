import { createContext } from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import JobCreator from '../../components/Job/JobCreator';
import JobList from '../../components/Job/JobList';

const JobContext = createContext();

const Job = () => {

  const [jobs, setJobs] = useState([]);
  const [jobId, setJobId] = useState(1);

  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem('jobs'));
    const jobId = JSON.parse(localStorage.getItem('jobId'));
    if (jobId) {
      setJobId(jobId);
    }
    if (jobs) {
      setJobs(jobs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
    localStorage.setItem('jobId', JSON.stringify(jobId));
  }, [jobs, jobId])

  const addJob = (newJob) => {
    setJobs([...jobs, { ...newJob, id: jobId, status: 0, createdAt: Date.now(), updatedAt: Date.now() }]);
    setJobId(jobId + 1);
  }

  const startJob = (jobId) => {
    setJobs(
      jobs.map((item) => {
        return item.id === jobId ? { ...item, status: 1 } : item;
      })
    );
  }

  const endJob = (jobId) => {
    setJobs(
      jobs.map((item) => {
        return item.id === jobId ? { ...item, status: 2, updatedAt: Date.now() } : item;
      })
    );
  }

  const removeJob = (jobId) => {
    setJobs(
      jobs.filter(job => job.id !== jobId)
    )
  }

  return (
    <JobContext.Provider value={{ addJob: addJob, startJob: startJob, endJob: endJob, removeJob: removeJob }}>
      <Container>
        <h1 className='mt-4'>Job Manager</h1>
        <JobCreator />
        <JobList jobs={jobs} />
      </Container>
    </JobContext.Provider>
  )
};

export { Job, JobContext };