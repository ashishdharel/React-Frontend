import React, { useState } from 'react';
import './App.css';
function App() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
      setSubmitted(true);
      setName('');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
        {submitted && <p>Data submitted successfully!</p>}
      </header>
    </div>
  );
}
export default App;