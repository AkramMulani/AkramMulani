import React from 'react';
import './Skills.css';
import { Util } from '../Util';
import { iconMap } from '../iconMap';
import { motion } from 'framer-motion';
import { FaTools } from 'react-icons/fa';

const containerVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6
    }
  })
};

function Skills() {
  return (
    <div className="container py-5 skills-page">
      <h2 className="text-center mb-4">Skills</h2>

      <div className="row">
        {Util.skills.map((category, index) => {
          const title = Object.keys(category)[0];
          const skillList = category[title];

          return (
            <motion.div
              className="col-md-6 mb-4"
              key={index}
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="skill-card p-4 rounded shadow-sm h-100">
                <h4 className="section-title mb-3">{title}</h4>
                <div className="skill-badges d-flex flex-wrap gap-2">
                  {skillList.map((skill, idx) => (
                    <span className="badge-skill d-flex align-items-center gap-2" key={idx}>
                      {iconMap[skill] || <FaTools />} {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
