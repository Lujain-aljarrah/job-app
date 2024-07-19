import { useRouter } from 'next/router';
import Card from '../components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';


const AdminPage = () => {
  const [jobs, setJobs] = useState([]);
  const router = useRouter();

  const fetchJobs = async () => {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/admin/jobs`);
      setJobs(response.data);
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
    }
  };

  const handleViewApplications = async (jobId) => {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/admin/jobs/${jobId}`);
      const jobData = response.data;
   
      router.push({
        pathname: `/admin/jobs/${jobId}`,
        query: { job: JSON.stringify(jobData) }
      });
    } catch (error) {
      console.error('Failed to fetch job details:', error);
    }
  };

  const createJobPage = () => {
    router.push({
      pathname: `/admin/jobs/create-job`,
    });
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <button onClick={createJobPage}> Create New Job</button>
      <div className="card-container">
        {jobs.map(job => (
          <Card
            key={job.id}
            title={job.title}
            content={
              <>
                <div><strong>Company:</strong> {job.companyName}</div>
                <div><strong>Location:</strong> {job.companyLocation}</div>
                <div><strong>Type:</strong> {job.type}</div>
                <div><strong>Description:</strong> {job.description}</div>
                <div><strong>Applications:</strong> {job._count.applications}</div>
              </>
            }
            footer={ job._count.applications > 0 &&
              <button onClick={() => handleViewApplications(job.id)}>View Applications</button>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
