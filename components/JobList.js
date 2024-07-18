// components/JobList.js
import { useState } from 'react';
import JobForm from './JobForm';
import Modal from './Modal';
import Card from './Card';

const jobs = [
  { id: 1, title: 'Software Engineer', description: 'Develop and maintain software solutions.' },
  { id: 2, title: 'Product Manager', description: 'Oversee product development and strategy.' },
  { id: 3, title: 'UX Designer', description: 'Design user interfaces and experiences.' },
];

const JobList = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

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
              <button onClick={() => handleApplyClick(job)}>Apply</button>
            }
            horizontal
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
