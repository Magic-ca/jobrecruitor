import { getStrDate } from "../../../utils";
import { useContext } from "react";
import { JobContext } from "../../../pages/job";

const JobItem = ({ data }) => {
  const { startJob, endJob, removeJob } = useContext(JobContext);

  const getStrStaus = (status) => {
    if (status === 0) {
      return 'Not Started';
    } else if (status === 1) {
      return 'In Progress';
    }
    return 'Finished';
  }

  const getAction = (status) => {
    if (status === 0) {
      return <button onClick={() => { startJob(data.id) }} className="fa fa-caret-right me-2" />;
    } else if (status === 1) {
      return <button onClick={() => { endJob(data.id) }} className="fa fa-stop me-2" />;
    }
    return;
  }

  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.title}</td>
      <td>{data.client}</td>
      <td>${data.hourly}</td>
      <td>{getStrStaus(data.status)}
      </td>
      <td>{getStrDate(data.createdAt)}</td>
      <td>{getStrDate(data.updatedAt)}</td>
      <td>{
        <>
          {getAction(data.status)}
          <button onClick={() => removeJob(data.id)} className="fa fa-trash" />
        </>
      }</td>
    </tr>
  )
};

export default JobItem;