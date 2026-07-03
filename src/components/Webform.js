import React, { useState } from 'react';
import '../styles/Webform.css';

const FORM_TOKEN = '071af95fa63dd3b9ced8292a6201f8e0f4274f2b12eaf790a99ebc71bd4e1a13';
const ENDPOINT = 'https://crmdev.ersbio.co.za/api/v1/public_form_submit';
const HIDDEN_DEFAULTS = {
  lead_source: 'Conference',
};

function Webform() {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const values = { ...HIDDEN_DEFAULTS };

    new FormData(form).forEach((value, key) => {
      if (value instanceof File && value.size === 0) {
        return;
      }

      if (values[key]) {
        values[key] = Array.isArray(values[key]) ? [...values[key], value] : [values[key], value];
      } else {
        values[key] = value;
      }
    });

    form.querySelectorAll('input[type="checkbox"]').forEach((input) => {
      values[input.name] = input.checked;
    });

    setIsSubmitting(true);
    setMessage('Submitting...');

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: FORM_TOKEN, values }),
      });

      const data = await res.json();
      if (!res.ok || data.ok === false) {
        throw new Error(data.message || data.error || 'Submission failed');
      }

      setMessage('Thank you. Your response has been submitted.');
      form.reset();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="crm-form" id="crm-webform" onSubmit={handleSubmit}>
      <h1>Test</h1>
      <p className="crm-form-description">Test</p>

      <div className="crm-form-grid">
        <div className="crm-form-field">
          <label htmlFor="single_line">
            Name <span className="crm-form-required">*</span>
          </label>
          <input id="single_line" type="text" name="single_line" placeholder="Name" required />
        </div>

        <div className="crm-form-field">
          <label htmlFor="single_line_2">
            Surname <span className="crm-form-required">*</span>
          </label>
          <input id="single_line_2" type="text" name="single_line_2" placeholder="Surname" required />
        </div>

        <div className="crm-form-field">
          <label htmlFor="single_line_3">
            Company <span className="crm-form-required">*</span>
          </label>
          <input id="single_line_3" type="text" name="single_line_3" required />
        </div>

        <div className="crm-form-field">
          <label htmlFor="number">
            Phone number <span className="crm-form-required">*</span>
          </label>
          <input id="number" type="tel" name="number" required />
        </div>

        <div className="crm-form-field">
          <label htmlFor="single_line_4">
            Email <span className="crm-form-required">*</span>
          </label>
          <input id="single_line_4" type="email" name="single_line_4" required />
        </div>

        <div className="crm-form-field">
          <label htmlFor="file_upload">File Upload</label>
          <input id="file_upload" type="file" name="file_upload" />
          <div className="crm-form-help">Upload a PDF, image, or document.</div>
        </div>
      </div>

      <div className="crm-form-actions">
        <button className="crm-form-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        <button className="crm-form-reset" type="reset" disabled={isSubmitting}>
          Reset
        </button>
      </div>

      {message && <div className="crm-form-message">{message}</div>}
    </form>
  );
}

export default Webform;
