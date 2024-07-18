import { useRouter } from 'next/router';
import Card from '../../components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [jobs, setJobs] = useState([]);
  const router = useRouter();

  const fetchJobs = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/jobs`);
      setJobs(response.data);
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
    }
  };

  const handleViewApplications = (job) => {
    router.push({
      pathname: `/admin/jobs/${job.id}`,
      query: { job: JSON.stringify(job) }
    });
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
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
              <button onClick={() => handleViewApplications(job)}>View Applications</button>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
