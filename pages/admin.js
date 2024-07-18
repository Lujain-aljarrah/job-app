import { useRouter } from 'next/router';
import Card from '../components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
const jobs = [
  {
    id: 2,
    title: 'Senior Backend Developer',
    description: 'We are seeking a skilled Backend Developer to join our talented development team. The ideal candidate will be responsible for designing, implementing, and maintaining server-side logic, ensuring high performance and responsiveness to requests from the front-end. You will work closely with front-end developers, product managers, and other stakeholders to deliver high-quality, scalable solutions',
    companyName: 'NXGEN',
    companyLocation: 'Abdoun',
    type: 'HYBRID',
    createdAt: '2024-07-18T20:47:00.380Z',
    updatedAt: '2024-07-18T20:47:00.380Z',
    _count: {
      applications: 0
    }
  },
  {
    id: 3,
    title: 'Senior FullStack Developer',
    description: 'We are seeking a skilled Backend Developer to join our talented development team. The ideal candidate will be responsible for designing, implementing, and maintaining client-side logic.',
    companyName: 'Amazon',
    companyLocation: 'Abdali',
    type: 'ONSITE',
    createdAt: '2024-07-18T21:03:18.278Z',
    updatedAt: '2024-07-18T21:03:18.278Z',
    _count: {
      applications: 2
    }
  }
];

const AdminPage = () => {
  // const [jobs, setJobs] = useState([]);
  const router = useRouter();

  // const fetchJobs = async () => {
  //   try {
  //     const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/jobs`);
  //     setJobs(response.data);
  //   } catch (error) {
  //     console.error('Failed to fetch jobs:', error);
  //   }
  // };

  const handleViewApplications = async (jobId) => {
    try {
    //   const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/jobs/${jobId}`);
      // const jobData = response.data;
      const jobData = {
        "id": 2,
        "title": "Senior Backend Developer",
        "description": "We are seeking a skilled Backend Developer to join our talented development team. The ideal candidate will be responsible for designing, implementing, and maintaining server-side logic, ensuring high performance and responsiveness to requests from the front-end. You will work closely with front-end developers, product managers, and other stakeholders to deliver high-quality, scalable solutions",
        "companyName": "NXGEN",
        "companyLocation": "Abdoun",
        "type": "HYBRID",
        "createdAt": "2024-07-18T20:47:00.380Z",
        "updatedAt": "2024-07-18T20:47:00.380Z",
        "applications": [
            {
                "id": 2,
                "userId": 1,
                "jobId": 2,
                "yearsOfExperience": 3,
                "noticePeriod": 30,
                "expectedSalary": 1500,
                "briefIntro": "Having worked extensively with [relevant programming languages/technologies], I have developed and maintained robust applications and services that meet the highest performance standards. My experience in database management, API development, and collaboration with front-end teams has equipped me with a well-rounded skill set that aligns perfectly with the requirements of this role",
                "status": "PENDING",
                "createdAt": "2024-07-18T22:02:08.791Z",
                "updatedAt": "2024-07-18T22:02:08.791Z",
                "user": {
                    "id": 1,
                    "email": "linaomari99@gmail.com",
                    "hashedPassword": "$2b$10$c76qs1XZzXALkaeb6Bhd1u6Sl4LDt9KL0GsQoyOPiGEgc6ZUUZZw.",
                    "firstName": "Lina",
                    "lastName": "Al-Omari",
                    "phoneNumber": "0798956362",
                    "location": "Amman",
                    "role": "USER",
                    "createdAt": "2024-07-18T22:00:29.385Z",
                    "updatedAt": "2024-07-18T22:00:29.385Z"
                }
            }
        ]
    }
      router.push({
        pathname: `/admin/jobs/${jobId}`,
        query: { job: JSON.stringify(jobData) }
      });
    } catch (error) {
      console.error('Failed to fetch job details:', error);
    }
  };

  // useEffect(() => {
  //   fetchJobs();
  // }, []);

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
