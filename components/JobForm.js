import { useState } from 'react';
import api from '../utils/api';

const JobForm = ({ jobId }) => {
  const [formData, setFormData] = useState({
    userId: 1,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.yearsOfExperience = Number(formData.yearsOfExperience);
    formData.noticePeriod = Number(formData.noticePeriod);
    formData.expectedSalary = Number(formData.expectedSalary);
    const response = await api.post(
      `/jobs/${jobId}/submit`,
      formData
    );
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
        <label htmlFor="expectedSalary">Expected Salary:(JOD)</label>
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
          placeholder='Why are you fit for this role?'
          rows="4"
          required
        />
      </div>
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default JobForm;
