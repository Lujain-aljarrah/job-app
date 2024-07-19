import { useEffect, useState } from 'react';
import JobForm from './JobForm';
import Modal from './Modal';
import Card from './Card';
import api from '../utils/api'

const JobList = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const response = await api.get('/jobs');
      setJobs(response.data);
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
    }
    console.log(jobs)

  };
  const handleApplyClick = (job) => setSelectedJob(job);

  const handleCloseModal = () => setSelectedJob(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      <div className="card-container">
        {jobs.map(job => (
          <Card
            key={job.id}
            title={job.title}
            content={job.description}
            footer={ 
              job.applications.length === 0 ?
              <button onClick={() => handleApplyClick(job)}>Apply</button>
             : <button disabled style={{backgroundColor: 'gray'}}>Applied</button>       
                 }
          />
        ))}
      </div>
      {selectedJob && (
        <Modal onClose={handleCloseModal}>
          <h2>Apply for {selectedJob.title}</h2>
          <JobForm jobId={selectedJob.id} />
        </Modal>
      )}
    </div>
  );
};

export default JobList;
