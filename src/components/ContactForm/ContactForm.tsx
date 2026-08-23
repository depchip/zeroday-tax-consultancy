'use client';

import { FormEvent, useState } from 'react';
import styles from './ContactForm.module.css';

// Set this to a Formspree (or other) form endpoint to wire up real email
// delivery, e.g. "https://formspree.io/f/xxxxxxx". Left empty, the form
// validates and shows a success state without sending anything anywhere.
const FORM_ENDPOINT = '';

interface FormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+\-\s()]{7,20}$/;

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!form.phone.trim()) {
      nextErrors.phone = 'Please enter your phone number.';
    } else if (!PHONE_PATTERN.test(form.phone.trim())) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }
    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email.';
    } else if (!EMAIL_PATTERN.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error('Submission failed');
      }
      setStatus('success');
      setForm({ name: '', phone: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>We help you see the world differently</h2>
          <p className={styles.subtext}>
            Tell us a bit about what you need and one of our consultants will get back to you.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="contact-name">Name *</label>
              <input
                id="contact-name"
                type="text"
                value={form.name}
                onChange={(e) => updateField('name', e.target.value)}
                className={errors.name ? styles.inputError : undefined}
              />
              {errors.name && <span className={styles.errorText}>{errors.name}</span>}
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-phone">Phone Number *</label>
              <input
                id="contact-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                className={errors.phone ? styles.inputError : undefined}
              />
              {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-email">Email *</label>
            <input
              id="contact-email"
              type="email"
              value={form.email}
              onChange={(e) => updateField('email', e.target.value)}
              className={errors.email ? styles.inputError : undefined}
            />
            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              rows={5}
              value={form.message}
              onChange={(e) => updateField('message', e.target.value)}
            />
          </div>

          <button type="submit" className={styles.submit} disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Submit Message'}
          </button>

          {status === 'success' && (
            <p className={styles.successText}>Thank you — your message has been received.</p>
          )}
          {status === 'error' && (
            <p className={styles.errorBanner}>Something went wrong. Please try again shortly.</p>
          )}
        </form>
      </div>
    </section>
  );
}
