import React from "react";

const ResumePreview = ({ resumeData }) => {
  return (
    <div className="resume-preview">
      <h2>Resume Preview</h2>

      <h3>Professional Summary</h3>
      <p>{resumeData.professionalSummary}</p>

      <h3>Career Objective</h3>
      <p>{resumeData.careerObjective}</p>

      <h3>Skills</h3>
      <p>{resumeData.skills}</p>

      <h3>Education</h3>
      <ul>
        {resumeData.education.map((edu, index) => (
          <li key={index}>
            {edu.degree} from {edu.institution} ({edu.year})
          </li>
        ))}
      </ul>

      <h3>Experience & Internships</h3>
      <ul>
        {resumeData.experience.map((exp, index) => (
          <li key={index}>
            {exp.title} at {exp.company} ({exp.duration})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumePreview;
