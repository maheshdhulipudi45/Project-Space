import React, { useState } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './SignupForm.module.css';

const SignupForm = () => {


  const [formData, setFormData] = useState({
    profilePic: null,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
  });

  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (value.trim() !== '') {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, profilePic: file }));

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }

    setErrors((prev) => ({ ...prev, profilePic: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    
    Object.keys(formData).forEach((key) => {
      if ((key !== 'profilePic' && formData[key].trim() === '') ||
          (key === 'profilePic' && formData[key] === null)) {
        newErrors[key] = `Please enter ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`;
      }
    });

   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Enter a 10-digit phone number.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('User Registered:', formData);
      toast.success('Account created successfully!');
      setTimeout(() => navigate('/login'), 2000);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.profileContainer}>
          <label className={styles.profileLabel}>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className={styles.hiddenInput}
            />
            {preview ? (
              <img src={preview} alt="Profile Preview" className={styles.profilePreview} />
            ) : (
              <span>Select Profile Picture</span>
            )}
          </label>
          {errors.profilePic && <p className={styles.error}>{errors.profilePic}</p>}
        </div>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.firstName && <p className={styles.error}>{errors.firstName}</p>}

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.phone && <p className={styles.error}>{errors.phone}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}

        <button type="submit" className={styles.button}>Sign Up</button>

        <p className={styles.signuppara}>
          Already have an account?{' '}
          <span className={styles.linkspan} onClick={() => navigate('/login')}>
            Login.
          </span>
        </p>
      </form>

      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default SignupForm;
