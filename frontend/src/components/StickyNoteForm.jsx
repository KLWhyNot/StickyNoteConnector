import React, { useState } from 'react';

const StickyNoteForm = () => {
  const [formData, setFormData] = useState({
    professionalIdentity: '',
    skills: '',
    businessType: '',
    collaborationNeeds: '',
    opportunityDescription: '',
    color: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling form submission can go here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Professional Identity:</label>
        <input type="text" name="professionalIdentity" value={formData.professionalIdentity} onChange={handleChange} />
      </div>
      <div>
        <label>Skills:</label>
        <input type="text" name="skills" value={formData.skills} onChange={handleChange} />
      </div>
      <div>
        <label>Business Type:</label>
        <input type="text" name="businessType" value={formData.businessType} onChange={handleChange} />
      </div>
      <div>
        <label>Collaboration Needs:</label>
        <input type="text" name="collaborationNeeds" value={formData.collaborationNeeds} onChange={handleChange} />
      </div>
      <div>
        <label>Opportunity Description:</label>
        <textarea name="opportunityDescription" value={formData.opportunityDescription} onChange={handleChange}></textarea>
      </div>
      <div>
        <label>Color:</label>
        <input type="color" name="color" value={formData.color} onChange={handleChange} />
      </div>
      <button type="submit">Create Sticky Note</button>
    </form>
  );
};

export default StickyNoteForm;