import { useState } from 'react';

const JobFormAdmin = ({ job, onSubmit }) => {
  const [title, setTitle] = useState(job ? job.title : '');
  const [description, setDescription] = useState(job ? job.description : '');
  const [companyName, setCompanyName] = useState(job ? job.companyName : '');
  const [companyLocation, setCompanyLocation] = useState(job ? job.companyLocation : '');
  const [type, setType] = useState(job ? job.type : 'HYBRID');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, companyName, companyLocation, type });
  };

  return (
    <form onSubmit={handleSubmit} className="job-form">
      <div className="form-group">
        <label htmlFor="title">Job Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="companyLocation">Company Location</label>
        <input
          type="text"
          id="companyLocation"
          value={companyLocation}
          onChange={(e) => setCompanyLocation(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="type">Job Type</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        >
          <option value="HYBRID">HYBRID</option>
          <option value="ONSITE">ONSITE</option>
          <option value="REMOTE">REMOTE</option>
        </select>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default JobFormAdmin;
