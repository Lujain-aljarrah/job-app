import { useRouter } from 'next/router';
import ApplicationList from '../../../components/ApplicationList';

const JobApplicationsPage = () => {
  const router = useRouter();
  const { query } = router;
  const jobData = query.job ? JSON.parse(query.job) : null;

  if (!jobData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>Applications for {jobData.title}</h1>
      <div className="job-details">
        <div><strong>Company:</strong> {jobData.companyName}</div>
        <div><strong>Location:</strong> {jobData.companyLocation}</div>
        <div><strong>Type:</strong> {jobData.type}</div>
        <div><strong>Description:</strong> {jobData.description}</div>
      </div>
      <div className="card-container">
        <ApplicationList applications={jobData.applications || []} />
      </div>
    </div>
  );
};

export default JobApplicationsPage;
