import { useState } from 'react';
import Card from './Card';
import api from '../utils/api'
const ApplicationList = ({ applications }) => {
  const [statuses, setStatuses] = useState(
    applications.reduce((acc, app) => ({ ...acc, [app.id]: app.status }), {})
  );

  const handleStatusChange = (applicationId, newStatus) => {
    setStatuses({
      ...statuses,
      [applicationId]: newStatus
    });
  };

  const handleSubmit = async (applicationId) => {
    const updatedStatus = statuses[applicationId];
    try {
      const response = await api.patch(
        `/admin/applications/${applicationId}`,
        { status: updatedStatus }
      );
      console.log('Status updated:', response.data);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div>
      <div className="card-container">
        {applications.map(application => (
          <Card
            key={application.id}
            title={`Applicant: ${application.user.firstName} ${application.user.lastName}`}
            content={
              <>
                <div><strong>Email:</strong> {application.user.email}</div>
                <div><strong>Phone:</strong> {application.user.phoneNumber}</div>
                <div><strong>Location:</strong> {application.user.location}</div>
                <div><strong>Years of Experience:</strong> {application.yearsOfExperience}</div>
                <div><strong>Notice Period:</strong> {application.noticePeriod} days</div>
                <div><strong>Expected Salary:</strong> ${application.expectedSalary}</div>
                <div><strong>Brief Introduction:</strong> {application.briefIntro}</div>
                <div>
                  <strong>Status:</strong>
                  <select
                    value={statuses[application.id]}
                    onChange={(e) => handleStatusChange(application.id, e.target.value)}
                  >
                    <option value="PENDING">PENDING</option>
                    <option value="ACCEPTED">ACCEPTED</option>
                    <option value="REJECTED">REJECTED</option>
                  </select>
                </div>
                <button onClick={() => handleSubmit(application.id)}>Update Status</button>
              </>
            }
            horizontal
          />
        ))}
      </div>
    </div>
  );
};

export default ApplicationList;
