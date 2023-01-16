import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DataCollection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rounds: '',
  });

  const history = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history('/single-game', { state: { data: formData } });
  };

  return (
    <div className="padding-top">
      <div className="sg-container">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input required type="text" name="name" onChange={handleChange} />
          </label>
          <br />
          <label>
            Email:
            <input required type="email" name="email" onChange={handleChange} />
          </label>
          <br />
          <label>
            Rounds:
            <select required name="rounds" onChange={handleChange}>
              <option value="3">3</option>
              <option value="7">7</option>
              <option value="9">9</option>
            </select>
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default DataCollection;
