import { memo } from "react";
import { Table } from "react-bootstrap";
import JobItem from "../JobItem";

const JobList = ({ jobs }) => {
  return (
    <Table className="table-sort table-arrows remember-sort mt-5">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Client</th>
          <th>Hourly</th>
          <th>Status</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          jobs.map((item, index) => <JobItem data={item} key={index} />)
        }
      </tbody>
    </Table>
  )
}

export default memo(JobList);