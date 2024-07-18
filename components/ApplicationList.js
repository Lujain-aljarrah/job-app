import Card from './Card';

const ApplicationList = ({ applications }) => {
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
                <div><strong>Status:</strong> {application.status}</div>
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
