import { useState, useRef, useContext } from 'react';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';
import { JobContext } from '../../../pages/job';
import "./index.css";

const JobCreator = ({ jobNextId, setJobNextId }) => {
  const { dispatch } = useContext(JobContext);

  const [newJob, setNewJob] = useState({ id: jobNextId, title: "", client: "", hourly: 50 });

  const inputTitle = useRef();

  const handleSetNewJob = ({ target: { name, value } }) => {
    setNewJob((prev) => { return { ...prev, [name]: value } });
  };

  const createNewJob = (e) => {
    e.preventDefault();
    dispatch({ type: "add", newJob: newJob });
    setJobNextId(++jobNextId);
    setNewJob({ id: jobNextId, title: "", client: "", hourly: 50 })
  }

  return (
    <Form className='col-4 m-auto mt-3 creator-form' onSubmit={createNewJob}>
      <FormGroup className='d-flex mb-3 text-start align-items-center'>
        <label className='col-4'>Project title:</label>
        <div className='col-8'>
          <FormControl placeholder='Job Title' name="title" ref={inputTitle} value={newJob.title} onChange={handleSetNewJob}></FormControl>
        </div>
      </FormGroup>
      <FormGroup className='d-flex mb-3 text-start align-items-center'>
        <label className='col-4'>Client:</label>
        <div className='col-8'>
          <FormControl placeholder='Magic' name="client" value={newJob.client} onChange={handleSetNewJob}></FormControl>
        </div>
      </FormGroup>
      <FormGroup className='d-flex mb-3 text-start align-items-center'>
        <label className='col-4'>Hourly Rate($):</label>
        <div className='col-8'>
          <FormControl type="number" name="hourly" min="1" value={newJob.hourly} onChange={handleSetNewJob} />
        </div>
      </FormGroup>
      <FormGroup className='mb-3 d-flex justify-content-end'>
        <div className='col-2'>
          <Button className={(newJob.title !== "") && (newJob.client !== "") && (newJob.hourly > 0) ? '' : 'disabled'} type="submit">Create</Button>
        </div>
      </FormGroup>
    </Form >
  )
};

export default JobCreator;