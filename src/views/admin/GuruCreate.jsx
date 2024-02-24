// CreateData.jsx

import React, { useState } from 'react';
import axios from 'axios';

const CreateData = () => {
  const [formData, setFormData] = useState({
    name: '',
    nip: '',
    gender: '',
    subject: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/admin/datateachers', formData);
      console.log(response.data); // Response from Laravel API
      // You can handle success or navigate to another page here
    } catch (error) {
      console.error('Error creating data:', error);
      // You can handle errors here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        NIP:
        <input type="text" name="nip" value={formData.nip} onChange={handleChange} />
      </label>
      <br />
      <label>
        Gender:
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
      </label>
      <br />
      <label>
        Subject:
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Create Data</button>
    </form>
  );
};

export default CreateData;
