import React, { useState } from "react";

const Form = ({ resumeData, updateResumeData }) => {
  const [formData, setFormData] = useState(resumeData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        { degree: "", institution: "", year: "" },
      ],
    });
  };

  const handleAddExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        { title: "", company: "", duration: "" },
      ],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateResumeData(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Resume Details</h2>

      {/* Professional Summary */}
      <div className="form-group">
        <label>Professional Summary:</label>
        <textarea
          name="professionalSummary"
          value={formData.professionalSummary}
          onChange={handleChange}
        />
      </div>

      {/* Career Objective */}
      <div className="form-group">
        <label>Career Objective:</label>
        <textarea
          name="careerObjective"
          value={formData.careerObjective}
          onChange={handleChange}
        />
      </div>

      {/* Skills */}
      <div className="form-group">
        <label>Skills:</label>
        <textarea
          name="skills"
          value={formData.skills}
          onChange={handleChange}
        />
      </div>

      {/* Education */}
      <div className="form-group">
        <h3>Education</h3>
        {formData.education.map((edu, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Degree"
              name={`education-degree-${index}`}
              value={edu.degree}
              onChange={(e) => {
                const newEdu = [...formData.education];
                newEdu[index].degree = e.target.value;
                setFormData({ ...formData, education: newEdu });
              }}
            />
            <input
              type="text"
              placeholder="Institution"
              name={`education-institution-${index}`}
              value={edu.institution}
              onChange={(e) => {
                const newEdu = [...formData.education];
                newEdu[index].institution = e.target.value;
                setFormData({ ...formData, education: newEdu });
              }}
            />
            <input
              type="text"
              placeholder="Year"
              name={`education-year-${index}`}
              value={edu.year}
              onChange={(e) => {
                const newEdu = [...formData.education];
                newEdu[index].year = e.target.value;
                setFormData({ ...formData, education: newEdu });
              }}
            />
          </div>
        ))}
        <button type="button" onClick={handleAddEducation}>
          Add Education
        </button>
      </div>

      {/* Experience */}
      <div className="form-group">
        <h3>Experience & Internships</h3>
        {formData.experience.map((exp, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Job Title"
              name={`experience-title-${index}`}
              value={exp.title}
              onChange={(e) => {
                const newExp = [...formData.experience];
                newExp[index].title = e.target.value;
                setFormData({ ...formData, experience: newExp });
              }}
            />
            <input
              type="text"
              placeholder="Company"
              name={`experience-company-${index}`}
              value={exp.company}
              onChange={(e) => {
                const newExp = [...formData.experience];
                newExp[index].company = e.target.value;
                setFormData({ ...formData, experience: newExp });
              }}
            />
            <input
              type="text"
              placeholder="Duration"
              name={`experience-duration-${index}`}
              value={exp.duration}
              onChange={(e) => {
                const newExp = [...formData.experience];
                newExp[index].duration = e.target.value;
                setFormData({ ...formData, experience: newExp });
              }}
            />
          </div>
        ))}
        <button type="button" onClick={handleAddExperience}>
          Add Experience
        </button>
      </div>

      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
