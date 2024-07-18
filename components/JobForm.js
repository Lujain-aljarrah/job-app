// components/JobForm.js
import { useState } from 'react';

const JobForm = ({ jobId }) => {
  const [formData, setFormData] = useState({
    userId: 1, // Replace with actual user ID if available
    jobId,
    yearsOfExperience: '',
    noticePeriod: '',
    expectedSalary: '',
    briefIntro: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with actual form submission logic
    console.log('Form data submitted:', formData);
    // Example: fetch('/api/applications', { method: 'POST', body: JSON.stringify(formData) })
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="yearsOfExperience">Years of Experience:</label>
        <input
          type="number"
          id="yearsOfExperience"
          name="yearsOfExperience"
          value={formData.yearsOfExperience}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="noticePeriod">Notice Period (in days):</label>
        <input
          type="number"
          id="noticePeriod"
          name="noticePeriod"
          value={formData.noticePeriod}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="expectedSalary">Expected Salary:</label>
        <input
          type="number"
          id="expectedSalary"
          name="expectedSalary"
          value={formData.expectedSalary}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="briefIntro">Brief Introduction:</label>
        <textarea
          id="briefIntro"
          name="briefIntro"
          value={formData.briefIntro}
          onChange={handleChange}
          rows="4"
          required
        />
      </div>
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default JobForm;
