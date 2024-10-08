import { useRouter } from 'next/router';
import JobFormAdmin from '../../../components/JobFormAdmin';
import api from '../../../utils/api'
const CreateJobPage = () => {
  const router = useRouter();

  const handleCreateJob = async (jobData) => {
    console.log('Job data:', jobData);
    const response = await api.post(
      `/admin/jobs`,
      jobData    );
    router.push('/admin');
  };

  return (
    <div>
      <h1>Create Job</h1>
      <JobFormAdmin onSubmit={handleCreateJob} />
    </div>
  );
};

export default CreateJobPage;
