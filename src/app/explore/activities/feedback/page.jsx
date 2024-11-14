'use client';
import { useState } from 'react';
import styles from './feedbackForm.module.css';

export default function FeedbackForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        activity: 'hiking',
        feedback: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Feedback Submitted:\n${JSON.stringify(formData, null, 2)}`);
        setFormData({ name: '', email: '', activity: 'hiking', feedback: '' });
    };

    return (
        <div className={styles.feedbackFormContainer}>
            <h2>Share Your Experience</h2>
            <form onSubmit={handleSubmit} className={styles.feedbackForm}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                    />
                </label>
                <label>
                    Activity:
                    <select name="activity" value={formData.activity} onChange={handleChange}>
                        <option value="hiking">Hiking Trails</option>
                        <option value="wildlife">Wildlife Spotting</option>
                        <option value="tours">Guided Tours</option>
                    </select>
                </label>
                <label>
                    Feedback:
                    <textarea
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange}
                        placeholder="Share your experience..."
                        required
                    />
                </label>
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
}
