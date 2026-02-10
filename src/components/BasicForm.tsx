import React, { useState } from "react";
import "./BasicForm.css";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const BasicForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const [submittedData, setSubmittedData] = useState<FormData[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add to list
    setSubmittedData(prev => [...prev, formData]);
    // Reset form
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="form-container">
      <h2>Basic Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      {/* Display Submitted List */}
      <div className="submitted-list">
        <h3>Submitted Data</h3>
        {submittedData.length === 0 ? (
          <p>No entries yet.</p>
        ) : (
          <ul>
            {submittedData.map((data, index) => (
              <li key={index}>
                <strong>{data.name}</strong> – {data.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BasicForm;
