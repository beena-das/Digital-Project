import React from 'react'
import './counter.css'
import CountUp from 'react-countup';

const stats = [
  { number: 200000, label: 'STUDENTS' },
  { number: 1000, label: 'COURSES' },
  { number: 300, label: 'CLIENTS' },
  { number: 20, label: 'YEARS SERVING' },
];

const Counter = () => {
  return (
    <section className="counter-section">
      <div className="counter-overlay">
        <div className="counter-wrapper">
          {stats.map((stat, index) => (
            <div className="counter-box" key={index}>
              <h2>
                <CountUp end={stat.number} duration={3} separator="," />
              </h2>
              <p>+ {stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
  
export default Counter;