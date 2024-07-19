import { useRouter } from 'next/router';
import Card from '../components/Card';
import { useEffect, useState } from 'react';
import api from '../utils/api';

const AdminPage = () => {
  const [jobs, setJobs] = useState([]);
  const router = useRouter();

  const fetchJobs = async () => {
    try {
      const response = await api.get('/admin/jobs');
       setJobs(response.data);
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
    }
  };

  const handleViewApplications = async (jobId) => {
    try {
      const response = await api.get(`/admin/jobs/${jobId}`);
      const jobData = response.data;
   
      router.push({
        pathname: `/admin/jobs/${jobId}`,
        query: { job: JSON.stringify(jobData) }
      });
    } catch (error) {
      console.error('Failed to fetch job details:', error);
    }
  };

  const handleEditJob = (jobId) => {
    router.push(`/admin/jobs/edit/${jobId}`);
  };

  const handleDeleteJob = async (jobId) => {
    try {
      await api.delete(`/admin/jobs/${jobId}`);
      setJobs(jobs.filter(job => job.id !== jobId));
    } catch (error) {
      console.error('Failed to delete job:', error);
    }
  };
  

  const createJobPage = () => {
    router.push(`/admin/jobs/create-job`);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <button onClick={createJobPage}>Create New Job</button>
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
            footer={
              <>
                {job._count.applications === 0 && (
                  <>
                  <button onClick={() => handleEditJob(job.id)}>Edit Job</button>
                  <button onClick={() => handleDeleteJob(job.id)}>Delete Job</button> 
                  </>
                )}
                {job._count.applications > 0 && (
                  <button onClick={() => handleViewApplications(job.id)}>View Applications</button>
                )}

              </>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
