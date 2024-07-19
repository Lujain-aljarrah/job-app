import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const EditJobPage = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    companyName: '',
    companyLocation: '',
    type: 'REMOTE'
  });
  
  useEffect(() => {
    if (id) {
      const fetchJob = async () => {
        try {
          const response = await axios.get(`${process.env.BASE_URL}/admin/jobs/${id}`);
          setFormData(response.data);
        } catch (error) {
          console.error('Failed to fetch job data:', error);
        }
      };
      
      fetchJob();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    delete formData.applications
    try {
      await axios.patch(`${process.env.BASE_URL}/admin/jobs/${id}`, formData);
      router.push('/admin');
    } catch (error) {
      console.error('Failed to update job:', error);
    }
  };

  return (
    <div className="container">
      <h1>Edit Job</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyLocation">Company Location</label>
          <input
            type="text"
            id="companyLocation"
            name="companyLocation"
            value={formData.companyLocation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Job Type</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="REMOTE">REMOTE</option>
            <option value="ONSITE">ONSITE</option>
            <option value="HYBRID">HYBRID</option>
          </select>
        </div>
        <button type="submit">Update Job</button>
      </form>
    </div>
  );
};

export default EditJobPage;
