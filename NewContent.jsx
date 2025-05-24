// npm install framer-motion



import React from 'react';
import styles from './Testimonials.module.css';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Rohit Verma',
    text: ' B Block Resident CampusFix made it super easy to report a broken fan in my room. The electrician arrived the next day and resolved it quickly. Excellent service!',
  },
  {
    name: 'Anjali Mehta',
    text: ' Admin Staff We’ve seen a huge improvement in complaint resolution times since using CampusFix. The tracking feature keeps everything transparent and organized.',
  },
  {
    name: 'Siddharth Reddy ',
    text: ' C Block Student I appreciate how CampusFix lets us upload photos with complaints. It helps get the issue resolved faster. Very user-friendly system',
  },
    {
    name: 'Neha Sharma',
    text: ' Hostel Warden Managing electrical issues across multiple blocks used to be a headache. Now, with CampusFix’s admin panel and filters, everything runs smoothly',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Testimonials = () => {
  return (
    <motion.div 
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
    >
      <motion.h2 className={styles.heading} variants={fadeInUp}>Client Testimonials</motion.h2>

      {testimonials.map((item, idx) => (
        <motion.div key={idx} className={styles.testimonial} variants={fadeInUp}>
          <p className={styles.name}>{item.name}</p>
          <p className={styles.text}>"{item.text}"</p>
        </motion.div>
      ))}

      <motion.div className={styles.contactSection} variants={fadeInUp}>
        <h3 className={styles.brand}>CampusCrew</h3>
        <button className={styles.contactButton}>Contact</button>
      </motion.div>

      <motion.footer className={styles.footer} variants={fadeInUp}>
        <div>
          <p>123-456-7890</p>
          <p>CampusCrew@mysite.com</p>
          <p>Surampalem,Adb Road,533437</p>
        </div>
        <div>
          <p>Privacy Policy</p>
          <p>Accessibility Statement</p>
        </div>
        <div>
          <p>© 2025 by CampusCrew Powered and secured by <a href="https://wix.com" target="_blank" rel="noopener noreferrer">CC</a></p>
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default Testimonials;
