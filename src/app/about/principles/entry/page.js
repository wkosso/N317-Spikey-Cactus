"use client";

import { useState } from 'react';
import styles from './EntryForm.module.css';

export default function EntryForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Optionally, you could add functionality to save the data somewhere
    setFormData({ title: '', description: '', details: '' });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add New Principle</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={styles.input}
          placeholder="Enter principle title"
          required
        />

        <label className={styles.label}>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className={styles.textarea}
          placeholder="Enter a brief description"
          required
        />

        <label className={styles.label}>Details</label>
        <textarea
          name="details"
          value={formData.details}
          onChange={handleChange}
          className={styles.textarea}
          placeholder="Enter additional details"
        />

        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
}
