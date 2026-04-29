import React, { useState } from 'react';

const CreateSeminar = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [window, setWindow] = useState('');
  const [faculty, setFaculty] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setSuccess('Seminar created successfully!');
    setTitle('');
    setDate('');
    setWindow('');
    setFaculty('');
  };

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', padding: 24, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Create Seminar Session</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Seminar Title" value={title} onChange={e => setTitle(e.target.value)} required style={{ width: '100%', marginBottom: 8 }} />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} required style={{ width: '100%', marginBottom: 8 }} />
        <input type="text" placeholder="Window (e.g., Alternate Wednesday)" value={window} onChange={e => setWindow(e.target.value)} required style={{ width: '100%', marginBottom: 8 }} />
        <input type="text" placeholder="Faculty (comma separated)" value={faculty} onChange={e => setFaculty(e.target.value)} required style={{ width: '100%', marginBottom: 8 }} />
        <button type="submit" style={{ width: '100%' }}>Create</button>
      </form>
      {success && <div style={{ color: 'green', marginTop: 8 }}>{success}</div>}
    </div>
  );
};

export default CreateSeminar;
